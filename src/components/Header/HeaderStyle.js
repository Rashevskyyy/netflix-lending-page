import {AppBar, Box, Button, FormControl, InputLabel, Select, styled, Toolbar} from '@mui/material';

export const Bar = styled('div')(() => ({
    marginRight: 'auto'
}))

export const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: 'transparent',
    boxShadow: "unset",
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    margin: "0 auto",
    transition: "background-color .5s",
    width: "100%",
    maxWidth: 1920,
    paddingTop: '20px'
}))

export const StyledToolbar = styled(Toolbar)(() => ({
    minHeight: "96px!important",
    alignItems: 'flex-start',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    paddingTop: '0.5rem',
    position: 'relative'
}))

export const StyledBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "15%",
}))

export const StyledSelect = styled(Select)(() => ({
    height: '40px',
    color: "white",
    "&.Mui-selected": {
        backgroundColor: "#5b5b5b"

    }
}))

export const StyledInputLabel = styled(InputLabel)(() => ({
    color: 'white',
}))

export const StyledFormControl = styled(FormControl)(() => ({
    marginRight: "2rem",
    display: 'inline-block',
    margin: '0 0.75rem',
    ".MuiFormLabel-root": {
        "&.MuiInputLabel-root": {
            "&.Mui-focused": {
                color: "white",
            }
        }
    },

}))

export const StyledButton = styled(Button)(() => ({
    float: 'right',
    marginTop: 0,
    whiteSpace: "nowrap",
    lineHeight: 'normal',
    background: "#e50914",
    color: "white",
    padding: "10px 17px",
    fontSize: 16,
    fontWeight: 400,
    borderRadius: 3,
    height: 30,
    "&:hover": {
        cursor: "pointer",
        background: '#e50914'
    }
}))
