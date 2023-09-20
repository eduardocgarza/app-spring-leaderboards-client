import { BASE_URL } from "../../constants/AppConstants";

export function verifyTokenEndpoint(accountToken) {
  return `${BASE_URL}/token/${accountToken}`;
}
