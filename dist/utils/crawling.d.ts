declare class crawling {
    getPageScript: () => Promise<import("cheerio").Cheerio<import("cheerio").Element>>;
}
export default crawling;
