import React from 'react'
import IntroSection from './components/IntroSection/IntroSection'
import PartnerSection from './components/PartnerSection/PartnerSection';
import NewAndInsightsSection from './components/NewAndInsightsSection/NewAndInsightsSection';
import ContactSection from './components/ContactSection/ContactSection';

const HomePage = (allPosts) => {
  return (
    <>
      <IntroSection />
      <PartnerSection/>
      <NewAndInsightsSection data={allPosts}/>
      <ContactSection/>
    </>
  );
}
export default HomePage