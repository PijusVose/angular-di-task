import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters, CharactersRes } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly httpClient = inject(HttpClient);

  private readonly charactersRequestUrl = "https://rickandmortyapi.com/api/character";

  getCharacterResponse(): Observable<CharactersRes> {
    return this.httpClient.get<CharactersRes>(this.charactersRequestUrl);
  }
}
