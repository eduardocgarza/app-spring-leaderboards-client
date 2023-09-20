const {
  REACT_APP_CLIENT_ENV,
  REACT_APP_SERVER_ENV,
} = process.env;

const appModes = {
  development: "development",
  production: "production",
}

/**
 * @Client
 */
export const APP_CLIENT_ENV = REACT_APP_CLIENT_ENV || appModes.development;

/**
 * @Server (API)
 */
export const DEV_BASE_URL = "http://localhost:5000";
export const PROD_BASE_URL = "https://app-spring-leaderboards-server-go58.vercel.app";
export const BASE_URL = (REACT_APP_SERVER_ENV === appModes.production) ? PROD_BASE_URL : DEV_BASE_URL;
