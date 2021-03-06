import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  
  public isLoading = false;
  public formResetToggle = true;
  
  hidePassword = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  signIn() {
    console.log('patch');
    this.router.navigate(['/']);
  }
}
