let buyerName = prompt("Siapa nama anda ?");
let product = prompt("produk apa yang anda beli?");

function shop(buyerName, product) {
    let speaker = `Terima kasih ${buyerName} telah membeli ${product}`;
    return speaker;
}


document.getElementById("demo").innerHTML = shop(buyerName, product);
