import React from 'react';
import logo from '../../images/netflix.svg'
import {
    Bar,
    StyledButton,
    StyledAppBar,
    StyledToolbar,
    StyledBox,
    StyledSelect,
    StyledFormControl
} from './HeaderStyle.js';
import {InputLabel, MenuItem} from '@mui/material';


const Header = () => {
    const [lang, setLang] = React.useState('Русский');

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    return (
        <StyledAppBar
        color="inherit"
        position="static"
    >
        <StyledToolbar>
            <Bar>
                <img src={logo} alt="logo"/>
            </Bar>
            <StyledBox>
                <StyledFormControl variant="standard" fullWidth>
                    <InputLabel sx={{color: "white"}} id="demo-simple-select-label">Язык</InputLabel>
                    <StyledSelect
                        value={lang}
                        label="Русский"
                        defaultValue={lang}
                        onChange={handleChange}
                        MenuProps={{
                            disableScrollLock: true,
                            sx: {
                                ".MuiList-root": {
                                    "&.MuiMenu-list": {
                                        backgroundColor: "#959595"
                                    }
                                }
                            }
                        }}
                    >
                        <MenuItem value={"Русский"}>Русский</MenuItem>
                        <MenuItem value={"Украинский"}>Украинский</MenuItem>
                        <MenuItem value={"English"}>English</MenuItem>
                    </StyledSelect>
                </StyledFormControl>
                <StyledButton>Войти</StyledButton>
            </StyledBox>
        </StyledToolbar>
    </StyledAppBar>
    );
};

export default Header;
