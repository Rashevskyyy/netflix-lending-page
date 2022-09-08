import React from 'react';
import {
    StyledContainer,
    StyledAccordion,
    StyledExpandMore,
    StyledTitle,
    StyledText,
} from './FaqStyle';
import {AccordionDetails, AccordionSummary} from '@mui/material';
import {titleFaq} from '../constants';

const Faq = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <StyledContainer disableGutters={true} maxWidth={false}>
            <StyledTitle>
                Распространенные вопросы
            </StyledTitle>
            <StyledAccordion expanded={String(expanded) === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<StyledExpandMore/>}>
                    <StyledText>{titleFaq.accordion1}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {titleFaq.accordion1_title}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={String(expanded) === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<StyledExpandMore/>}>
                    <StyledText>{titleFaq.accordion2}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {titleFaq.accordion2_title}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={String(expanded) === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<StyledExpandMore/>}>
                    <StyledText>{titleFaq.accordion3}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {titleFaq.accordion3_title}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={String(expanded) === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<StyledExpandMore/>}>
                    <StyledText>{titleFaq.accordion4}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {titleFaq.accordion4_title}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={String(expanded) === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<StyledExpandMore/>}>
                    <StyledText>{titleFaq.accordion5}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {titleFaq.accordion5_title}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={String(expanded) === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<StyledExpandMore/>}>
                    <StyledText>{titleFaq.accordion6}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {titleFaq.accordion6_title}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
        </StyledContainer>
    );
};

export default Faq;
