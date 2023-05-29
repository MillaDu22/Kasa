
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Home from './Pages/Home/index.jsx';
import AProposPage from './Pages/AProposPage/index.jsx';
import LogementPage from './Pages/LogementPage/index.jsx';
import Error from './Pages/Error/index.jsx';
import Footer from './components/Footer/index.jsx'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        <Home />
        <AProposPage />
        <LogementPage />
        <Error />
        <Routes>
            <Route exact path="/" element={<Home />} />
                <Route path="/AProposPage" element={<AProposPage />} />
                <Route path="/LogementPage" element={<LogementPage />} />
                <Route path="*" element={<Error />} /> 
        </Routes>
        <Footer />
    </BrowserRouter>
);
reportWebVitals();