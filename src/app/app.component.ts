import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navLinks = [
    {label: 'Querybuilder', link: '/query'},
    {label: 'Database magamenet', link: 'import'},
    {label: 'Visualisation', link: 'foggy-tab'},
  ];
}
