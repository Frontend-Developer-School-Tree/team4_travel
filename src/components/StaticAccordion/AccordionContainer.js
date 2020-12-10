import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Accordion from './Accordion';
import Tariffe from './Tariffe';


function AccordionContainer() {
    const contesto = useContext(AppContext);
    const { documentsRequested, documentsInsurance, documentsCancellation, documentsPayment } = contesto;
    return (
        <div>
            <Tariffe title='TARIFFE' content={contesto} />
            <Accordion title={documentsRequested.name} content={documentsRequested.description}/>
            <Accordion title={documentsInsurance.name} content={documentsInsurance.description}/>
            <Accordion title={documentsCancellation.name} content={documentsCancellation.description}/>
            <Accordion title={documentsPayment.name} content={documentsCancellation.description}/>
        </div>
    )
}

export default AccordionContainer
