import {Box, Button, Input, styled} from '@mui/material';

export const TextContainer = styled('div')(() => ({
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    padding: "1% 25%",
    flexDirection: "column",
}))

export const BoxContainer = styled(Box)(() => ({
    background: "inherit",
    display: "flex",
    flexDirection: "column",
    padding: "10% 0",
}))

export const Watch = styled('div')(() => ({
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
}))

export const StyledButton = styled(Button)({
    background: '#e50914',
    width: "300px",
    fontSize: "22px",
    height: "70px",
    "&:hover": {
        background: '#e50914'
    },
    borderBottomLeftRadius: "0!important",
    borderTopLeftRadius: "0!important",
})

export const StyledTextField = styled(Input)({
    height: '70px',
    padding: "20px 20px",
    borderBottomRightRadius: "0!important",
    borderTopRightRadius: "0!important",
    background: 'white',
    borderRadius: "4px",
    width: "500px",
});