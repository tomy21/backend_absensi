export interface TokeUserPayload {
  id: string;
  email: string;
  role: string;
}

export interface UserPayloadWithToken extends TokeUserPayload {
  token: string;
}
