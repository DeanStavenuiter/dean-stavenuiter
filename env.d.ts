declare namespace NodeJS {
  interface ProcessEnv {
    AWS_SES_ACCESS_KEY_ID: string;
    AWS_SES_SECRET_ACCESS_KEY: string;
    EMAIL_FROM: string;
    EMAIL_TO: string;
  }
}

