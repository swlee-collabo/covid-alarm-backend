"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
const cheerio_1 = require("cheerio");
let crawling = class crawling {
    constructor() {
        this.getPageScript = async () => {
            const response = await node_fetch_1.default('https://www.busan.go.kr/covid19/Corona19.do', {
                method: 'GET'
            });
            const data = await response.text();
            const $ = cheerio_1.default.load(data);
            const coronaStateTable = $('.covid-state-table table').html();
            return `<table>${coronaStateTable}</table>`;
        };
    }
};
crawling = __decorate([
    common_1.Injectable()
], crawling);
exports.default = crawling;
//# sourceMappingURL=crawling.js.map