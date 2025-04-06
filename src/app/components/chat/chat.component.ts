import {Component, inject} from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputIconModule} from 'primeng/inputicon';
import {IconFieldModule} from 'primeng/iconfield';
import {MessageAuthor, OllamaService} from '../../services/ollama.service';
import {AvatarModule} from 'primeng/avatar';

@Component({
  selector: 'oa-chat',
  imports: [CardModule, ButtonModule, InputTextModule, CommonModule, FormsModule, InputIconModule, IconFieldModule, AvatarModule],
  templateUrl: './chat.component.html',
  styles: ``
})
export class ChatComponent {

  private readonly _ollamaService = inject(OllamaService);
  $messages = this._ollamaService.messages;

  botAvatar =  `./assets/blackollama.png`;
  value = ''

  async generate($event: any): Promise<void> {
    const text = $event;
    this.value = '';
    this._ollamaService.sendMessage(text);
  }

  protected readonly MessageAuthor = MessageAuthor;
}
