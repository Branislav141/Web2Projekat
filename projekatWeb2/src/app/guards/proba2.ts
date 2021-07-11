import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { NewIncidentComponent } from "../modules/new-incident/new-incident.component";

@Injectable()
export class Proba2
  implements CanDeactivate<NewIncidentComponent>
{
  canDeactivate(component: NewIncidentComponent) {
    if (component.form.dirty) {
      return confirm(
        'Are you sure you want to continue? Any unsaved changes will be lost!'
      );
    }
    return true;
  }
}