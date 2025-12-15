import Background from "../components/common/Background.tsx";
import {useTranslation} from "react-i18next";

export default function LandingPage() {

    const {t} = useTranslation();

    return (<Background>
        <div id={"landing-page"} className={"h-screen w-screen flex justify-center items-center"}>
            <h1>{t('LandingPage.title')}</h1>
        </div>
    </Background>);
}