import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    secondName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^\\S+@(?:[a-zA-Z0-9-]+\\.(?:com|co|edu|org|edu\\.co|io|us|ac|ad|af|ag|al|am|an|ao|aq|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bl|bm|bn|bo|br|bq|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|cr|cs|cu|cv|cw|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gf|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|ke|kg|kh|ki|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|yj|yk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zr|zw))$') ]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&_.^#<>\\[\\]{}\\(\\)\\/\\\\|~`+=:,;\'"¡¿])[A-Za-z\\d@$!%*?&_.^#<>\\[\\]{}\\(\\)\\/\\\\|~`+=:,;\'"¡¿]+$')  ]],
    telefono: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    confirmPassword: ['', Validators.required]}, { validators: this.passwordMatchValidator });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  get name() {
    return this.registerForm.controls['name'];

  }

  get secondName() {
    return this.registerForm.controls['secondName'];

  }

  get email() {
    return this.registerForm.controls['email'];

  }

  get password() {
    return this.registerForm.controls['password'];

  }

  get telefono() {
    return this.registerForm.controls['telefono'];

  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  register() {
    if (this.registerForm.valid) {
      console.log("Llamar al servicio de login");
      this.router.navigateByUrl('/reconfirm');
      this.registerForm.reset();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  
  onNameInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let inputValue = inputElement.value;
    
    
    inputValue = inputValue.replace(/[^A-Za-z]/g, '');
  

    const firstChar = inputValue.charAt(0);
    if (inputValue.length > 0 && !/[A-Za-z]/.test(firstChar)) {
      inputValue = inputValue.substr(1);
    }
  

    this.registerForm.patchValue({ name: inputValue });
  }
  
  onSecondNameInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let inputValue = inputElement.value;
    

    inputValue = inputValue.replace(/[^A-Za-z]/g, '');
  

    const firstChar = inputValue.charAt(0);
    if (inputValue.length > 0 && !/[A-Za-z]/.test(firstChar)) {
      inputValue = inputValue.substr(1);
    }
  
    this.registerForm.patchValue({ secondName: inputValue });
  }
  
  
  
  sanitizeTelefono() {
    const telefonoControl = this.registerForm.get('telefono');
    if (telefonoControl && telefonoControl.value) {
      const sanitizedValue = telefonoControl.value.replace(/[^0-9]/g, '');
      telefonoControl.setValue(sanitizedValue);
    }
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
  
}
