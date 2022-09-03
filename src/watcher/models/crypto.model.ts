import { IsString } from "class-validator"


export class CryptoModel{

    @IsString()
    fromCrypto: string;

    @IsString()
    toCrypto: string;
}