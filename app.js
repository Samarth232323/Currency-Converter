// import https from "https";
// import readline from "readline";
// import chalk from "chalk";

// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// const apiKey = '6f8b05b1752000086931e536';
// const url =  `https://v6.exchangerate-api.com/v6/6f8b05b1752000086931e536/latest/USD`;

// const covertCurrency = (amount, rate) => {
//     return (amount * rate).toFixed(2)
// }

// https.get(url, (response) =>{
//     let data = "";

//     response.on('data', (chunk) => {
//         data += chunk;
//     });

//     response.on('end', () => {
//         const rates = JSON.parse(data).conversion_rates;

//         // amount = 90
//         // currency = USD
//         // 90usd = how much inr
//         // 1usd = 84.9667 inr
//         // 90usd = ?

//         //90 * 84.9667


//         rl.question('Enter the amount in USD:', (amount) => {
//             rl.question('Enter the target currency (e.g., INR, EUR, NPR):', (currency) => {
//                 const rate = rates[currency.toUpperCase()];
//                 // console.log(amount, rate, currency);

//                 if(rate){
//                     console.log(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`);

//                 }else{
//                     console.log(`Invalid Currency Code`);
//                 }
//                 rl.close()

//             })
//         })
//     })
// })


//


import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "6f8b05b1752000086931e536";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

https.get(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;

    rl.question("Enter the amount in USD: ", (amount) => {
      rl.question("Enter the target currency (e.g., INR, EUR, NPR): ", (currency) => {
        const rate = rates[currency.toUpperCase()];

        if (rate) {
          console.log(
            chalk.green(
              `${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency.toUpperCase()}`
            )
          );
        } else {
          console.log(chalk.red("Invalid Currency Code"));
        }
        rl.close();
      });
    });
  });
});

