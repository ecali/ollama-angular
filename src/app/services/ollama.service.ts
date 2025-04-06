import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import ollama from 'ollama';

@Injectable({
  providedIn: 'root'
})
export class OllamaService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:11434/api/generate';

  constructor() { }

  messages = signal<Message[]>([{
    author: MessageAuthor.bot,
    timestamp: new Date(),
    text: 'Hi! 👋 how I can help you!'
  }]);

  async generate(text: string, author : MessageAuthor = MessageAuthor.user) {
    const message: Message = {
      author,
      text,
      timestamp: new Date(),
    }
    this.messages.update((msg) => [...msg, message] );
  }

  async sendMessage(text: string) {
    await this.generate(text)
    const responseStream = await ollama.chat({
        model: 'llama3.2',
        messages: [{ role: 'user', content: text }],
        stream: true
      });
    let responseContent = '';
    await this.generate('', MessageAuthor.bot)
    for await (const chunk of responseStream) {
      responseContent += chunk.message.content;
      this.messages.update((messages) => {
        const updatedMessages = [...messages];
        const lastMessageIndex = updatedMessages.length - 1;

        updatedMessages[lastMessageIndex] = {
          ...updatedMessages[lastMessageIndex],
          text: responseContent,
        };

        return updatedMessages;
      });
    }


  }

}

export interface Message {
  author: MessageAuthor;
  timestamp: Date;
  text: string;
}

export enum MessageAuthor {
  bot = 'Assistant',
  user = 'User'
}
