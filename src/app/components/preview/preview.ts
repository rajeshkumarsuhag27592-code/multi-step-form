import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="space-y-6">

      <h2 class="text-2xl font-bold text-gray-800">Review Your Details</h2>

      <div class="bg-gray-50 rounded-2xl p-6 shadow-inner border border-gray-200 space-y-2 text-gray-700">
        <p><strong>Name:</strong> {{ data?.name }}</p>
        <p><strong>Email:</strong> {{ data?.email }}</p>
        <p><strong>Phone:</strong> {{ data?.phone }}</p>
        <hr class="my-2">
        <p><strong>Address:</strong> {{ data?.address }}</p>
        <p><strong>City:</strong> {{ data?.city }}</p>
        <p><strong>State:</strong> {{ data?.state }}</p>
        <p><strong>Pincode:</strong> {{ data?.pincode }}</p>
      </div>

      <div class="flex justify-end gap-4">
        <app-button
          label="Edit"
          color="bg-gradient-to-r from-yellow-400 to-orange-500"
          (action)="edit.emit()">
        </app-button>

        <app-button
          label="Submit"
          color="bg-gradient-to-r from-green-500 to-emerald-600"
          (action)="submitData()">
        </app-button>
      </div>

    </div>
  `
})
export class PreviewComponent {

  @Input() data: any;
  @Output() edit = new EventEmitter<void>();

  submitData() {
    Swal.fire({
      title: 'Confirm Submission?',
      icon: 'question',
      showCancelButton: true
    }).then(result => {
      if (result.isConfirmed) {
        localStorage.setItem('userData', JSON.stringify(this.data));
        Swal.fire('Success', 'Data Saved Successfully!', 'success');
      }
    });
  }
}