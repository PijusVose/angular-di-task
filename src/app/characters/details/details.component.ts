import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly characterService: CharacterService = inject(CharacterService);

  id?: string;
  character?: Character;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.characterService.getCharacterDetails(this.id).subscribe((character) => (
      this.character = character
    ));
  }

  getCharacterImageUrl(): string {
    return this.character?.image!;
  }
}
