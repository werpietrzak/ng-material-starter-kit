import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AgePredictionService } from "../../services/age-prediction/age-prediction.service";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, switchMap} from "rxjs";
import {AgePredictionModel} from "../../models/age-prediction.model";

@Component({
  selector: 'app-age-prediction',
  styleUrls: ['./age-prediction.component.scss'],
  templateUrl: './age-prediction.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgePredictionComponent {
  constructor(
    private _agePredictionService: AgePredictionService,
    private _activatedRoute: ActivatedRoute,
  ) {}

  params$: Observable<Partial<AgePredictionModel>> = this._activatedRoute.params.pipe(map(params => (
    {
      name: params['name'],
    }
  )));

  result$: Observable<AgePredictionModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._agePredictionService.getAgeForName(data['name']))
  );
}
