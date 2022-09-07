import Header from './components/Header/Header';
import Info from './components/Info/Info';
import {Root, RootTV, RootDownload} from './AppStyle';
import InfoTV from './components/InfoTV/InfoTV';
import InfoDownload from './components/InfoDownload/InfoDownload';

const App = () => {
    return (
        <>
            <Root>
                <Header/>
                <Info/>
            </Root>
            <RootTV>
                <InfoTV/>
            </RootTV>
            <RootDownload>
                <InfoDownload/>
            </RootDownload>
        </>

    );
}

export default App;
