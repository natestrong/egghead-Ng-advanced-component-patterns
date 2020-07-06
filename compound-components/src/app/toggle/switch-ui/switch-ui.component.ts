import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-switch-ui',
  templateUrl: './switch-ui.component.html',
})
export class SwitchUiComponent {
  @Input() on: boolean;
  @Input() className: string;
}
