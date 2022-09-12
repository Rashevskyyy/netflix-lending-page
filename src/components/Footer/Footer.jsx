import React from 'react';
import {StyledContainer, StyledList, Text} from './FooterStyle';
import {Grid, Link, ListItem} from '@mui/material';
import {useTranslation} from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation('', { keyPrefix: 'footer'})

    const arr = [
        {
            title: `${t("question")}`,
            link: "tel:0800-509-417",
        },
        {
            title: `${t("supportCenter")}`,
            link: "tel:0800-509-417",
        },
        {
            title: `${t("account")}`,
            link: "tel:0800-509-417",
        },
        {
            title: `${t("forInvestors")}`,
            link: "tel:0800-509-417",
        },
        {
            title: `${t("mediaCenter")}`,
            link: "tel:0800-509-417",
        },
        {
            title: `${t("jobs")}`,
            link: "tel:0800-509-417",
        },
        {
            title: `${t("viewMethods")}`,
            link: "tel:0800-509-417",
        },
        {
            title: `${t("terms")}`,
            link: "tel:0800-509-417",
        },
    ]

    return (
        <StyledContainer>
            <Text>
                {t("questionCall")} <Link color={"#737373"} href={"tel:0800-509-417"}
                                                      underline={"hover"}>0800-509-417</Link>
            </Text>
            <Grid container>
                {arr.map(links => (
                    <Grid key={links.title} item xs={3}>
                        <StyledList color={'#737373'}>
                            <ListItem>
                                <Link color={"#737373"} href={links.link} underline={"hover"}>{links.title}</Link>
                            </ListItem>
                        </StyledList>
                    </Grid>
                ))}
            </Grid>
            <Text sx={{fontSize: 13}}>
                {t("netflixCountry")}
            </Text>
        </StyledContainer>
    );
};

export default Footer;
