import {Component, inject, signal} from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputIconModule} from 'primeng/inputicon';
import {IconFieldModule} from 'primeng/iconfield';
import {MessageAuthor, OllamaService} from '../../services/ollama.service';
import {AvatarModule} from 'primeng/avatar';
import {TextareaModule} from 'primeng/textarea';

@Component({
  selector: 'oa-chat',
  imports: [CardModule, ButtonModule, InputTextModule, CommonModule, FormsModule, InputIconModule, IconFieldModule, AvatarModule, TextareaModule],
  templateUrl: './chat.component.html',
  styles: ``
})
export class ChatComponent {

  private readonly _ollamaService = inject(OllamaService);
  $messages = this._ollamaService.messages;
  $loading = signal<boolean>(false);

  botAvatar =  `./assets/blackollama.png`;
  value = ''

  async generate($event: any): Promise<void> {
    const text = $event;
    this.value = '';
    this.$loading.set(true);
    this._ollamaService.sendMessage(text).finally(() => {
      this.$loading.set(false);
    })
  }

  protected readonly MessageAuthor = MessageAuthor;
}
