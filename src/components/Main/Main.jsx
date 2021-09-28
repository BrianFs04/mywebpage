import React from 'react';
import AboutMeSection from './AboutMe/AboutMeSection';
import SkillsSection from './AboutMe/Skills/SkillsSection';
import PortfolioSection from './Portfolio/PortfolioSection';
import ResumeSection from './Resume/ResumeSection';
import ContactSection from './Contact/ContactSection';

const Main = () => {
	return (
		<main id='main'>
			<AboutMeSection />
			<SkillsSection />
			<PortfolioSection />
			<ResumeSection />
			<ContactSection />
		</main>
	);
};

export default Main;
