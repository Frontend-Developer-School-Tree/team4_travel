import React from 'react'
import AccordionContainer from './StaticAccordion/AccordionContainer'
import Footer from './Footer'
import Header from './Header'
import Mappina from './Mappina'

import Referenze from './Referenze'
import { AppContext } from '../context/AppContext'
import LuoghiContainer from './Luoghi/LuoghiContainer'


function HomePage({ data }) {
    return (
            <AppContext.Provider value={data}>
                <Header />
                <Mappina />
                <Referenze />
                <LuoghiContainer />
                <AccordionContainer />
                <Footer />
            </AppContext.Provider>
    )
}

export default HomePage
