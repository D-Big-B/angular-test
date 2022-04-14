import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
const materialComponents = [MatButtonModule, MatTabsModule, MatGridListModule];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
})
export class ModulesModule {}
