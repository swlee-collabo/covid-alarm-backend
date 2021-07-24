import { Injectable } from '@nestjs/common';
import { crawling as Crawling} from './utils/index'

const crawling = new Crawling();

@Injectable()
export class AppService {
  getHello(){
    return crawling.getPageScript();

    
  }
}
