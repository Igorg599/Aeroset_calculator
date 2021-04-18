import React from 'react';
import Gamburger from '../gamburger/Gamburger';
import {useTranslation} from "react-i18next";
import { ArchedShape, RectangularShape, TrapezoidalShape, RoundShape } from '../shape';
import { AppWrapper, Forms, Header, HeaderMobile, MobilePanels, Tab } from "./styles";
import ArchedImg from '../../assets/icons/Arched.svg';
import RectangularImg from '../../assets/icons/Rectangular.svg';
import RoundImg from '../../assets/icons/Round.svg';
import TrapezoidalImg from '../../assets/icons/Trapezoidal.svg';

const App = () => {
  const {t} = useTranslation();

  const [activeTabs, setActiveTabs] = React.useState<number>(0);

  const imgTabs: string[] = [ArchedImg, RectangularImg, RoundImg, TrapezoidalImg];

  const setSizeScreen = () => {
    if (document.documentElement.clientWidth >= 767) {
      setActiveTabs(0);
    } else {
      setActiveTabs(1);
    }
  }

  React.useEffect(() => {
    setSizeScreen();
  }, [])

  return (
    <AppWrapper>
      <Header>
        <Gamburger/>
        <h1>{t('drift_cross_section_parameters')}</h1>
      </Header>
      <HeaderMobile>
        <Gamburger/>
        <h1>{t('drift_cross_section')}</h1>
      </HeaderMobile>
      <MobilePanels>
        {imgTabs.map((tab, index) => (
          <Tab key={index} onClick={() => setActiveTabs(index + 1)} className={activeTabs === index + 1 ? 'active' : ''}>
            <img alt="tab" src={tab}/>
          </Tab>
        ))}
      </MobilePanels>
      <Forms>
        <ArchedShape active={activeTabs}/>
        <RectangularShape active={activeTabs}/>
        <TrapezoidalShape active={activeTabs}/>
        <RoundShape active={activeTabs}/>
      </Forms>
    </AppWrapper>
  );
}

export default App;
