import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import image1 from '../images/products/3.jpeg';
import image2 from '../images/products/4.jpeg';
import image3 from '../images/products/5.jpeg';
import image4 from '../images/products/6.jpeg';
import image5 from '../images/GI-Binding-Wire.webp';
import image6 from '../images/products/7.jpeg';
import image7 from '../images/products/8.jpeg';
import image8 from '../images/products/9.jpeg';
import image9 from '../images/products/cc05ef83-5d93-4dc8-8036-96e38aae1e0a.jpeg';
import image10 from '../images/products/d52fd23e-2639-40cb-879c-9b298a3b81fb.jpeg';
import image11 from '../images/cementcmpy.jpeg';
import image12 from '../images/coverblock.jpeg';
import image13 from '../images/GI-Binding-Wire.webp';
import image14 from '../images/ironwire.jpeg';
import image16 from '../images/jindal.jpeg';

// Product Data
const products = [
  { id: 1, name: 'Iron Rod Folded ', description: 'Lanter Jode FataFat', image: image1, price: '₹20/pcs' },
  { id: 2, name: 'Birla Cement', description: 'Tazurbe Ki Taaquat', image: image11, price: '₹350/pcs' },
  { id: 3, name: 'Cover Block ', description: 'Ghar Ka Expert', image: image9, price: '₹7/kg' },
  { id: 4, name: 'Iron Rod (Sariya)', description: 'High-quality iron rods for construction', image: image8, price: '₹40/kg' },
  // { id: 5, name: 'Premium Construction Image', description: 'Enhanced Building Materials', image: image1, price: 'Custom' },
  { id: 6, name: 'Single Rod', description: 'Strong and Durable', image: image2, price: "500/rod" },
  { id: 7, name: 'Iron Wire', description: 'General construction material', image: image3, price: 'Rs 600/pcs' },
  { id: 8, name: 'Weight', description: 'General-purpose material', image: image4, price: 'Custom' },
  { id: 9, name: 'GI Binding Wire', description: 'Binding construction items together', image: image5, price: '₹50/kg' },
  { id: 10, name: 'Birla Uttam Cement', description: 'For concrete and construction', image: image6, price: '₹300/kg' },
  { id: 11, name: 'Sariya TMT Rod', description: 'TMT Iron Rod', image: image7, price: 'Custom' },
  { id: 12, name: 'Cover ', description: 'For heavy-duty construction', image: image9, price: 'Custom' },
  { id: 13, name: 'Cement Mix', description: 'High-quality cement material', image: image10, price: 'Custom' },
  { id: 14, name: 'Advanced Materials', description: 'Durable construction products', image: image12, price: 'Custom' },
  { id: 15, name: 'Stock Image', description: 'Aesthetic construction sample', image: image13, price: 'Custom' },
  { id: 16, name: 'Iron Wires', description: 'Illustrative material', image: image14, price: 'Custom' },
  // { id: 17, name: 'Type Rod', description: 'Premium rod product', image: image15, price: 'Custom' },
  { id: 18, name: 'Jindal TMT Rod', description: 'Ideal for new projects', image: image16, price: 'Custom' },
];

const Products = () => {
  return (
    <>
      {/* Header */}
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mt-8 lg:mt-[100px] mb-10 text-black bg-white mx-auto py-2 px-6 rounded-xl outline-dotted w-fit">
          Our Products
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 border-black outline-dotted hover:scale-105 transition-transform duration-500 shadow-xl rounded-lg overflow-hidden transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-60 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-bold text-white">{product.name}</h2>
                <p className="text-sm sm:text-base text-gray-400">{product.description}</p>
                <p className="text-lg font-semibold mt-2 text-yellow-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mt-16 lg:h-[40vh] px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black">
          Need Help with Easier Construction Solutions? We Are Experts!
        </h1>
        <Link
          to="/contact"
          className="relative inline-block px-8 py-3 font-bold rounded-full bg-white text-black border-2 border-black hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Products;
