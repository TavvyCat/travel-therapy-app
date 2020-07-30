import React from 'react';
import { Container } from 'reactstrap';

const Home = props => {
    return(
        <Container className="text-center" style={{height: "500"}}>
            <h1 className="py-4">Our Mission</h1>
            <p className="text-center" style={{lineHeight: "50px"}}>
                We exist to get you paid as much as possible. We are essentially a recruiter, but we are primarily an app. You don't have to give a portion of your paycheck to recruiters anymore. We connect you directly to the facilities that need traveling therapists. We work hard to have more travel jobs available than anyone else. It's easy to search within certain states, and what type of facility the job is at. Once you create a free account with us, applying is just one click away.
            </p>
        </Container>
    )
}

export default Home;