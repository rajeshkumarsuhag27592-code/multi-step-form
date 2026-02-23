import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalComponent } from './components/personal/personal';
import { AddressComponent } from './components/address/address';
import { PreviewComponent } from './components/preview/preview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PersonalComponent,
    AddressComponent,
    PreviewComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  step: number = 1;

  formData: any = {};

  // After Personal Step
  handlePersonal(data: any) {
    this.formData = { ...this.formData, ...data };
    this.step = 2;
  }

  // After Address Step
  handleAddress(data: any) {
    this.formData = { ...this.formData, ...data };
    this.step = 3;
  }

  // Edit Button
  edit() {
    this.step = 1;
  }

}