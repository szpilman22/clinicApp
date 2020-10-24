import { Component, OnInit } from '@angular/core';
import { SettingsServicesService } from '../services/settings-services.service';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  year = new Date().getFullYear();


  constructor( private settingService: SettingsServicesService ) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
