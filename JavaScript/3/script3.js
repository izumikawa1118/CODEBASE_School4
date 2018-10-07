// 定数dollarYenRateに110を代入してください
const dollarYenRate = 110;

// アメリカドルを日本円に換算する関数convertToYenを作成してください
const convertToYen = (priceDollar)=> {
    return priceDollar * dollarYenRate;
}


    const information = (name, price) => {
	console.log(`アメリカドルで${name}は${price}ドルです`);
  
	// 定数priceYenを用意し、関数convertToYenを呼び出したものを代入してください
	const priceYen = convertToYen(price);
  
	// 「日本円で〇〇は△△円です」と出力してください
	console.log(`日本円で${name}は${priceYen}円です`);
  
	// 消さないでください
	console.log('--------------');
    };

information("香水", 48);
information("お菓子", 6);