
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home'
import Header from '../../Header'
import NavHeader from '../../NavHeader';
import AProposPage from '../AProposPage'
import LogementPage from '../LogementPage';
import Error from '../Error';
import Footer from '../../Header'



ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
                <NavHeader />
                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/AProposPage" element={<AProposPage />} />
                        <Route path="/LogementPage" element={<LogementPage />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                <Footer />
            </Router>
        </React.StrictMode>,
    document.getElementById('root')
)
