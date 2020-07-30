import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LatestJobs from './containers/LatestJobs';
import Home from './components/Home';

function App() {
    return (
        <Container>
            <Header/>
            <Switch>
                <Route path="/latest-jobs" component={LatestJobs} />
                <Route path="/search-for-jobs"/>
                <Route path="/" component={Home} />
            </Switch>
            <Footer/>
        </Container>
    );
}

export default App;
