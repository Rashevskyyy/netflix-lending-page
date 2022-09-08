import {Accordion, Container, styled, Typography} from '@mui/material';
import {ExpandMoreOutlined} from '@mui/icons-material';
import {TextRoot} from '../indexStyle';


export const TextContainer = styled('div')(() => ({
    flex: '0 1 auto',
    height: "100%",
    padding: "0 0 0 0",
    width: '50%',
    zIndex: '3'
}))

export const StyledAccordion = styled(Accordion)(() => ({
    backgroundColor: '#303030',
    color: "white", margin: "0 0 8px 0"
}))

export const StyledTitle = styled(TextRoot)(() => ({
    margin: "0 0 3rem 0"
}))

export const StyledText = styled(Typography)(() => ({
    fontSize: 26
}))

export const StyledExpandMore = styled(ExpandMoreOutlined)(() => ({
    color: 'white'
}))

export const StyledContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '1300px',
    padding: '80px 300px',
    flexDirection: 'column'
}))
