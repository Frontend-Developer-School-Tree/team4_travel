import React from 'react'
import { Redirect } from 'react-router-dom'
import AccordionContainer from './AccordionContainer'
import Footer from './Footer'
import Header from './Header'
import Referenze from './Referenze'
import { AppContext } from '../context/AppContext'


function HomePage({ data }) {
    return (
            <AppContext.Provider value={data}>
                <Header />
                <Referenze />
                <AccordionContainer />
                <Footer />
            </AppContext.Provider>
    )
}

export default HomePage
