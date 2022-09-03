import { Injectable } from '@nestjs/common';
import { BinanceService } from 'src/binance/services/binance/binance.service';
import { KucoinService } from 'src/kucoin/services/kucoin.service';
import { CryptoModel } from '../models/crypto.model';

@Injectable()
export class WatcherService {

    constructor(
        private binanceService: BinanceService,
        private kucoinService: KucoinService
    ){}

    async getValueFromBinance(symbol: CryptoModel){
        const allPrices = {
            "Binance": {... await this.binanceService.getCurrency(symbol.fromCrypto + symbol.toCrypto)},
            "Kucoin": {...await this.kucoinService.getCrypto(symbol.fromCrypto + '-'+ symbol.toCrypto)}
        }
        return allPrices;
    }
}
