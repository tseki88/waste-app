import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import AccordionList from './AccordionList'

const AccordionContainer = ({acceptedItems}) => {
    
    const [openAccordion, setOpenAccordion] = useState(null)

    useEffect(() => {
        if (acceptedItems.length === 1) {
            setOpenAccordion(0)
        }
    }, [])

    const accordionHandler = (index) => {
        if (openAccordion === index) {
            setOpenAccordion(null)
        } else {
            setOpenAccordion(index)
        }
    }
    
    return (
        <View style={{marginBottom: 10}}>
            {
                acceptedItems.map((each, i) => (
                    <AccordionList
                        key={i} 
                        acceptedItem={each} 
                        accordionHandler={() => accordionHandler(i)} 
                        open={openAccordion === i ? true : false}
                    />
                ))
            }
        </View>
    )
}

export default AccordionContainer