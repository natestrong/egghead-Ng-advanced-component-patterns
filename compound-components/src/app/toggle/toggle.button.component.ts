import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  template: `
    <app-switch-ui [on]="on" (click)="onClick()"></app-switch-ui>
  `,
})
export class ToggleButtonComponent {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  onClick(): void {
    this.on = !this.on;
    this.toggled.emit(this.on);
  }
}
