import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TopbarComponent} from './components/topbar/topbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {ChatComponent} from './components/chat/chat.component';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, TopbarComponent, FooterComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'ollama-angular';
  constructor() {
  }

}
