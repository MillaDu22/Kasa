
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import NavHeader from './pages/NavHeader';
import Error from './components/Error';



ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="./NavHeader/index.jsx" element={<NavHeader />} />
                    <Route path="/src/components/Header/index.jsx" element={<Header />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </React.StrictMode>,
    document.getElementById('root')
)