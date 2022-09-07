import { styled } from '@mui/material';
import image from './images/backgroundFilms.jpg'

export const Root = styled('div')(() => ({
    backgroundImage: `radial-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ), url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    borderBottom: "8px solid #222",
}))

export const RootCard = styled('div')(() => ({
    backgroundColor: "#000",
    borderBottom: "8px solid #222",
}))

