import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './Pages/Common/Blog/Blog';
import Footer from './Pages/Common/Footer/Footer';
import Header from './Pages/Common/Header/Header';

import Home from './Pages/Home/Home/Home';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
            </Routes>
           <Footer></Footer>
        </div>
    );
};

export default App;