const fetch = require('node-fetch');
const cheerio = require('cheerio');
const readlineSync = require('readline-sync');

console.log(`
 ██████╗ ██╗████████╗██╗  ██╗██╗   ██╗██████╗     ██╗   ██╗██╗███████╗██╗████████╗ ██████╗ ██████╗ 
██╔════╝ ██║╚══██╔══╝██║  ██║██║   ██║██╔══██╗    ██║   ██║██║██╔════╝██║╚══██╔══╝██╔═══██╗██╔══██╗
██║  ███╗██║   ██║   ███████║██║   ██║██████╔╝    ██║   ██║██║███████╗██║   ██║   ██║   ██║██████╔╝
██║   ██║██║   ██║   ██╔══██║██║   ██║██╔══██╗    ╚██╗ ██╔╝██║╚════██║██║   ██║   ██║   ██║██╔══██╗
╚██████╔╝██║   ██║   ██║  ██║╚██████╔╝██████╔╝     ╚████╔╝ ██║███████║██║   ██║   ╚██████╔╝██║  ██║
 ╚═════╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═════╝       ╚═══╝  ╚═╝╚══════╝╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
                                           BOT v.1.0         By Andhika D. Maulana   

`)

const link = readlineSync.question('Input your link : ');
console.log('');

const spam = () => new Promise((resolve, reject) => {
    fetch(`${link}`, {
        method: 'GET',
        headers: {
            'authority': 'camo.githubusercontent.com',
            'cache-control': 'max-age=0',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-language': 'en-US,en;q=0.9,id;q=0.8'
        }
    })
    .then(res => res.text())
    .then(result => {
        const $ = cheerio.load(result)
        const satu = $('tspan[x=7]').text();
        const dua = $('tspan[x=39]').text();
        const tiga = $('tspan[x=71]').text();
        const empat = $('tspan[x=103]').text();
        const lima = $('tspan[x=135]').text();
        const enam = $('tspan[x=167]').text();
        const tujuh = $('tspan[x=199]').text();
        const total = `${satu}${dua}${tiga}${empat}${lima}${enam}${tujuh}`
        resolve(total)
    })
    .catch(err => {
        reject(err)
    })
});

(async () => {
    
    while (true) {
        const resultspam = await spam();
        console.log(resultspam);
    }
})();