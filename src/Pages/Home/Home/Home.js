import React from 'react';
import Blogs from '../../Blogs/Blogs';
import Gallery from '../../Gallery/Gallery';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;





