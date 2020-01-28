import { Component } from "@angular/core";
import { AdminClaims, userClaims } from "./user-type.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-authentication";

  changeUserType(state: string): void {
    alert(state);
    if (state.toUpperCase() == "ADMIN")
      localStorage.setItem("userClaims", JSON.stringify(AdminClaims));
    else if (state.toUpperCase() == "ADMIN")
      localStorage.setItem("userClaims", JSON.stringify(userClaims));
  }
}
