import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class KucoinService {

    constructor(){}

    getCrypto(symbol: string){
        return axios.get(`https://api.kucoin.com/api/v1/market/stats?symbol=${symbol}`)
        .then(value => value.data)
        .catch(eror => {
            throw new HttpException('Coin not found', HttpStatus.NOT_FOUND);
        })
    }

}
