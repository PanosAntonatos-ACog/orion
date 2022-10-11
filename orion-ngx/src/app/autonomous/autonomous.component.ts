import { INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS } from '@angular/cdk/a11y';
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

const OUT_DATA: PeriodicElement[] = [
  { position: 'Μέγιστη ΦΒ ισχύς ', name: '520 W  |	1040 W  |	1560 W ' },
  { position: 'Μέγιστη τάση DC ', name: '138 V ' },
  { position: 'Βέλτιστο εύρος τάσεως αλγορίθμου MPPT ', name: 'Adaptive (θεωρούμε VNOM= 108  VDC )' },
  { position: 'Αριθμός ανιχνευτών σημείου μέγιστης ισχύος ανά ρυθμιστή ', name: '1' },
];

const IN_DATA: PeriodicElement[] = [
  { position: 'Ονομαστική τάση συστήματος συσσωρευτών ( VB)  ', name: '12 V  |	24 V  |	48 V ' },
  { position: 'Εύρος ονομαστικής τάσεως  ', name: 'Adaptive ' },
  { position: 'Τύπος συσσωρευτών  ', name: 'All ' },
  { position: 'Μέγιστο ρεύμα φόρτισης / ρεύμα συνεχούς φόρτισης  ', name: '40 A ' },
  { position: 'Θερμοκρασιακό εύρος λειτουργίας 	-25 to +45°C  ', name: '-25 to +45°C' },
];

const REV: PeriodicElement[] = [
  { position: 'Ισχύς (VA)  ', name: '1200 |	1200 |	3000 |	5000' },
  { position: 'Εύρος τάσης εισόδου (V DC)  ', name: '9.5-17	 |  19 – 33   | 	19 – 33   | 	38 – 66' },
  { position: 'Τάση εξόδου (V)  ', name: '230 |	230 |	230 | 230 ' },
  { position: 'Μετατρεπόμενη ισχύς στους 25℃ (VA)	', name: '1200  |  1200 |	3000  |	5000 ' },
  { position: 'Μετατρεπόμενη ισχύς στους 25℃ (W)  ', name: '1000  |  1000 |	2500  |	4500' },
  { position: 'Μέγιστη ισχύς (W)  ', name: '2400  |  2400 |	6000  |	10000' },
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
  outModifier = OUT_DATA;
  inModifier = IN_DATA;
  rev = REV;

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
