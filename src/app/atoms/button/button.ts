import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="action.emit()"
      class="px-6 py-3 rounded-xl font-semibold text-white shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300"
      [ngClass]="color"
    >
      {{ label }}
    </button>
  `
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() color: string = 'bg-gradient-to-r from-blue-500 to-indigo-600';
  @Output() action = new EventEmitter<void>();
}