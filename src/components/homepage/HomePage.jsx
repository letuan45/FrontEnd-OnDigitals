import React from 'react'
import IntroSection from './components/IntroSection/IntroSection'
import ServiceSection from './components/ServiceSection/ServiceSection';
import CaseStudySection from './components/CaseStudySection/CaseStudySection';

const HomePage = () => {
  return (
    <>
      <IntroSection />
      <ServiceSection/>
      <CaseStudySection/>
    </>
  );
}

export default HomePage