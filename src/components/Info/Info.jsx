import React from 'react';
import {Container, Typography} from '@mui/material';
import {Box, Text, Watch, StyledTextField, StyledButton} from './InfoStyle.ts';
import {title} from './constants.ts';
import {ArrowRightAltOutlined} from '@mui/icons-material';


const Info = () => {
    return (
        <>
            <Container disableGutters={true} sx={{margin: "0"}} maxWidth={false}>
                <Box>
                    <Text>
                        <Typography sx={{fontSize: "3.125rem"}} color="white" fontWeight={'bold'} gutterBottom>
                            {title.root}
                        </Typography>
                        <Typography sx={{fontSize: "1.625rem"}} color="white" gutterBottom>
                            {title.secondary}
                        </Typography>
                        <Typography sx={{fontSize: 18}} color="white" gutterBottom>
                            {title.ready}
                        </Typography>
                    </Text>
                    <Watch>
                        <StyledTextField
                            placeholder={"Адрес электронной почты"}
                            sx={{background: 'white', borderRadius: "4px", width: "500px"}}
                        />
                        <StyledButton
                            endIcon={<ArrowRightAltOutlined/>}
                            size="medium"
                            variant="contained">
                            {title.goWatch}
                        </StyledButton>
                    </Watch>
                </Box>
            </Container>
        </>
    );
};

export default Info;
