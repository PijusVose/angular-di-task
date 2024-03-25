import { Component, OnInit, inject } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { Characters } from '../types';
import { CharacterService } from '../services/character.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterComponent, AsyncPipe],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {

  private readonly characterService = inject(CharacterService);

  characters!: Characters;

  ngOnInit(): void {
    this.characterService.getCharacterResponse().subscribe((characters) => (this.characters = characters.results));

    console.log("Loading characters...", this.characters);
  }
}
