import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DropdownComponent } from '../dropdown.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'dropdown-option',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dropdown-option.component.html',
  styleUrl: './dropdown-option.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DropdownOptionComponent {
  @Input('value') value: string | number = '';
  @Input('active') active: boolean = false;

  @Output('optionClicked')
  optionClicked: EventEmitter<DropdownOptionComponent> = new EventEmitter();

  onOptionClick() {
    this.optionClicked.emit(this);
  }
}
