import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AccordionList from './AccordionList'

const AccordionContainer = ({acceptedItems}) => {
    
    const [openAccordion, setOpenAccordion] = useState(null)

    const accordionHandler = (index) => {
        if (openAccordion === index) {
            setOpenAccordion(null)
        } else {
            setOpenAccordion(index)
        }
    }
    
    return (
        <View>
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

const styles = StyleSheet.create({})
