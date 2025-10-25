import Product from "../models/product.js";

const API_URL = "https://fakestoreapi.com/products";

export const getAllProducts = async () => {
    try {
        const response = await fetch(API_URL);
        const apiData = await response.json();
        const mapProducts = apiData.map(product => Product.convertApiData(product))
        return mapProducts;    
    } catch (error) {
        return "Error al intentar obtener los productos.";
    }
}

export const getOneProduct = async (id) => {
    id = parseInt(id);
    
    if (typeof id != "number") {
        return "El id ingresado no es un numero.";
    }

    if (id <= 0) {
        return "No se puede ingresar un id negativo";
    }
    
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const apiData = await response.json();
        const mapProduct = Product.convertApiData(apiData);
        return mapProduct;
    } catch (error) {
        return "Error al intentar obtener el producto.";
    }
}


export const addProduct = async (product) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        })
        const data = await response.json();
        return data;
    } catch (error) {
        return "Error al intentar agregar un nuevo producto.";
    }
} 

export const deleteProduct = async(id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        })
        const data = await response.json();
        return data;
    } catch (error) {
        return "Error al intentar eliminar el producto";
    }
}
