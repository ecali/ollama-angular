import {Component, effect, inject, OnInit, signal} from '@angular/core';
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
  $logo = signal<string>(`./assets/${this.$isDarkMode() ? 'white' : 'black'}ollama.png`)

  constructor() {
    effect(() => {
      this.$logo.set(`./assets/${this.$isDarkMode() ? 'white' : 'black'}ollama.png`)
    });
  }

  toggle() {
    this._toggleService.toggle().finally(() => {
      this.$logo.set(`./assets/${this.$isDarkMode() ? 'white' : 'black'}ollama.png`);
    });
  }

}
