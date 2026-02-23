import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  step = 1;

  formData: any = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  };

  next() {
    if (this.step === 1) {
      if (!this.formData.name || !this.formData.email || !this.formData.phone) {
        Swal.fire('Error', 'Please fill all personal details', 'error');
        return;
      }
    }

    if (this.step === 2) {
      if (!this.formData.address || !this.formData.city || !this.formData.state || !this.formData.pincode) {
        Swal.fire('Error', 'Please fill all address details', 'error');
        return;
      }
    }

    this.step++;
  }

  back() {
    this.step--;
  }

  edit() {
    this.step = 1;
  }

  submit() {
    Swal.fire({
      title: 'Confirm Submission?',
      icon: 'question',
      showCancelButton: true
    }).then(result => {
      if (result.isConfirmed) {
        localStorage.setItem('userData', JSON.stringify(this.formData));
        Swal.fire('Success', 'Data Saved Successfully!', 'success');
      }
    });
  }
}