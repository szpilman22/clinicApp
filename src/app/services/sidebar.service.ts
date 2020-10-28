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
        { title: 'Graficas', url:'grafica' },
        { title: 'Main', url:'/' },
        { title: 'Promesas', url:'promesas' },
        { title: 'ProgressBar', url:'progress' },
        { title: 'Rxjs', url:'rxjs' }

      ]
    }
  ]




  constructor() { }
}
