import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError=data;
    })
  }

  createUser(frm) {
    this.auth.createUser(frm.value);
  }

}
