import React from 'react'
import IntroSection from './components/IntroSection/IntroSection'
import ServiceSection from './components/ServiceSection/ServiceSection';
import CaseStudySection from './components/CaseStudySection/CaseStudySection';
import PartnerSection from './components/PartnerSection/PartnerSection';
import NewAndInsightsSection from './components/NewAndInsightsSection/NewAndInsightsSection';
import ContactSection from './components/ContactSection/ContactSection';

const HomePage = (allPosts) => {
  return (
    <>
      <IntroSection />
      <ServiceSection/>
      <PartnerSection/>
      <CaseStudySection/>
      <NewAndInsightsSection data={allPosts}/>
      <ContactSection/>
    </>
  );
}
export default HomePage