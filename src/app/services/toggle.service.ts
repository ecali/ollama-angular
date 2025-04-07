import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  isDarkMode = signal<boolean>(true);


  constructor() {
    const element = document.querySelector('html');
    if (!element?.classList.contains('dark-mode')) {
      element?.classList.toggle('my-app-dark');
    }
  }

  async toggle(){
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
    this.isDarkMode.set(!this.isDarkMode());
  }

}
