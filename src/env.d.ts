/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Web3Forms access key for website forms. */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  /** Optional separate Web3Forms key for the careers form. */
  readonly VITE_WEB3FORMS_CAREERS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
