import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  authService =  inject(AuthService);
  title = 'employee_management_app_angular18';

  constructor(){
    this.authService.login({
      username: 'emilys',
      password: 'emilyspass',
    })
      .subscribe((r)=>{
        this.authService.getCurrentAuthUser().subscribe((r) => {

        });
      });
  }
}
