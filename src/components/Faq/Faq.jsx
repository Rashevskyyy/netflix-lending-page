import React from 'react';
import {
    StyledContainer,
    StyledAccordion,
    StyledExpandMore,
    StyledTitle,
    StyledText,
} from './FaqStyle';
import {AccordionDetails, AccordionSummary} from '@mui/material';
import {useTranslation} from 'react-i18next';

const Faq = () => {
    const [expanded, setExpanded] = React.useState(false);
    const {t} = useTranslation('', {keyPrefix: 'faq'})

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <StyledContainer disableGutters={true} maxWidth={false}>
            <StyledTitle>
                {t("question")}
            </StyledTitle>
            <StyledAccordion expanded={String(expanded) === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<StyledExpandMore/>}>
                    <StyledText>{t("accordion1")}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {t("accordion1_title")}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={String(expanded) === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<StyledExpandMore/>}>
                    <StyledText>{t("accordion2")}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {t("accordion2_title")}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={String(expanded) === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<StyledExpandMore/>}>
                    <StyledText>{t("accordion3")}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {t("accordion3_title")}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={String(expanded) === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<StyledExpandMore/>}>
                    <StyledText>{t("accordion4")}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {t("accordion4_title")}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={String(expanded) === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<StyledExpandMore/>}>
                    <StyledText>{t("accordion5")}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {t("accordion5_title")}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={String(expanded) === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<StyledExpandMore/>}>
                    <StyledText>{t("accordion6")}</StyledText>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledText>
                        {t("accordion6_title")}
                    </StyledText>
                </AccordionDetails>
            </StyledAccordion>
        </StyledContainer>
    );
};

export default Faq;
