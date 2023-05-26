import React, { Fragment} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/index.jsx'
import Header from '../../components/Header/index.jsx';
import NavHeader from '../../components/NavHeader/index.jsx';
import BannerAPropos from '../../components/BannerAPropos/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import '../../Styles/AProposPage.css';

export default function AProposPage() {
    return (
        <body>
        <Router>
            <Route path="/" component={<Home />} />
            <Route path="/AProposPage" component={<AProposPage />} />
        </Router>
        </body>
    )
}
 // eslint-disable-next-line no-func-assign
AProposPage =  () => (
        <Fragment>
            <div className="AProposPage">
                <Header />
                <NavHeader />
                <BannerAPropos />
                <Footer />
            </div>
        </Fragment>
)







