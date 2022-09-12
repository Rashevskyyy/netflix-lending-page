import React from 'react';
import {
    MediaContainer,
    TextContainer,
    StyledContainer,
    Image,
    CardDownload,
    Media,
    ImageBox,
    TextBox,
    TextCard,
    TextCardDownload,
    GifBox
} from './InfoDownloadStyle';
import mobile from "../../images/mobile.jpg"
import film from "../../images/boxshot.png"
import {TextRoot, TextSecondary} from '../indexStyle';
import {useTranslation} from 'react-i18next';

const InfoDownload = () => {
    const { t } = useTranslation('', { keyPrefix: 'infoDownload'})

    return (
        <StyledContainer disableGutters={true} maxWidth={false}>
            <MediaContainer>
                <Media>
                    <Image src={mobile} alt="mobile" />
                    <CardDownload>
                        <ImageBox src={film} alt="film" />
                        <TextBox>
                            <TextCard>{t("textCard")}</TextCard>
                            <TextCardDownload>{t("textCardDownload")}</TextCardDownload>
                        </TextBox>
                        <GifBox />
                    </CardDownload>
                </Media>
            </MediaContainer>
            <TextContainer>
                <TextRoot gutterBottom>
                    {t("root")}
                </TextRoot>
                <TextSecondary gutterBottom>
                    {t("secondary")}
                </TextSecondary>
            </TextContainer>
        </StyledContainer>
    );
};

export default InfoDownload;
