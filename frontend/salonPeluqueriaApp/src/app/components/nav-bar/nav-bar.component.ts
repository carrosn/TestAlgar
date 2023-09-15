import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  elementConvo = false;
  elementLogin = true;

  public showData() {
   
    this.elementLogin = false;
      this.elementConvo = true;
    
  }
  hiddeData() {
    this.elementLogin = true;
    this.elementConvo = false;
    location.replace('/'); 
  }


}
