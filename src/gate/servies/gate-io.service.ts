import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GateIoService {

    constructor(){}

    getCrypto(symbol: string){
        return axios.get(`https://data.gateapi.io/api2/1/ticker/${symbol}`)
        .then(value => value.data)
        .catch(eror => {
            throw new HttpException('Coin not found', HttpStatus.NOT_FOUND);
        })
    }

}
