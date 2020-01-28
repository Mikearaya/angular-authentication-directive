import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin/admin.component";
import { AdminSectionRoutingModule } from "./admin-section-routing.module";

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminSectionRoutingModule]
})
export class AdminSectionModule {}
