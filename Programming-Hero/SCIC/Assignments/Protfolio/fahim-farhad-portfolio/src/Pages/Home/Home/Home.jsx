import React from 'react';
import Banner from './Banner/Banner';
import About from '../../About/About';
import Skills from '../../Skills/Skills';
import Project from '../../Projects/Project';
import Contect from '../../Contract/Contect';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About />
            <Skills />
            <Project />
            <Contect />
        </div>
    );
};

export default Home;