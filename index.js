import { getAllProducts, getOneProduct, addProduct, deleteProduct } from "./controller/productController.js";
import Product from "./models/product.js";

const args = process.argv.slice(2);

let [method, resource, ...params] = args;

(async () => {

    if (args.length < 2) {
        console.log("Faltan argumentos.");
        return;
    }

    if (method.toLowerCase() === "get" && resource === "products") {
        const data = await getAllProducts();
        console.log(data);
        return
    }

    if (method.toLowerCase() === "get" && resource.toLowerCase().includes("products/")) {
        const methodParts = args.toString().split("/"); /// Separa el products/<id> en un array con products y id
        const id = methodParts[1]; // tomo el id que seria el segundo elemento.
        const data = await getOneProduct(id);
        console.log(data);
        return;
    }

    if (method.toLowerCase() === "post" && resource.toLowerCase() == "products") {
        const [title, price, category] = params;
        const product = new Product(title, price, category);
        const data = await addProduct(product);
        console.log(data);
        return;
    }

    if (method.toLowerCase() === "delete" && resource.toLowerCase().includes("products/")) {
        const methodParts = args.toString().split("/"); /// Separa el products/<id> en un array con products y id
        const id = methodParts[1]; // tomo el id que seria el segundo elemento.
        const apiData = await deleteProduct(id);
        const mapProduct = Product.convertApiData(apiData);
        console.log(mapProduct);
        return;
    }

    console.log("Comando no reconocido");

})();

