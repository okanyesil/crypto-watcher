import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class BinanceService {


    getCurrency(symbols:string){
        return axios.get(`https://api.binance.com/api/v1/ticker/price?symbol=${symbols}`)
        .then(value => {
            return value.data;
        })
        .catch(err => {
            throw new HttpException('Coin not found', HttpStatus.NOT_FOUND);
        })
    }

}
