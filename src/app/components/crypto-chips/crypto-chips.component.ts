import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {CryptoService} from "../../services/crypto/crypto.service";

@Component({
  selector: 'crypto-chips',
  styleUrls: ['./crypto-chips.component.scss'],
  templateUrl: './crypto-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoChipsComponent {
  constructor(private _cryptoService: CryptoService) {}

  data = this._cryptoService.getAllCrypto();
}
