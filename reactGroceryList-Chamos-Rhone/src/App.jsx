import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';
import Cart from './Cart';
import Receipt from './Receipt';
import Header from './Header';
import Footer from './Footer';

const items = [
  { name: 'Grapes', price: 15.00, image: 'https://img.freepik.com/free-photo/still-life-green-grapes-vineyard_23-2151574437.jpg' },
  { name: 'Oranges', price: 12.00, image: 'https://tourdefarm.in/wp-content/uploads/2021/01/Farmstay-Near-Nagpur-1.jpg' },
  { name: 'Kiwis', price: 52.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mr_skrcFIV2GFYV4UIjzRnG1gdcLRoamiQ&s' },
  { name: 'Bananas', price: 90.00, image: 'https://www.nicheagriculture.com/wp-content/uploads/2023/09/A-Guide-to-Robusta-Banana-Farming-in-India-2-scaled.jpg' },
  { name: 'Cucumbers', price: 50.50, image: 'https://thumbs.dreamstime.com/b/cucumber-growing-farm-cucumber-growing-farm-background-159064412.jpg' }
];


function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [amountPaid, setAmountPaid] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const handlePayment = () => {
    if (amountPaid >= totalPrice) {
      setIsProcessing(true);
      setTimeout(() => {
        const change = amountPaid - totalPrice;
        const newReceipt = {
          items: cart,
          totalPrice,
          amountPaid,
          change
        };
        setReceipt(newReceipt);
        setCart([]);
        setTotalPrice(0);
        setAmountPaid('');
        setIsProcessing(false);
      }, 1000);
    } else {
      alert('Insufficient payment. Please enter  valid amount.');
    }
  };

  return (
    <div className="App">
      <Header />
      
      <main>
        <section className="item-list">
          <ItemList items={items} addItemToCart={addItemToCart} />
        </section>

        <section className="cart">
          <Cart cart={cart} totalPrice={totalPrice} />
          
          <div className="payment">
            <input
              type="number"
              placeholder="Enter amount paid"
              value={amountPaid}
              onChange={(e) => setAmountPaid(Number(e.target.value))}
              min={0}
            />
            <button
              onClick={handlePayment}
              disabled={amountPaid < totalPrice || isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        </section>

        {receipt && <Receipt receipt={receipt} />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;