import {NgModule} from '@angular/core';
import {SwitchUiComponent} from './switch-ui/switch-ui.component';
import {ToggleOnComponent} from './toggle.on.component';
import {ToggleOffComponent} from './toggle.off.component';
import {CommonModule} from '@angular/common';
import {ToggleButtonComponent} from './toggle.button.component';
import {ToggleComponent} from "./toggle.component";

@NgModule({
  declarations: [
    SwitchUiComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleButtonComponent,
    ToggleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SwitchUiComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleButtonComponent,
    ToggleComponent
  ]
})
export class ToggleModule {
}
