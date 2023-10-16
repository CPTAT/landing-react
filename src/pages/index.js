import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne} from '../components/InfoSection/Data';
import Algorithm from '../components/AlgorithmSection';
import Footer from '../components/Footer';
import Example from '../components/ExamplesSection';
import { SliderData } from '../components/ExamplesSection/ExamplesData'
import TeamSection from '../components/TeamSection';
import FormSection from '../components/FormSection';
import OpportunitiesSection from '../components/OpportunitiesSection';
import ClientsSection from '../components/ClientsSection';

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
        <OpportunitiesSection {...homeObjOne} />
        <ClientsSection {...homeObjOne} />
        <Algorithm />
        <Example slides={SliderData}/>
        <TeamSection />
        <FormSection />
        <Footer />

        </>
    );
};

export default Home;
