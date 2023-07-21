import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rephone',
  templateUrl: './rephone.component.html',
  styleUrls: ['./rephone.component.css']
})
export class RephoneComponent implements OnInit {

  rephoneForm = this.formBuilder.group({
  telefono: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
    get telefono() {
      return this.rephoneForm.controls['telefono'];
  
    }
  

  recovery() {
    if (this.rephoneForm.valid) {
      console.log("Llamar al servicio de login");
      this.router.navigateByUrl('/confirm');
      this.rephoneForm.reset();
    } else {
      this.rephoneForm.markAllAsTouched();
    }
  }

  sanitizeTelefono() {
    const telefonoControl = this.rephoneForm.get('telefono');
    if (telefonoControl && telefonoControl.value) {
      const sanitizedValue = telefonoControl.value.replace(/[^0-9]/g, '');
      telefonoControl.setValue(sanitizedValue);
    }
  }
}
