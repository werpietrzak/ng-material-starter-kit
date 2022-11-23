import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CatFactsService } from "../../services/cat-facts/cat-facts.service";

@Component({
  selector: 'app-cat-facts',
  styleUrls: ['./cat-facts.component.scss'],
  templateUrl: './cat-facts.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactsComponent {
  constructor(private _catFactsService: CatFactsService) {}

  data$ = this._catFactsService.getFact();
}
