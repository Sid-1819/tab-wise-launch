/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENCATCH_API_KEY: string;
  readonly VITE_ENCATCH_FORM_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
