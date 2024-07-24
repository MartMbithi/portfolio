// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					subTitle="Experienced Software Engineer with a robust background spanning over 6 years, specializing in Linux and Unix cloud architectures and administration. 
					My expertise extends to developing resilient solutions across diverse landscapes, using Java, PHP, Python and Javascript. 
					I have a strong foundation in industry-leading frameworks such as Spring Boot, Flask, Django, Laravel and NextJs.
					I excel in project management and agile methodologies, ensuring efficient team collaboration and adapting to evolving project requirements.
					As a versatile full-stack developer, I prioritize User Interface (UI) and User Experience (UX) best practices, 
					leveraging tools like Adobe XD and Figma for optimal design, also my expertise in version control ensures streamlined collaboration and effective code management throughout the development process. "
				/>
				
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/my_photo.jpg" alt="Martin Mbithi" />
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fat', 'ear-listen']}
							copy="In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a business owner / managing partner, husband, and father of two. Outside of work, I enjoy staying active through sports such as hockey and snowboarding. I am confident in my ability to bring passion and value to any project."
						/>
						<BadgesBlock
							title="Reasearch and planning"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="fingerprint"
							copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}

const methods = [
	{ key: 'planet-moon', name: 'User Research', type: 'fad' },
	{ key: 'qrcode', name: 'Digital Strategy', type: 'fad' },
	{ key: 'window', name: 'Design Systems', type: 'fad' },
	{ key: 'cubes', name: 'Product Strategy', type: 'far' },
	{ key: 'layer-plus', name: 'Brand Strategy', type: 'fad' },
	{ key: 'solar-system', name: 'Operations', type: 'fad' },
]