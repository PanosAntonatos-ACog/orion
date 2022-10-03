import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-autonomous',
  templateUrl: './autonomous.component.html',
  styleUrls: ['./autonomous.component.css']
})

export class AutonomousComponent implements OnInit {


  showFootNote = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private tokenStorage: TokenStorageService, private userService: UserService) {
   }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
}