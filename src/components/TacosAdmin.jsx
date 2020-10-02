import React, {Component} from 'react';

import Container from './Container';
import PageTitle from './PageTitle';
import Routes from './Routes';
//import axios from 'axios';

export default class TacosAdminnn extends Component{



    render(){
        return (
            <Container>
                <PageTitle text='Taqueria' color='black' fontSize={8}/>
                <Routes/>
            </Container>
                
                
        );
    }
}