function GetCryptoInfo(){
    let Name = document.getElementById("scrcrypto").value
    document.getElementById("cryptoname").innerHTML = Name;

    let url = "https://api.wazirx.com/sapi/v1/tickers/24hr"
   console.log(`url : ${url}`);

    fetch(url)
    .then(res => {
        if(res.ok){
            // console.log(`json : ${res.json()}`);
            return res.json()
        }else{
            throw new console.error();
        }
    })
    .then(data => {
        //console.log(`data : ${JSON.stringify(data)}`);
        
        Extracted(data)
    })
    .catch(err => {
        console.log(`Error while get data${err}`)
    })
}

// {"symbol":"btcinr","baseAsset":"btc","quoteAsset":"inr","openPrice":"5920010","lowPrice":"5800000.0","highPrice":"6019006.0","lastPrice":"6019006.0","volume":"2.66613","bidPrice":"6016027.0","askPrice":"6016615.0","at":1716395885000},
function Extracted(crypto){
    //let name = crypto

   crypto.forEach(cry1 => {
    if(Name == cry1.symbol){
        let Symbol = cry1.symbol
        let cryptoprice = cry1.askPrice
        let cryptoOP = cry1.openPrice
        let cryptolowprice = cry1.lowPrice
        let crypthighprice = cry1.highPrice
        
        document.getElementById("cryptsymbol").innerText = Symbol
        document.getElementById("cryptoprice").innerText = cryptoprice
        document.getElementById("cryptoOP").innerText = cryptoOP
        document.getElementById("cryptolowprice").innerText = cryptolowprice
        document.getElementById("crypthighprice").innerText = crypthighprice

    }

   
   })







}
       
       //console.log(`some random datd: ${cry1.askPrice}`)
    //    let price = cry1.askPrice
    //    let OPprice = cry1.openPrice
    //    let lowprice = cry1.lowPrice
    //    let highprice = cry1.highPrice
        
       

      // })
       

       // condition check 
    //document.getElementById("cryptoprice").innerHTML = price;
    // document.getElementById("cryptoOP").innerHTML = cry1.openPrice;
    // document.getElementById("cryptolowprice").innerHTML = cry1.lowPrice;
    // document.getElementById("crypthighprice").innerHTML = cry1.highPrice;
       
   // }
   
//    let Symbol = cry1.symbol
//    let cryptoprice = cry1.askPrice
//    let cryptoOP = cry1.openPrice
//    let cryptolowprice = cry1.lowPrice
//    let crypthighprice = cry1.highPrice
   
//    document.getElementById("cryptsymbol").innerText = Symbol
//    document.getElementById("cryptoprice").innerText = cryptoprice
//    document.getElementById("cryptoOP").innerText = cryptoOP
//    document.getElementById("cryptolowprice").innerText = cryptolowprice
//    document.getElementById("crypthighprice").innerText = crypthighprice



