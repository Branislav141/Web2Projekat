import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const myModules: any = [MatButtonModule, MatDialogModule];

@NgModule({
  exports: [...myModules],
  imports: [...myModules],
})
export class MaterialModule {}
