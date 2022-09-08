import Header from './components/Header/Header';
import Info from './components/Info/Info';
import {Root, RootCard} from './AppStyle';
import InfoTV from './components/InfoTV/InfoTV';
import InfoDownload from './components/InfoDownload/InfoDownload';
import InfoWatchOnDevice from './components/InfoWatchOnDevice/InfoWatchOnDevice';
import InfoKids from './components/InfoKids/InfoKids';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
            <Root>
                <Header />
                <Info />
            </Root>
            <RootCard>
                <InfoTV />
            </RootCard>
            <RootCard>
                <InfoDownload />
            </RootCard>
            <RootCard>
                <InfoWatchOnDevice />
            </RootCard>
            <RootCard>
                <InfoKids />
            </RootCard>
            <RootCard>
                <Faq />
            </RootCard>
            <RootCard>
                <Footer />
            </RootCard>
        </>

    );
}

export default App;
