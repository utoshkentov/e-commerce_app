import React from 'react';
import Directory from "../../components/directory/directory.component";

import {HomePageContainer} from "./homepage.styles";

const Homepage = (props) => {
    return (
        <HomePageContainer>
           <Directory />
        </HomePageContainer>
    );
}

export default Homepage;