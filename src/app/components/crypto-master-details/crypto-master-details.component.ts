import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {combineLatest, map, Observable, Subject} from "rxjs";
import {CryptoModel} from "../../models/crypto.model";
import {CryptoService} from "../../services/crypto/crypto.service";

@Component({
  selector: 'app-crypto-master-details',
  styleUrls: ['./crypto-master-details.component.scss'],
  templateUrl: './crypto-master-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoMasterDetailsComponent {
  private _selectedCryptoSubject: Subject<string> = new Subject();

  public selectedCrypto: Observable<string> = this._selectedCryptoSubject.asObservable();

  public cryptos: Observable<CryptoModel[]> = this._cryptoService.getAllCrypto();

  public details: Observable<CryptoModel> = combineLatest([
    this._cryptoService.getAllCrypto(),
    this.selectedCrypto
  ]).pipe(map(([cryptos, selectedCrypto]: [CryptoModel[], string]) => (
    cryptos.find(crypto => crypto.symbol === selectedCrypto)!
    )
  ));

  constructor(private _cryptoService: CryptoService) {}

  selectCrypto(symbol: string): void {
    this._selectedCryptoSubject.next(symbol);
  }
}
