import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CryptoModel } from '../models/crypto.model';
import { WatcherService } from '../services/watcher.service';

@UseGuards(JwtAuthGuard)
@Controller('watcher')
export class WatcherController {

    constructor(
        private watcherServices: WatcherService
        ){}

    @Post('/get')    
    getCryptoPrices(@Body() body: CryptoModel){
        return this.watcherServices.getValueFromBinance(body);

    }
}
