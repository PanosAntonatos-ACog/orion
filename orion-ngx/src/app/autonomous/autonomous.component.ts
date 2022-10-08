import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

export interface PeriodicElement {
  name: string;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'PStc', name: '445' },
  { position: 'IMpp', name: '10.77Α' },
  { position: 'VMpp', name: '41.32V' },
  { position: 'ISc', name: '11.55A' },
  { position: 'PStc', name: '49.04W' },
  { position: 'Θεμοκρασιακός Συντελεστής Ισχύος', name: '-0.347%/C' },
  { position: 'Θεμοκρασιακός Συντελεστής Tάσεως', name: '-0.263%/C' },
  { position: 'Ασφάλεια Ρεύματος Στοιχειοσειράς', name: '20A' },
  { position: 'Προτεινόμενη Μέγιστη Τάση Συστήματος', name: '1500Vpc' },
];

@Component({
  selector: 'app-autonomous',
  templateUrl: './autonomous.component.html',
  styleUrls: ['./autonomous.component.css'],
})
export class AutonomousComponent implements OnInit {
  showFootNote = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  
  constructor(
    private tokenStorage: TokenStorageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
}
