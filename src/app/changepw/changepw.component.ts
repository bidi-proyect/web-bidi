import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.css']
})
export class ChangepwComponent implements OnInit {
  showModal = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  changepwForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&_.^#<>\\[\\]{}\\(\\)\\/\\\\|~`+=:,;\'"¡¿])[A-Za-z\\d@$!%*?&_.^#<>\\[\\]{}\\(\\)\\/\\\\|~`+=:,;\'"¡¿]+$')  ]],
    confirmPassword: ['', Validators.required]}, { validators: this.passwordMatchValidator });

    constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {}
  
  get password() {
    return this.changepwForm.controls['password'];

  }

  get confirmPassword() {
    return this.changepwForm.controls['confirmPassword'];
  }


  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
  
    if (password !== confirmPassword && (password || confirmPassword)) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      control.get('confirmPassword')?.setErrors(null);
    }
  }


  confirm() {
    if (this.changepwForm.valid) {
      console.log("Llamar al servicio de cambio de contraseña");
      this.showModal = true; 
    } else {
      this.changepwForm.markAllAsTouched();
    }
  }

  redirectToLogin() {
    this.showModal = false; 
    this.router.navigateByUrl('/login'); 
  }

}
