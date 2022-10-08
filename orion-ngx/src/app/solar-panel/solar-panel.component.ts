import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-solar-panel',
  templateUrl: './solar-panel.component.html',
  styleUrls: ['./solar-panel.component.css'],
})
export class SolarPanelComponent implements OnInit {
  form: any = {
    numberOfSolarPanels: null,
    name: null,
    watts: null,
    inverterName: false,
    inverterValue: null,
    output: null,
    powerAt25: null,
    powerAt25W: null,
    maxWatts: null,
    numberOfSolarPanelsInParallel: null,
    numberOfSolarPanelsInLine: 2,
    numberOfAccumulator: null
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as { data: any };
    console.log(state.data);
    const resp = state.data;
    this.form.numberOfSolarPanels = resp.numberOfSolarPanels;
    this.form.name = resp.name;
    this.form.watts = resp.watts;
    this.form.inverterName = resp.inverterName;
    this.form.inverterValue = resp.inverterValue;
    this.form.output = resp.output;
    this.form.powerAt25 = resp.powerAt25;
    this.form.powerAt25W = resp.powerAt25W;
    this.form.maxWatts = resp.maxWatts;
    this.form.numberOfSolarPanelsInParallel =
      resp.numberOfSolarPanelsInParallel;
    this.form.numberOfSolarPanelsInLine = 2;
    this.form.numberOfAccumulator = resp.numberOfAccumulator;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
