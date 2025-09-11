import React, { useState } from 'react'
import axios from 'axios';


const Create = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rate: '',
    count: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const productData = {
        title: form.title,
        price: parseFloat(form.price),
        description: form.description,
        category: form.category,
        image: form.image,
        rating: {
          rate: parseFloat(form.rate),
          count: parseInt(form.count)
        }
      };
      const res = await axios.post('https://fakestoreapi.com/products', productData);
      setSuccess('Product created!');
      setForm({ title: '', price: '', description: '', category: '', image: '', rate: '', count: '' });
    } catch (err) {
      setError('Failed to create product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full border px-3 py-2" required />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" step="0.01" className="w-full border px-3 py-2" required />
        <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full border px-3 py-2" required />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full border px-3 py-2" required />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="w-full border px-3 py-2" required />
        <div className="flex gap-2">
          <input name="rate" value={form.rate} onChange={handleChange} placeholder="Rating" type="number" step="0.1" className="border px-3 py-2 w-1/2" required />
          <input name="count" value={form.count} onChange={handleChange} placeholder="Count" type="number" className="border px-3 py-2 w-1/2" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
        {success && <div className="text-green-600 mt-2">{success}</div>}
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </form>
    </div>
  );
}

export default Create