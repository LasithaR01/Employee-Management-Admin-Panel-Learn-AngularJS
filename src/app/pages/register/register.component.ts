import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerObj = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  onRegister() {
     if (this.registerObj.password !== this.registerObj.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Registered:", this.registerObj);
    alert("Registration Successful!");
    this.router.navigate(['/login']); // Redirect to login after registration
  }
}
