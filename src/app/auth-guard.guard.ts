import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { SecurityServiceService } from "./security-service.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private securityService: SecurityServiceService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const claimType: string = next.data["claimType"];

    if (this.securityService.hasClaim(claimType)) {
      return true;
    } else {
      alert("Unauthorized Returning User Back to Home Page");
      this.router.navigate(["/"]);
    }

    return true;
  }
}
