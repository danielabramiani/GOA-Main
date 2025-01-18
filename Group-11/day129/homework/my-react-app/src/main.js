import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const App = () => {
  const users = [
    { id: 1, name: 'Daniel ', age: 14, occupation: 'Developer' },
    { id: 2, name: 'Chiko', age: 33, occupation: 'Designer' },
    { id: 3, name: 'Jumber', age: 28, occupation: 'Daya Base' }
  ];

  const products = [
    { id: 1, name: 'Laptop', price: '$444', description: 'High-performance laptop' },
    { id: 2, name: 'Headphones', price: '$140', description: 'Noise-cancelling headphones' },
    { id: 3, name: 'Smartphone', price: '$432', description: 'Latest model smartphone' }
  ];

  return (
    <div>
      <h1>User Profiles</h1>
      <ProfileList profiles={users} />
      <h1>Product Showcase</h1>
      <ProductList products={products} />
    </div>
  );
};

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} name={profile.name} age={profile.age} occupation={profile.occupation} />
      ))}
    </div>
  );
};

const ProfileCard = ({ name, age, occupation }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} name={product.name} price={product.price} description={product.description} />
      ))}
    </div>
  );
};

const ProductCard = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>{description}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
