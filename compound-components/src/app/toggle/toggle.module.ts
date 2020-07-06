import {NgModule} from '@angular/core';
import {SwitchUiComponent} from './switch-ui/switch-ui.component';
import {ToggleComponent} from './toggle.component';
import {ToggleOnComponent} from './toggle.on.component';
import {ToggleOffComponent} from './toggle.off.component';
import {CommonModule} from '@angular/common';
import {ToggleButtonComponent} from './toggle.button.component';

@NgModule({
  declarations: [
    SwitchUiComponent,
    ToggleComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SwitchUiComponent,
    ToggleComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    ToggleButtonComponent,
  ]
})
export class ToggleModule {
}
