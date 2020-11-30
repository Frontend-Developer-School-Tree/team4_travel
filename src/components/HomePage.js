import React from 'react'
import { Redirect } from 'react-router-dom'
import AccordionContainer from './AccordionContainer'
import Footer from './Footer'
import Header from './Header'
import Referenze from './Referenze'
import { Cookies } from 'react-cookie';
import { AppContext } from '../context/AppContext'


function HomePage({data}) {
    return (
            (Cookies.get('logged'))
            ?
            <AppContext.Provider value={data}>
                <Header />
                <Referenze />
                <AccordionContainer />
                <Footer />
            </AppContext.Provider>
            :
            <Redirect to='/' />
    )
}

export default HomePage
