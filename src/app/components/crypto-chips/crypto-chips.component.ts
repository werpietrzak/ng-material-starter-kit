import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CryptoService } from "../../services/crypto/crypto.service";
import { Observable } from "rxjs";
import { CryptoModel } from "../../models/crypto.model";

@Component({
  selector: 'crypto-chips',
  styleUrls: ['./crypto-chips.component.scss'],
  templateUrl: './crypto-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoChipsComponent {
  constructor(private _cryptoService: CryptoService) {}

  data: Observable<CryptoModel[]> = this._cryptoService.getAllCrypto();
}
