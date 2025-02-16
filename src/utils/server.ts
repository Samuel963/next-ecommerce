const dev = process.env.NODE_ENV !== "production";

export const BASE_URL = 'http://localhost:3001/api/v1/'

export const server = dev
  ? "http://localhost:3001/api/v1/"
  : BASE_URL;
