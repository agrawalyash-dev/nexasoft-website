import { type FormEvent, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CircleCheck,
  LoaderCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { careersKey, submitWeb3Form } from "@/lib/web3forms";
import { cn } from "@/lib/utils";
import { careers, experience, interests } from "../data";

type Fields = {
  name: string;
  email: string;
  phone: string;
  location: string;
  interest: string;
  experience: string;
  link: string;
  message: string;
};
type Errors = Partial<Record<keyof Fields | "consent", string>>;
type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  location: "",
  interest: interests[0],
  experience: experience[0],
  link: "",
  message: "",
};

const inputClass =
  "w-full border border-border bg-white px-3.5 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand-navy focus-visible:ring-3 focus-visible:ring-brand-navy/15 aria-invalid:border-red-500";

const Field = ({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1.5 flex items-baseline justify-between text-sm font-medium"
    >
      {label}
      {optional && (
        <span className="text-xs font-normal text-muted-foreground">
          Optional
        </span>
      )}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

const Select = ({
  id,
  value,
  onChange,
  options,
}: {
  id: string;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  options: string[];
}) => (
  <div className="relative">
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={cn(inputClass, "appearance-none pr-10")}
    >
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
    <ChevronDown
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-3.5 size-4.5 -translate-y-1/2 text-brand-navy"
    />
  </div>
);

const CareersForm = () => {
  const [fields, setFields] = useState<Fields>(empty);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [botcheck, setBotcheck] = useState(false);

  const set = (key: keyof Fields) => (e: { target: { value: string } }) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const validate = (): Errors => {
    const e: Errors = {};
    if (!fields.name.trim()) e.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
    if (
      fields.link.trim() && !/^https?:\/\/\S+\.\S+/i.test(fields.link.trim())
    ) {
      e.link = "Please enter a full link starting with http:// or https://.";
    }
    if (!consent) e.consent = "Please agree so we can contact you.";
    return e;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }

    if (!careersKey) {
      const body = [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        fields.phone ? `Phone: ${fields.phone}` : "",
        fields.location ? `Location: ${fields.location}` : "",
        `Area of interest: ${fields.interest}`,
        `Experience: ${fields.experience}`,
        fields.link ? `Resume or portfolio: ${fields.link}` : "",
        "",
        fields.message,
      ]
        .filter(Boolean)
        .join("\n");
      window.location.href = `mailto:${careers.email}?subject=${
        encodeURIComponent(`Careers: ${fields.name}`)
      }&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      await submitWeb3Form(careersKey, {
        subject: `Careers: ${fields.name} (${fields.interest})`,
        from_name: "Nexasoft careers",
        name: fields.name,
        email: fields.email,
        phone: fields.phone || "—",
        location: fields.location || "—",
        interest: fields.interest,
        experience: fields.experience,
        link: fields.link || "—",
        message: fields.message || "—",
        botcheck,
      });
      setStatus("sent");
      setFields(empty);
      setConsent(false);
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex min-h-96 flex-col items-start justify-center border border-border bg-white p-8 sm:p-10"
      >
        <CircleCheck
          aria-hidden="true"
          className="size-10 stroke-[1.4] text-emerald-600"
        />
        <h2 className="mt-5 text-2xl font-semibold tracking-tight">
          Thanks, we have your details.
        </h2>
        <p className="mt-2 max-w-md text-base text-muted-foreground">
          We'll get in touch if a role matches your profile.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Submit another response
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="border border-border bg-white p-6 sm:p-8 lg:p-10"
    >
      {/* Honeypot: hidden from people, bots tick it and Web3Forms rejects the submission */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
        className="hidden"
        aria-hidden="true"
      />

      <h2 className="text-2xl font-semibold tracking-tight">
        Share your details
      </h2>
      <p className="mt-1.5 text-base text-muted-foreground">
        Tell us who you are and what you'd like to work on.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            autoComplete="name"
            value={fields.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field id="phone" label="Phone" optional>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </Field>
        <Field id="location" label="Current location" optional>
          <input
            id="location"
            autoComplete="address-level2"
            value={fields.location}
            onChange={set("location")}
            placeholder="City, country"
            className={inputClass}
          />
        </Field>
        <Field id="interest" label="Area of interest">
          <Select
            id="interest"
            value={fields.interest}
            onChange={set("interest")}
            options={interests}
          />
        </Field>
        <Field id="experience" label="Experience">
          <Select
            id="experience"
            value={fields.experience}
            onChange={set("experience")}
            options={experience}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5">
        <Field
          id="link"
          label="Resume or portfolio link"
          optional
          error={errors.link}
        >
          <input
            id="link"
            type="url"
            inputMode="url"
            value={fields.link}
            onChange={set("link")}
            placeholder="https://"
            aria-invalid={!!errors.link}
            aria-describedby={errors.link ? "link-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field id="message" label="Anything else we should know" optional>
          <textarea
            id="message"
            rows={4}
            value={fields.message}
            onChange={set("message")}
            className={cn(inputClass, "resize-y")}
          />
        </Field>
      </div>

      <div className="mt-6">
        <label
          htmlFor="consent"
          className="flex items-start gap-3 text-sm text-foreground/80"
        >
          <input
            id="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={!!errors.consent}
            className="mt-0.5 size-4 shrink-0 accent-brand-navy"
          />
          I agree that Nexasoft may use these details to contact me about career
          opportunities.
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-sm text-red-600">{errors.consent}</p>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending"
            ? (
              <>
                Sending
                <LoaderCircle className="size-4 animate-spin motion-reduce:animate-none" />
              </>
            )
            : (
              <>
                Submit details
                <ArrowRight />
              </>
            )}
        </Button>
      </div>

      <div aria-live="polite">
        {status === "mailto" && (
          <p className="mt-5 border-l-3 border-brand-navy bg-[#f5f7fb] px-4 py-3 text-sm">
            Your email app should open with your details ready to send. If it
            doesn't, email us at{" "}
            <a
              href={`mailto:${careers.email}`}
              className="font-semibold text-brand-navy underline underline-offset-4"
            >
              {careers.email}
            </a>
            .
          </p>
        )}
        {status === "error" && (
          <p className="mt-5 border-l-3 border-red-500 bg-red-50 px-4 py-3 text-sm">
            Something went wrong sending your details. Please try again, or
            email us at{" "}
            <a
              href={`mailto:${careers.email}`}
              className="font-semibold underline underline-offset-4"
            >
              {careers.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
};

export default CareersForm;
