import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { ButtonModule} from 'primeng/button';

@Component({
  selector: 'oa-topbar',
  imports: [
    NgOptimizedImage,
    ButtonModule
  ],
  templateUrl: './topbar.component.html',
  styles: ``
})
export class TopbarComponent implements OnInit {

  isDarkMode: boolean = true;
  logo = `./assets/${this.isDarkMode ? 'black' : 'white'}ollama.png`

  ngOnInit() {
    this.toggleDarkMode() // set default to darkmode
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
    this.checkDarkMode();
    this.handleLogo();
  }

  checkDarkMode() {
    const element = document.querySelector('html');
    this.isDarkMode = element?.classList.contains('my-app-dark') ?? false;
  }

  handleLogo() {
    this.logo =  `./assets/${this.isDarkMode ? 'white' : 'black'}ollama.png`;
  }

}
