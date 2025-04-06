import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }

  isDarkMode = signal<boolean>(false);

  async toggle(){
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
    this.isDarkMode.set(element?.classList.contains('dark-mode') ?? false);
  }

}
