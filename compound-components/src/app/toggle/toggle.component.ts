import {AfterContentInit, Component, ContentChild, EventEmitter, Input, Output} from '@angular/core';
import {ToggleOnComponent} from './toggle.on.component';
import {ToggleOffComponent} from './toggle.off.component';
import {ToggleButtonComponent} from './toggle.button.component';

@Component({
  selector: 'app-toggle',
  template: `
    <ng-content></ng-content>
  `,
})
export class ToggleComponent implements AfterContentInit {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(ToggleOnComponent) toggleOn: ToggleOnComponent;
  @ContentChild(ToggleOffComponent) toggleOff: ToggleOffComponent;
  @ContentChild(ToggleButtonComponent) toggleButton: ToggleButtonComponent;

  ngAfterContentInit(): void {
    this.toggleButton.toggled.subscribe(on => {
      this.on = on;
      this.toggled.emit(on);
      this.toggleOff.on = this.on;
      this.toggleOn.on = this.on;
    });
  }
}
