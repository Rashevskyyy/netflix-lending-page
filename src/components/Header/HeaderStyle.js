import {AppBar, Box, Button, FormControl, InputLabel, Select, styled, Toolbar} from '@mui/material';

export const Bar = styled('div')(() => ({
    flexGrow: 1
}))

export const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: 'unset',
    boxShadow: "unset",
    color: "inherit",
    position: "static",
}))

export const StyledToolbar = styled(Toolbar)(() => ({
    minHeight: "96px!important"
}))

export const StyledBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    ".MuiFormLabel-root": {
        "&.MuiInputLabel-root": {
            "&.Mui-focused": {
                color: "white"
            }
        }
    },
    ".MuiInputBase-root": {
        "&.MuiInput-root": {
            "&.MuiSelect-root": {
                "&:after": {
                    backgroundColor: "black"
                }
            }
        }

    },
    // ".MuiList-root": {
    //     "&.MuiMenu-list": {
    //         backgroundColor: "black"
    //     }
    // }
}))

export const StyledButton = styled(Button)(() => ({
    background: "#e50914",
    color: "white",
    padding: "10px 30px",
    fontSize: 16,
    fontWeight: 400,
    borderRadius: 3,
    marginLeft: 20,
    height: 30,
    "&:hover": {
        cursor: "pointer",
        background: '#e50914'
    }
}))
