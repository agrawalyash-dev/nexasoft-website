import { type FormEvent, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CircleCheck,
  LoaderCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { budgets, contact, topics } from "../data";

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

type Fields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  budget: string;
  message: string;
};
type Errors = Partial<Record<keyof Fields | "consent", string>>;
type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const empty: Fields = {
  name: "",
  email: "",
  company: "",
  phone: "",
  budget: budgets[0],
  message: "",
};

const inputClass =
  "w-full border border-border bg-white px-3.5 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand-navy focus-visible:ring-3 focus-visible:ring-brand-navy/15 aria-invalid:border-red-500";

const Field = (
  { id, label, optional, error, children }: {
    id: string;
    label: string;
    optional?: boolean;
    error?: string;
    children: React.ReactNode;
  },
) => (
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

const ContactForm = () => {
  const [fields, setFields] = useState<Fields>(empty);
  const [selected, setSelected] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof Fields) => (e: { target: { value: string } }) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const toggle = (topic: string) =>
    setSelected((
      s,
    ) => (s.includes(topic) ? s.filter((t) => t !== topic) : [...s, topic]));

  const validate = (): Errors => {
    const e: Errors = {};
    if (!fields.name.trim()) e.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
    if (fields.message.trim().length < 20) {
      e.message =
        "A couple of sentences helps us reply usefully (20 characters or more).";
    }
    if (!consent) e.consent = "Please agree so we can reply to you.";
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

    const payload = { ...fields, topics: selected };

    if (!endpoint) {
      const body = [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        fields.company && `Company: ${fields.company}`,
        fields.phone && `Phone: ${fields.phone}`,
        selected.length > 0 && `Interested in: ${selected.join(", ")}`,
        `Budget: ${fields.budget}`,
        "",
        fields.message,
      ]
        .filter((line) => line !== false && line !== "")
        .join("\n");
      window.location.href = `mailto:${contact.email}?subject=${
        encodeURIComponent(
          `Project enquiry from ${fields.name}`,
        )
      }&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setFields(empty);
      setSelected([]);
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
          Thanks, your message is on its way.
        </h2>
        <p className="mt-2 max-w-md text-base text-muted-foreground">
          We'll reply within one working day. Keep an eye on your inbox,
          including the spam folder.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Send another message
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
      <h2 className="text-2xl font-semibold tracking-tight">
        Tell us about your project
      </h2>
      <p className="mt-1.5 text-base text-muted-foreground">
        A few lines is enough. We'll take it from there.
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
        <Field id="email" label="Work email" error={errors.email}>
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
        <Field id="company" label="Company" optional>
          <input
            id="company"
            autoComplete="organization"
            value={fields.company}
            onChange={set("company")}
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
      </div>

      <fieldset className="mt-7">
        <legend className="mb-2.5 flex w-full items-baseline justify-between text-sm font-medium">
          What can we help with?
          <span className="text-xs font-normal text-muted-foreground">
            Choose any
          </span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => {
            const on = selected.includes(topic);
            return (
              <button
                key={topic}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(topic)}
                className={cn(
                  "border px-3.5 py-2 text-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/60",
                  on
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-border text-foreground/80 hover:border-brand-navy hover:text-brand-navy",
                )}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7 grid gap-5">
        <Field id="budget" label="Estimated budget" optional>
          <div className="relative">
            <select
              id="budget"
              value={fields.budget}
              onChange={set("budget")}
              className={cn(inputClass, "appearance-none pr-10")}
            >
              {budgets.map((b) => <option key={b}>{b}</option>)}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-3.5 size-4.5 -translate-y-1/2 text-brand-navy"
            />
          </div>
        </Field>
        <Field id="message" label="Your message" error={errors.message}>
          <textarea
            id="message"
            rows={5}
            value={fields.message}
            onChange={set("message")}
            placeholder="What are you building or trying to fix, and by when?"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
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
          I agree that Nexasoft may use these details to reply to my enquiry.
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
                Send message
                <ArrowRight />
              </>
            )}
        </Button>
        <p className="text-sm text-muted-foreground">
          We reply within one working day.
        </p>
      </div>

      <div aria-live="polite">
        {status === "mailto" && (
          <p className="mt-5 border-l-3 border-brand-navy bg-[#f5f7fb] px-4 py-3 text-sm">
            Your email app should open with the message ready to send. If it
            doesn't, email us at{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-semibold text-brand-navy underline underline-offset-4"
            >
              {contact.email}
            </a>
            .
          </p>
        )}
        {status === "error" && (
          <p className="mt-5 border-l-3 border-red-500 bg-red-50 px-4 py-3 text-sm">
            Something went wrong sending your message. Please try again, or
            email us at{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-semibold underline underline-offset-4"
            >
              {contact.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
