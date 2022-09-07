import { Container, styled } from '@mui/material';


export const TextMain = styled('div')(() => ({
    flex: '0 1 auto',
    height: "100%",
    padding: "0 0 0 0",
    width: '50%',
    zIndex: '3'
}))

export const TextCard = styled(TextMain)(() => ({
    padding: "0",
    width: '100%',
    fontWeight: 600,
    fontSize: "1rem"
}))

export const TextCardDownload = styled(TextMain)(() => ({
    padding: "0",
    color: '#0071eb',
    width: '100%',
}))

export const StyledContainer = styled(Container)(() => ({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '1300px',
    padding: '30px 45px',
}))

export const CardDownload = styled('div')(() => ({
    alignItems: 'center',
    background: '#000',
    border: '2px solid grey',
    borderRadius: '0.75em',
    bottom: '8%',
    boxShadow: '0 0 2em 0 #000',
    display: 'flex',
    left: '50%',
    margin: '0 auto',
    minWidth: '15em',
    padding: '0.35em 0.75em',
    position: 'absolute',
    transform: "translateX(-50%)",
    width: '55%',
    zIndex: 2
}))

export const Image = styled('img')(() => ({
    position: 'relative',
    zIndex: '2',
    height: 'auto',
    maxWidth: '100%',
    border: '0',
    marginRight: "10px",
}))

export const ImageBox = styled(Image)(() => ({
    height: '5em',
}))

export const GifBox = styled('div')(() => ({
    background: "url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif) 50% no-repeat",
    backgroundSize: '100%',
    display: 'block',
    flexGrow: '0',
    flexShrink: '0',
    height: '3rem',
    outline: '2px solid #000',
    width: '3em'
}))

export const ContainerMedia = styled('div')(() => ({
    boxSizing: "border-box",
    display: 'flex',
    flex: "0 1 auto",
    height: "100%",
    width: "48%"
}))

export const Media = styled('div')(() => ({
    width: '100%',
    minHeight: '100px',
    overflow: 'hidden',
    position: 'relative'
}))


export const TextBox = styled('div')(() => ({
    flexGrow: '1',
    flexShrink: '1',
    margin: '0.3em 0',
    color: 'white'
}))
