import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { SecurityServiceService } from "./security-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  securityObject;

  constructor(
    private authenticationService: SecurityServiceService,
    private change: ChangeDetectorRef
  ) {
    this.securityObject = this.authenticationService.securityObject;
  }
  changeUserType(state: string): void {
    this.authenticationService.logIn(state).subscribe(data => {
      this.securityObject = { ...data };
    });
    this.change.detectChanges();
  }
}
