import React from 'react';
import Common from './Common';
import hero from '../src/image/hero.svg';

const About = () => {
    
    return (
        <>
           <Common name='Welcome to about page'
                img={hero}
                visit="/contact"
                btname="Contact Now"
           />
        </>
    )
}
export default About;