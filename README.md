A simple command-line Currency Converter application built with Node.js.
This project fetches real-time exchange rates from an API and converts currency values between different countries.

🚀 Features
Real-time exchange rate conversion
Supports multiple currencies
Simple command-line interface (CLI)
Handles invalid inputs gracefully
Demonstrates use of Node.js modules and asynchronous programming
🛠️ Technologies Used
Node.js
Axios / Fetch API for HTTP requests
readline for user input
Chalk for colored CLI output (optional)
📂 Project Structure
Currency-Converter/
│
├── app.js
├── package.json
└── README.md

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/yourusername/currency-converter-nodejs.git
cd currency-converter-nodejs


Install dependencies

npm install


Add your API key

Sign up at ExchangeRate API or FreeCurrencyAPI
Replace your API key in the code:
const API_KEY = 'YOUR_API_KEY';


Run the project

node app.js

💡 Usage Example
Enter base currency (e.g., USD): USD
Enter target currency (e.g., INR): INR
Enter amount: 10

💰 10 USD = 832.70 INR

🧠 Concepts Covered
Asynchronous programming with Promises
API integration using Axios/Fetch
CLI interaction using Node.js readline
Error handling and user input validation





