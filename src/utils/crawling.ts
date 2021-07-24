import { Injectable } from "@nestjs/common";
import fetch from 'node-fetch';
import cheerio from 'cheerio'

@Injectable()
class crawling{
  
  getPageScript = async () =>  {
    const response = await fetch('https://www.busan.go.kr/covid19/Corona19.do', {
      method: 'GET'
    })

    const data = await response.text();

    const $ = cheerio.load(data);
    const coronaStateTable = $('.covid-state-table table').html();
    // const dataTable = coronaStateTable;
    // console.log('dataTable: ', dataTable);
    return `<table>${coronaStateTable}</table>`;
  } 
}

export default crawling;