import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-em',
  templateUrl: './confirm-em.component.html',
  styleUrls: ['./confirm-em.component.css']
})

export class ConfirmEmComponent {

  showModal = false;
  confirmForm = this.formBuilder.group({
    
  confirm: ['', [Validators.required]],
  confirm1: ['', [Validators.required]],
  confirm2: ['', [Validators.required]],
  confirm3: ['', [Validators.required]],
  confirm4: ['', [Validators.required]],
  confirm5: ['', [Validators.required]]

})


  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void{}
  get code() {
    return this.confirmForm.controls['confirm'];

  }

  move(e: any, p:any, c:any, n:any) {
    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');
    if(length == maxlength){
      if(n != ""){
        n.focus();
      }
    }
    if(e.key === "Backspace"){
      if(p !=""){
        p.focus();
      }
    }
   
  }

  sanitizeConfirm () {
    const codeControl = this.confirmForm.get('confirm');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }
  sanitizeConfirm1 () {
    const codeControl = this.confirmForm.get('confirm1');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }
  sanitizeConfirm2 () {
    const codeControl = this.confirmForm.get('confirm2');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }
  sanitizeConfirm3 () {
    const codeControl = this.confirmForm.get('confirm3');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }
  sanitizeConfirm4() {
    const codeControl = this.confirmForm.get('confirm4');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }
  sanitizeConfirm5() {
    const codeControl = this.confirmForm.get('confirm5');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }

  confirm() {
    if (this.confirmForm.valid) {
      console.log("Llamar al servicio de cambio de contraseña");
      this.router.navigateByUrl('/changepw');
      this.confirmForm.reset();
    } else {
      this.confirmForm.markAllAsTouched();
    }
  }

  
  closePopup() {
    this.showModal = false;
}
}