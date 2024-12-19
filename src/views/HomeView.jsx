import React from 'react';
import Skip from '../components/Skip';
import Headers from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import Skill from '../components/Skill';
import Site from '../components/Site';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomeView = () => {
    return (
        <div>
            <Skip />
            <Headers />
            <Main>
                <Intro />
                <Skill />
                <Site />
                <Portfolio />
                <Contact />
            </Main>
            <Footer />
        </div>
    )
}

export default HomeView;