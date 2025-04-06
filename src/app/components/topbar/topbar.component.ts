import {Component, effect, inject, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { ButtonModule} from 'primeng/button';
import {ToggleService} from '../../services/toggle.service';

@Component({
  selector: 'oa-topbar',
  imports: [
    NgOptimizedImage,
    ButtonModule
  ],
  templateUrl: './topbar.component.html',
  styles: ``
})
export class TopbarComponent {

  private readonly _toggleService = inject(ToggleService);

  $isDarkMode = this._toggleService.isDarkMode;
  logo = ``

  constructor() {
    console.log(this.$isDarkMode())
    effect(() => {
      this.logo =  `./assets/${this.$isDarkMode() ? 'white' : 'black'}ollama.png`;
    });
  }

  toggle() {
    this._toggleService.toggle().then(_ => {
      this.logo =  `./assets/${this.$isDarkMode() ? 'white' : 'black'}ollama.png`;
    });
  }

}
