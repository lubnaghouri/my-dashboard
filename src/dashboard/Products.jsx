

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://68b91e2ab7154050432a09c2.mockapi.io/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch products');
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-4">Loading...</div>;
    if (error) return <div className="p-4 text-red-500">{error}</div>;

    return (
        <div className="p-4">
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Image</th>
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Category</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Rating</th>
                        <th className="border px-4 py-2">Count</th>
                        <th className="border px-4 py-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td className="border px-4 py-2"><img src={product.image} alt={product.title} style={{ width: '50px' }} /></td>
                            <td className="border px-4 py-2">{product.name}</td>
                            <td className="border px-4 py-2">${product.price}</td>
                            <td className="border px-4 py-2">{product.rating?.rate}</td>
                            <td className="border px-4 py-2">{product.description}</td>
                            <td className="px-4 py-2">
                                <Link className="bg-blue-600 hover:bg-blue-700 text-white px-3 me-2 py-1 rounded">View</Link>
                                <Link className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 me-2 py-1 rounded">Edit</Link>
                                <Link onClick={() => handleDelete(product.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Del</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products