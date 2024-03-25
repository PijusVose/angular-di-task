import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharactersRes } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly httpClient = inject(HttpClient);

  private readonly charactersRequestUrl = "https://rickandmortyapi.com/api/character";

  // Should I cache all characters, instead of calling so many http requests?

  getCharactersResponse(): Observable<CharactersRes> {
    return this.httpClient.get<CharactersRes>(this.charactersRequestUrl);
  }

  getCharacterDetails(id: string): Observable<Character> {
    return this.httpClient.get<Character>(this.charactersRequestUrl + '/' + id);
  }
}
