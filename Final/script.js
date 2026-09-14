let currencies = {};

const currencyApi = "https://open.er-api.com/v6/latest/USD";

const cryptoApi =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,dogecoin&vs_currencies=usd";


async function getCurrencies() {
    try {
        let response = await fetch(currencyApi);
        let data = await response.json();

        currencies = data.rates;
        currencies.USD = 1;

        localStorage.setItem(
            "currencies",
            JSON.stringify(currencies)
        );

        showCurrencies();

        document.getElementById("status").textContent =
            "Дані оновлено";

    } catch {
        let saved = localStorage.getItem("currencies");

        if (saved) {
            currencies = JSON.parse(saved);
            showCurrencies();

            document.getElementById("status").textContent =
                "Використовуються збережені дані";
        }
    }
}


function showCurrencies() {
    let table = document.getElementById("currencyTable");

    let from = document.getElementById("from");
    let to = document.getElementById("to");

    table.innerHTML = "";
    from.innerHTML = "";
    to.innerHTML = "";

    for (let currency in currencies) {

        table.innerHTML += `
            <tr>
                <td>${currency}</td>
                <td>${currencies[currency].toFixed(4)}</td>
            </tr>
        `;

        from.innerHTML += `
            <option value="${currency}">
                ${currency}
            </option>
        `;

        to.innerHTML += `
            <option value="${currency}">
                ${currency}
            </option>
        `;
    }

    from.value = "USD";
    to.value = "UAH";
}


function convert() {
    let amount = Number(
        document.getElementById("amount").value
    );

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    let result =
        amount / currencies[from] * currencies[to];

    document.getElementById("result").textContent =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}


async function getCrypto() {
    try {
        let response = await fetch(cryptoApi);
        let data = await response.json();

        localStorage.setItem(
            "crypto",
            JSON.stringify(data)
        );

        showCrypto(data);

    } catch {
        let saved = localStorage.getItem("crypto");

        if (saved) {
            showCrypto(JSON.parse(saved));
        }
    }
}


function showCrypto(data) {
    let table = document.getElementById("cryptoTable");

    table.innerHTML = "";

    let names = {
        bitcoin: "Bitcoin",
        ethereum: "Ethereum",
        solana: "Solana",
        cardano: "Cardano",
        dogecoin: "Dogecoin"
    };

    for (let crypto in data) {
        table.innerHTML += `
            <tr>
                <td>${names[crypto]}</td>
                <td>$${data[crypto].usd}</td>
            </tr>
        `;
    }
}


getCurrencies();
getCrypto();

setInterval(() => {
    getCurrencies();
    getCrypto();
}, 1800000);
