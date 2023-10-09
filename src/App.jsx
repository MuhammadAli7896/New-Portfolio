// Portfolio.js
import React from 'react';
import NavigationBar from './components/navbar.jsx';
import Profile from './components/profile.jsx';
import About from './components/about.jsx';
import Experience from './components/experience.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';

function Portfolio() {
	return (
		<>
			<NavigationBar />
			<Profile />
			<About />
			<Experience />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>

	);
}

export default Portfolio;
