import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map, debounceTime, switchMap } from 'rxjs';
import { UniversityModel } from "../../models/university.model";
import { UniversityService } from "../../services/university.service";

@Component({
  selector: 'app-university-search',
  styleUrls: ['./university-search.component.scss'],
  templateUrl: './university-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitySearchComponent {
  search = new FormGroup({ query: new FormControl() });

  public searchQuery: Observable<string> = this.search.valueChanges.pipe(
    map(form => form.query),
    debounceTime(1000),
  );

  universities: Observable<UniversityModel[]> = this.searchQuery
    .pipe(switchMap((query: string) => {
    return this._universityService.getUniversitiesByCountry(query);
  }));

  constructor(private _universityService: UniversityService) { }
}
