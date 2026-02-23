import { Component, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../../atoms/input/input';
import { ButtonComponent } from '../../atoms/button/button';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent],
  template: `
    <div class="space-y-6">

      <h2 class="text-2xl font-bold text-gray-800">Personal Details</h2>

      <app-input placeholder="Full Name" [(model)]="data.name"></app-input>
      <app-input placeholder="Email Address" [(model)]="data.email"></app-input>
      <app-input placeholder="Phone Number" [(model)]="data.phone"></app-input>

      <div class="flex justify-end">
        <app-button
          label="Next"
          color="bg-gradient-to-r from-blue-500 to-indigo-600"
          (action)="nextStep()">
        </app-button>
      </div>

    </div>
  `
})
export class PersonalComponent {

  @Output() next = new EventEmitter<any>();

  data: any = { name:'', email:'', phone:'' };

  nextStep() {
    if (!this.data.name || !this.data.email || !this.data.phone) {
      Swal.fire('Error', 'Fill all personal details', 'error');
      return;
    }
    this.next.emit(this.data);
  }
}