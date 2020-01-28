import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserSectionRoutingModule } from "./user-section-routing.module";
import { UserComponent } from "./user/user.component";

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserSectionRoutingModule]
})
export class UserSectionModule {}
