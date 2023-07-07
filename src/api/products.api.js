class ProductsApi {
    async createProduct(product) {
        return await fetch(import.meta.env.VITE_URL_BACKEND, {
            method: 'POST',
            body: JSON.stringify(product),
            headers:{
              'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => error)
        .then(response => response);
    }

    async getProducts() {
        return await fetch(import.meta.env.VITE_URL_BACKEND)
        .then(res => res.json())
        .catch(error => error)
        .then(response => response);
    }

    async deleteProduct(id) {
        return await fetch(import.meta.env.VITE_URL_BACKEND + '/' + id, {
            method: 'DELETE'
        }).then(res => res.json())
        .catch(error => error)
        .then(response => response);
    }

    async getProduct(id) {
        return await fetch(import.meta.env.VITE_URL_BACKEND + '/' + id)
        .then(res => res.json())
        .catch(error => error)
        .then(response => response);
    }

    async updateProduct(id, product) {
        return await fetch(import.meta.env.VITE_URL_BACKEND + '/' + id, {
            method: 'PUT',
            body: JSON.stringify(product),
            headers:{
              'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => error)
        .then(response => response);
    }
}

export default ProductsApi;