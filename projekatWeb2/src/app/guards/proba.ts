import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { NewSafeDocComponent } from "../modules/safetycompinf/new-safe-doc/new-safe-doc.component";


@Injectable()
export class Proba
  implements CanDeactivate<NewSafeDocComponent>
{
  canDeactivate(component: NewSafeDocComponent) {
    if (component.form.dirty) {
      return confirm(
        'Are you sure you want to continue? Any unsaved changes will be lost!'
      );
    }
    return true;
  }
}