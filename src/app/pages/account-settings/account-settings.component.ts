import { Component, OnInit } from '@angular/core';
import { SettingsServicesService } from '../../services/settings-services.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( private settingServices: SettingsServicesService ) { }

  ngOnInit(): void {
    this.settingServices.checkCurrentTheme();
  }

  changeTheme(theme: string) {

    this.settingServices.changeTheme(theme);

  }

}








