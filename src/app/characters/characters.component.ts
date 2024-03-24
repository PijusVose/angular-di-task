import { Component } from '@angular/core';
import { CharacterComponent } from './character/character.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {}
