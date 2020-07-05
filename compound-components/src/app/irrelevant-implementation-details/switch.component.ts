import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent  {
  @Input() on: boolean;
  @Input() className: string;
}
