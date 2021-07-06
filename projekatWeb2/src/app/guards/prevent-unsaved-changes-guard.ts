import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { WorkRequestComponent } from '../modules/work-requests/work-request/work-request.component';

@Injectable()
export class PreventUnsavedChangesGuard
  implements CanDeactivate<WorkRequestComponent>
{
  canDeactivate(component: WorkRequestComponent) {
    if (component.form.dirty) {
      return confirm(
        'Are you sure you want to continue? Any unsaved changes will be lost!'
      );
    }
    return true;
  }
}
