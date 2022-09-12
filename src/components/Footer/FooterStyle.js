import {Container, List, styled, Typography} from '@mui/material';


export const Text = styled(Typography)(() => ({
    color: "#737373",
    padding: '16px'
}))

export const StyledList = styled(List)(() => ({
    fontSize: '13px'
}))

export const StyledContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '1300px',
    padding: '30px 150px!important',
    flexDirection: 'column',
}))
