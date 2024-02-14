'use client';
import React, { useState } from 'react';

const NewItem = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {name, quantity, category};
        console.log(item);

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName('');
        setQuantity(1);
        setCategory('Produce');
    }
    
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState("Produce")
    return (
<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <label className="block mb-4">
        <span className="text-gray-700">Name:</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-150 focus:ring-opacity-50"
        />
      </label>
      
      <label className="block mb-4">
        <span className="text-gray-700">Quantity:</span>
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-150 focus:ring-opacity-50"
        />
      </label>
      
      <label className="block mb-4">
        Category:
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="">Select a category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </label>
      
      <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2">
        Submit
      </button>
</form>
    );
  };
  
  export default NewItem;