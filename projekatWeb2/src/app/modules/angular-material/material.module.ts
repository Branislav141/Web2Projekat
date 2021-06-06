import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const myModules: any = [MatButtonModule];

@NgModule({
  exports: [...myModules],
  imports: [...myModules],
})
export class MaterialModule {}
