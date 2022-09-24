import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})

export class BoardUserComponent implements OnInit {
  form: any = {
    districtName: null,
    daysOfAutonomy: null,
    totalEnergyWasteOfDecember: null,
    isAutonomous: false,
    userElectricalUsage: null
  };

  showFootNote = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private route: Router, private authService: AuthService, private tokenStorage: TokenStorageService, private userService: UserService) {
    
   }

  
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  updateState(){
    this.showFootNote = !this.showFootNote;
  }

  onSubmit(): void {
    const { districtName, daysOfAutonomy, totalEnergyWasteOfDecember, isAutonomous, userElectricalUsage } = this.form;

    this.userService.getPublicContent(this.form).subscribe(
      data => {
        // console.log(data);
        
        this.route.navigate(['/solar'], {state : {data}});
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}