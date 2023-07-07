import { Form, Formik } from 'formik';
import ProductsApi from '../../api/products.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProducts } from '../../context/ProductContext';

function CreateForm() {
    const navigate = useNavigate();

    const { getProduct, updateProduct } = useProducts();

    const [product, setProduct] = useState({
        name: "",
        reference: "",
        price: "",
        weight: "",
        category: "",
        stock: "",
    });

    useEffect(() => {
        const loadProduct = async () => {
            if (params.id) {
                const response = await getProduct(params.id);
                setProduct(response);
            }
        }
        loadProduct();
    }, []);

    const productsApi = new ProductsApi();
    const params = useParams();

    return (
        <div>
            <h1>{(!params.id) ? 'Crear producto' : 'Editar producto'}</h1>

            <Formik
                initialValues={product}
                enableReinitialize={true}
                onSubmit={async (values, { setErrors, setFieldError, resetForm }) => {
                    setErrors({});
                    let response;

                    if (!params.id) {
                        response = await productsApi.createProduct(values);

                        if (response.status === 201) {
                            alert(`Producto creado con éxito id: ${response.id}`);
                            resetForm({});
                        }
                    } else {
                        response = await updateProduct(params.id, values);

                        if (response.status === 200) {
                            navigate('/');
                        }
                    }

                    if (response.status === 400) {
                        alert(`Error de validación`);
                        response.errors.forEach(error => {
                            setFieldError(error.path, error.message);
                        });
                    }
                }}
            >
                {({ handleChange, handleSubmit, errors, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-4">
                            <div>
                                {errors.name && <div className='error'>{errors.name}</div>}
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nombre</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="name"
                                    placeholder='Nombre...'
                                    onChange={handleChange}
                                    value={values.name} />
                            </div>
                            <div>
                                {errors.reference && <div className='error'>{errors.reference}</div>}
                                <label htmlFor="reference" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Referencia</label>
                                <input 
                                    type="text" 
                                    id="reference" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="reference"
                                    placeholder='Referencia...'
                                    onChange={handleChange}
                                    value={values.reference} />
                            </div>
                            <div>
                                {errors.price && <div className='error'>{errors.price}</div>}
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Precio</label>
                                <input 
                                    type="number" 
                                    id="price" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="price"
                                    placeholder='Precio...'
                                    onChange={handleChange}
                                    value={values.price} />
                            </div>
                            <div>
                                {errors.weight && <div className='error'>{errors.weight}</div>}
                                <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Peso</label>
                                <input 
                                    type="number" 
                                    id="weight" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="weight"
                                    placeholder='Peso...'
                                    onChange={handleChange}
                                    value={values.weight} />
                            </div>
                            <div>
                                {errors.category && <div className='error'>{errors.category}</div>}
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Categoría</label>
                                <input 
                                    type="text" 
                                    id="category" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="category"
                                    placeholder='Categoría...'
                                    onChange={handleChange}
                                    value={values.category} />
                            </div>
                            <div>
                                {errors.stock && <div className='error'>{errors.stock}</div>}
                                <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Stock</label>
                                <input 
                                    type="text" 
                                    id="stock" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="stock"
                                    placeholder='Stock...'
                                    onChange={handleChange}
                                    value={values.stock} />
                            </div>
                        </div>

                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded' type='submit' disabled={isSubmitting}>{
                            isSubmitting ? 'Creando...' : (!params.id) ? 'Crear' : 'Editar'
                        }</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default CreateForm;