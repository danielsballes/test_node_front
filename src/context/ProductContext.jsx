import { createContext, useContext, useState } from "react";
import ProductsApi from "../api/products.api";
import { useNavigate } from "react-router-dom";

export const ProductsContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductsContextProvider');
    }
    return context;
}

export const ProductsContextProvider = ({ children }) => {
    const productsApi = new ProductsApi();

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    async function fetchData() {
        const response = await productsApi.getProducts();
        setProducts(response.products);
    }

    async function deleteProduct(id) {
        try {
            const response = await productsApi.deleteProduct(id);
            if (response.status === 200) {
                alert('Producto eliminado id:' + id);
                setProducts(products.filter(product => product.id !== id));
            }
        } catch (error) {
            alert('No se pudo eliminar el producto');
        }
    }

    async function updateProduct(id, values) {
        try {
            const response = await productsApi.updateProduct(id, values);
            if (response.status === 200) {
                alert('Producto actualizado id:' + id);
            }

            return response;
        } catch (error) {
            alert('No se pudo actualizar el producto');
        }
    }

    async function getProduct(id) {
        try {
            const response = await productsApi.getProduct(id);
            
            if (response.status === 200) {
                return response.product;
            }

            if (response.status === 404) {
                alert('No se encontro el producto');
                navigate('/');
                return;
            }
        } catch (error) {
            alert('No se encontro el producto');
            navigate('/');
            return;
        }
    }

    return <ProductsContext.Provider value={{ products, fetchData, deleteProduct, getProduct, updateProduct }}>
        {children}
    </ProductsContext.Provider>;
}