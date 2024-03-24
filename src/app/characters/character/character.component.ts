import { Component, input } from '@angular/core';
import { Character } from '../../types';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent {
  character = input<Character>();

  onDetailsClick(): void {}
  onFavoriteClick(): void {}
  getComputedStyles() {
    return {
      ['background-image']: `url(replace this)`,
    };
  }
}
