import { Component } from "@angular/core";
import { SecurityServiceService } from "./security-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  securityObject;

  constructor(private authenticationService: SecurityServiceService) {
    this.securityObject = this.authenticationService.securityObject;
  }
  changeUserType(state: string): void {
    this.authenticationService
      .logIn(state)
      .subscribe(data => (this.securityObject = data));
  }
}
