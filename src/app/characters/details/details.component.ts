import { Component, OnInit, inject } from '@angular/core';
import { Character } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule, MatPaginatorModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly characterService: CharacterService = inject(CharacterService);

  id?: string;
  character?: Character;
  pageEvent?: PageEvent;

  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.characterService.getCharacterDetails(this.id).subscribe((character) => (
      this.character = character
    ));
  }

  getCharacterImageUrl(): string {
    return this.character?.image!;
  }

  getPaginatedEpisodes() {
    return this.character?.episode.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
