
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import products from './data/products.js';
import HomePage from './pages/HomePage.js';
import Nav from "./components/Nav.js"
import GalleryPage from "./pages/GalleryPage.js"
import StaffPage from "./pages/StaffPage.js"
import OrderPage from "./pages/OrderPage.js"
import LegoLog from "./pages/LegoLog.js"
import CreateLego from "./pages/CreateLego.js"
import EditLego from "./pages/EditLego.js"
import TopicsPage from "./pages/TopicsPage.js"

import './App.css';

function App() {

  const [lego, setLegotoEdit] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Christopher Partin 
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/order" element={<OrderPage products={products} />} />
                <Route path="/staff" element={<StaffPage />} />
                <Route path="/legolog" element={<LegoLog setLego={setLegotoEdit}/>} />
                <Route path="/createpage" element={<CreateLego />} />
                <Route path="/editpage" element={<EditLego legotoEdit={lego} />} />
                <Route path="/topics" element={<TopicsPage />} />

            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; Christopher Partin 2023</cite></p>
        </footer>
        
      </BrowserRouter>
      </div>
    );
  }

export default App;
