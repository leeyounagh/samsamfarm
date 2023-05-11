interface Window {
  Kakao: any;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    MY_KEY: string;
    API_KEY: string;
  }
}
