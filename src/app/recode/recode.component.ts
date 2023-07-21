import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recode',
  templateUrl: './recode.component.html',
  styleUrls: ['./recode.component.css']
})
export class RecodeComponent {

  showModal = false;
  recodeForm = this.formBuilder.group({
    
  confirm: ['', [Validators.required]],
  confirm1: ['', [Validators.required]],
  confirm2: ['', [Validators.required]],
  confirm3: ['', [Validators.required]],
  confirm4: ['', [Validators.required]],
  confirm5: ['', [Validators.required]]

})
  showModal2!: boolean;


  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void{}
  get code() {
    return this.recodeForm.controls['confirm'];

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

  sanitizeConfirm() {
    const codeControl = this.recodeForm.get('confirm');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }
  sanitizeConfirm1 () {
    const codeControl = this.recodeForm.get('confirm1');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }
  sanitizeConfirm2 () {
    const codeControl = this.recodeForm.get('confirm2');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }
  sanitizeConfirm3 () {
    const codeControl = this.recodeForm.get('confirm3');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }
  sanitizeConfirm4() {
    const codeControl = this.recodeForm.get('confirm4');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }
  sanitizeConfirm5() {
    const codeControl = this.recodeForm.get('confirm5');
    if (codeControl && codeControl.value) {
      const sanitizedValue = codeControl.value.replace(/[^0-9]/g, '');
      codeControl.setValue(sanitizedValue);
    }
  }

  confirm() {
    if (this.recodeForm.valid) {
      console.log("Llamar al servicio de cambio de contraseña");
      this.showModal2= true; 
    } else {
      this.recodeForm.markAllAsTouched();
    }
   
  }

  redirectToLogin() {
    this.showModal = false; 
    this.router.navigateByUrl('/login'); 
  }
  
  closePopup() {
    this.showModal = false;
}

}


