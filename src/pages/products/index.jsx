import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useProducts } from "../../context/ProductContext";

function Index() {
    const { products, fetchData, deleteProduct } = useProducts();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Productos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Referencia</th>
                        <th>Precio</th>
                        <th>Peso</th>
                        <th>Categoría</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.reference}</td>
                                <td>{product.price}</td>
                                <td>{product.weight}</td>
                                <td>{product.category}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded' onClick={() => navigate(`/edit/${product.id}`)}>Editar</button>
                                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded' onClick={() => deleteProduct(product.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                products.length === 0 ? <h4>No hay productos creados...</h4> : ''
            }
        </div>
    );
}

export default Index;