import React from 'react';
import {StyledContainer} from './FooterStyle';
import {List, ListItem, ListItemText, Typography} from '@mui/material';

const MyComponent = () => {

    const generate = (element) => {
        return [0, 1, 2, 3].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    return (
        <StyledContainer>
            <Typography sx={{color: "#737373"}}>
                Есть вопросы? Звоните по номеру 0800-509-417
            </Typography>
            <List
                sx={{color: '#737373'}}
                // dense={dense}
            >
                {generate(
                    <ListItem>
                        <ListItemText
                            primary="Single-line item"
                            // secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>,
                )}
            </List>
        </StyledContainer>
    );
};

export default MyComponent;
