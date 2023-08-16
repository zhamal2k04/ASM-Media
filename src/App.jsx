import React from 'react';
import {Routes, Route} from "react-router-dom"
import MyLayout from './Layouts/MyLayout/MyLayout';
import HomePage from './components/HomePage/container/HomePage';
import Contacts from './components/Contacts/container/Contacts';
import AboutPage from './components/About/container/AboutPage';
import PortfolioPage from './components/Portfolio/container/PortfolioPage';
import ZortvAds from './components/CardsAds/ZortvAds/ZortvAds';
import SevmliAds from './components/CardsAds/SevimliAds/SevmliAds';
import My5Ads from './components/CardsAds/My5Ads/My5Ads';
import OutDoorAds from './components/CardsAds/OutdoorAds/OutDoorAds';
import BusAds from './components/CardsAds/BusAds/BusAds';
import LedAds from './components/CardsAds/LedAds/LedAds';
import BannerAds from './components/CardsAds/BannerAds/BannerAds';
import RadioAds from './components/CardsAds/RadioAds/RadioAds';
import CinemaAds from './components/CardsAds/CinemaAds/CinemaAds';
import Banner_Ads from "./components/Portfolio/CardsWithAds/Banner-Ads/Banner_Ads"
import VideoAds from './components/Portfolio/CardsWithAds/Video-Ads/Video_Ads';
import Led_Ads from './components/Portfolio/CardsWithAds/Led-Ads/LedAds';
import Bus_Ads from './components/Portfolio/CardsWithAds/Bus-Ads/BusAds';
function App() {
  return (
    <div>
      <MyLayout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/about-us' element={<AboutPage/>}/>
          <Route path='/portfolio' element={<PortfolioPage/>}/>
          <Route path='/zortv' element={<ZortvAds/>}/>
          <Route path='/sevimlitv' element={<SevmliAds/>}/>
          <Route path='/my5' element={<My5Ads/>}/>
          <Route path='/outdoor-ads' element={<OutDoorAds/>}/>
          <Route path='/bus-ads' element={<BusAds/>}/>
          <Route path='/led-ads' element={<LedAds/>}/>
          <Route path='/banner-ads' element={<BannerAds/>}/>
          <Route path='/radio-ads' element={<RadioAds/>}/>
          <Route path='/cinema-ads' element={<CinemaAds/>}/>
          <Route path='/ads-banner' element={<Banner_Ads/>}/>
          <Route path='/ads-video' element={<VideoAds/>}/>
          <Route path='/ads-led' element={<Led_Ads/>}/>
          <Route path='/ads-bus' element={<Bus_Ads/>}/>
          <Route path="*" element={<h1 style={{color:'blue'}}>404 Forbidden Not Found Page</h1>} />
        </Routes>
      </MyLayout>
    </div>
  );
}

export default App;
