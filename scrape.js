"use strict";
const puppeteer = require("puppeteer");

async function scrape(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    '//*[@id="content"]/div[3]/div/div/div/div/div/div[1]/div/div/div[1]/div/h1/span[2]'
  );
  const txt = await el.getProperty("textContent");
  const rawTxt = await txt.jsonValue();

  console.log({ rawTxt });

  browser.close();
}
scrape(
  "https://www.royalmint.com/gold-price/?utm_term=gold%20price&utm_campaign=PRM+-+Invest&utm_source=adwords&utm_medium=ppc&hsa_acc=9288023692&hsa_cam=13386978634&hsa_grp=122100981103&hsa_ad=554536144471&hsa_src=g&hsa_tgt=aud-1255044096217:kwd-17387132&hsa_kw=gold%20price&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw6pOTBhCTARIsAHF23fL_sAJbskxizG3wiCHy1a4esJBgm70tWyJA6IAjTfErqLMDWv36CfMaAk_uEALw_wcB"
);
