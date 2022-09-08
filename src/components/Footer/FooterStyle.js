import { Container, styled } from '@mui/material';


export const TextContainer = styled('div')(() => ({
    flex: '0 1 auto',
    height: "100%",
    padding: "0 0 0 0",
    width: '50%',
    zIndex: '3'
}))

export const StyledContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '1300px',
    padding: '30px 350px',
    flexDirection: 'column'
}))
