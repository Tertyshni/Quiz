const API_URL = "https://dummyjson.com/products";

async function getProducts() {

    try {

        const response = await fetch(API_URL);

        const data = await response.json();

        showProducts(data.products);

    } catch (error) {

        console.log(error);

    }
}

async function searchProducts() {

    const search = document.getElementById("searchInput").value;

    if (search === "") {
        getProducts();
        return;
    }

    try {

        const response = await fetch(
            `${API_URL}/search?q=${search}`
        );

        const data = await response.json();

        showProducts(data.products);

    } catch (error) {

        console.log(error);

    }
}

async function getSortedProducts() {
    const limit = document.getElementById("limit").value;
    const skip = document.getElementById("skip").value;
    const sort = document.getElementById("sort").value;

    try {

        const response = await fetch(
            `${API_URL}?limit=${limit}&skip=${skip}&sortBy=${sort}&order=asc`
        );

        const data = await response.json();

        showProducts(data.products);

    } catch (error) {

        console.log(error);

    }
}

async function getSingleProduct() {

    const id = document.getElementById("productId").value;

    if (!id) {
        alert("Введіть ID товару");
        return;
    }

    try {

        const response = await fetch(
            `${API_URL}/${id}`
        );

        const product = await response.json();

        showProducts([product]);

    } catch (error) {

        console.log(error);

    }
}

async function addProduct() {

    const title = document.getElementById("newTitle").value;

    const price = document.getElementById("newPrice").value;

    if (!title || !price) {
        alert("Заповніть всі поля");
        return;
    }

    try {

        const response = await fetch(API_URL + "/add", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: title,
                price: Number(price)
            })

        });

        const product = await response.json();

        document.getElementById("message").innerText =
            "Товар додано! ID: " + product.id;

        showProducts([product]);

    } catch (error) {

        console.log(error);

    }
}
async function updateProduct() {

    const id = document.getElementById("updateId").value;

    const title = document.getElementById("updateTitle").value;

    const price = document.getElementById("updatePrice").value;

    if (!id) {
        alert("Введіть ID товару");
        return;
    }

    const body = {};

    if (title) {
        body.title = title;
    }

    if (price) {
        body.price = Number(price);
    }

    try {

        const response = await fetch(
            `${API_URL}/${id}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(body)
            }
        );

        const product = await response.json();

        document.getElementById("message").innerText =
            "Товар оновлено!";

        showProducts([product]);

    } catch (error) {

        console.log(error);

    }
}

function showProducts(products) {

    const container =
        document.getElementById("products");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

            <div class="product">

                <img
                    src="${product.thumbnail || ""}"
                    alt="${product.title}"
                >

                <h3>${product.title}</h3>

                <p>
                    ID: ${product.id}
                </p>

                <p>
                    ${product.description || ""}
                </p>

                <p class="price">
                    $${product.price}
                </p>

                <p>
                    Rating: ${product.rating || "-"}
                </p>

                <p>
                    Category: ${product.category || "-"}
                </p>

            </div>

        `;

    });
}

getProducts();