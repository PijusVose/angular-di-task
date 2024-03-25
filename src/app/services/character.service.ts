import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly httpClient = inject(HttpClient);

  getCharacterResponse(): Observable<Characters> {
    // TODO: finish this, also don't forget to unsubscribe from observable
    return this.httpClient.get<Characters>('example.api/endpoint');
  }
}
