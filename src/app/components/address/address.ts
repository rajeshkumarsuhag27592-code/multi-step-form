import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../atoms/input/input';
import { ButtonComponent } from '../../atoms/button/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent],
  template: `
    <div class="space-y-6">

      <h2 class="text-2xl font-bold text-gray-800">Address Details</h2>

      <app-input placeholder="Address" [(model)]="data.address"></app-input>
      <app-input placeholder="City" [(model)]="data.city"></app-input>
      <app-input placeholder="State" [(model)]="data.state"></app-input>
      <app-input placeholder="Pincode" [(model)]="data.pincode"></app-input>

      <div class="flex justify-between">
        <app-button
          label="Back"
          color="bg-gradient-to-r from-gray-500 to-gray-600"
          (action)="back.emit()">
        </app-button>

        <app-button
          label="Next"
          color="bg-gradient-to-r from-blue-500 to-indigo-600"
          (action)="nextStep()">
        </app-button>
      </div>

    </div>
  `
})
export class AddressComponent {

  @Output() next = new EventEmitter<any>();
  @Output() back = new EventEmitter<void>();

  data: any = {
    address: '',
    city: '',
    state: '',
    pincode: ''
  };

  nextStep() {
    if (!this.data.address || !this.data.city || !this.data.state || !this.data.pincode) {
      Swal.fire('Error', 'Fill all address details', 'error');
      return;
    }

    this.next.emit(this.data);
  }
}