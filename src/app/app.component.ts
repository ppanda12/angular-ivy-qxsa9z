import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
const ppanda=["HOME","SERVICES","CONTACT US"]]
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
