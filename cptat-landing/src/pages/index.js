import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo} from '../components/InfoSection/Data';
import Algorithm from '../components/AlgorithmSection';
import Footer from '../components/Footer';
import Example from '../ExamplesSection';
import { SliderData } from '../ExamplesSection/ExamplesData'
import TeamSection from '../components/TeamSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <Algorithm />
        <Example slides={SliderData}/>
        <TeamSection />
        <InfoSection {...homeObjTwo} />
        <Footer />

        </>
    );
};

export default Home;
