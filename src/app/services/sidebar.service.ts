import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url:'/' },
        { title: 'ProgressBar', url:'progress' },
        { title: 'Graficas', url:'grafica' }
      ]
    }
  ]




  constructor() { }
}
