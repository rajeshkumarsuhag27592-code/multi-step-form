import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="relative">
      <input
        [type]="type"
        [placeholder]="placeholder"
        [(ngModel)]="model"
        (ngModelChange)="modelChange.emit($event)"
        class="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none p-3 rounded-xl transition duration-200 shadow-sm"
      />
    </div>
  `
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() model: any;

  @Output() modelChange = new EventEmitter<any>();
}