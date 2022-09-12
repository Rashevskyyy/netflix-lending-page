import React from 'react';
import logo from '../../images/netflix.svg'
import {
    Bar,
    StyledButton,
    StyledAppBar,
    StyledToolbar,
    StyledBox,
    StyledSelect,
    StyledFormControl, StyledInputLabel
} from './HeaderStyle.js';
import {MenuItem} from '@mui/material';
import {useTranslation} from 'react-i18next';


const Header = () => {
    const { t, i18n } = useTranslation('', {keyPrefix: 'header'})
    const [lang, setLang] = React.useState(i18n.resolvedLanguage);

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value)
        setLang(event.target.value);
    };

    return (
        <StyledAppBar>
            <StyledToolbar>
                <Bar>
                    <img src={logo} alt="logo"/>
                </Bar>
                <StyledBox>
                    <StyledFormControl variant="standard" fullWidth>
                        <StyledInputLabel>{t("language")}</StyledInputLabel>
                        <StyledSelect
                            value={lang}
                            label={t("label")}
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
                            <MenuItem value={"ru"}>{t("ru")}</MenuItem>
                            <MenuItem value={"ua"}>{t("ua")}</MenuItem>
                            <MenuItem value={"en"}>{t("en")}</MenuItem>
                        </StyledSelect>
                    </StyledFormControl>
                    <StyledButton>{t("login")}</StyledButton>
                </StyledBox>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default Header;
