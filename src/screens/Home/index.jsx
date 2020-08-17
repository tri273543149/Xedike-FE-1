import React, {Fragment} from 'react';
import Slider from "../../components/Slider";
import Trips from "../../layouts/Trips";
import Services from "../../components/Services";
import Numbers from "../../components/Numbers";
import Sales from "../../components/Sales";
import BecomeDriver from "../../components/BecomeDriver";
import GetOnApp from "../../components/GetOnApp";

const Home = () => {
    return (
        <Fragment>
            <Slider />
            <Services />
            <Trips />
            <Numbers />
            <Sales />
            <BecomeDriver />
            <GetOnApp />
        </Fragment>
    );
};

export default Home;