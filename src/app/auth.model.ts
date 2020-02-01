export class AppUserAuth {
  userName = "";
  bearerToken = "";
  isAuthenticated = false;
  claims: ClaimModel[] = [];
}
export interface ClaimModel {
  claimType: string;
  claimValue: string;
}
