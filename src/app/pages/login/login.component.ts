import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    username:'',
    password:''
  };

  router = inject(Router);

  onLogin() {
    if(this.loginObj.username == "emilys" && this.loginObj.password =="emilyspass") {
      this.router.navigateByUrl('dashboard')
    } else {
      alert("Wrong Credentials")
    }
  }

}
