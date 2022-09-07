import { Container, styled } from '@mui/material';

export const TextContainer = styled('div')(() => ({
   flex: '0 1 auto',
    height: "100%",
    padding: "0 3rem 0 0",
    width: '50%',
    zIndex: '3'
}))

export const StyledContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '1300px',
    padding: '30px 45px',
}))

export const Image = styled('img')(() => ({
    position: 'relative',
    zIndex: '2',
    height: 'auto',
    maxWidth: '100%',
    border: '0'
}))

export const MediaContainer = styled('div')(() => ({
    boxSizing: "border-box",
    display: 'flex',
    flex: "0 1 auto",
    height: "100%",
    width: "48%"
}))

export const Media = styled('div')(() => ({
    overflow: "hidden",
    position: 'relative',
}))

export const Video = styled('video')(() => ({
    height: "100%",
    width: "100%"
}))

export const BoxTv = styled('div')(() => ({
    position: 'absolute',
    top: "46%",
    left: "49%",
    transform: "translate(-50%, -50%)",
    maxHeight: "84%",
    maxWidth: "74%",
    height: "100%",
    width: "100%",
}))