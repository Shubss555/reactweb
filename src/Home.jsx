import React from 'react';
import Common from './Common';
import hero from '../src/image/hero.svg';

const Home = () => {
    return (
        <>
         <Common name="Grow your bussiness with"
                 img={hero}
                visit="/service"
                btname="Get started"
         />
        </>
    )
}
export default Home;