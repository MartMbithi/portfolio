// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';


export default function About() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					subTitle="I am an experienced Software Engineer with over 6 years specializing in Linux  and Unix cloud
					architecture and administration. My skills encompass developing resilient solutions in various programming
					languages including PHP, Java, Python, JavaScript, Ruby, C, and Bash. I am proficient in frameworks such as
					Laravel, Spring Boot, Flask, Django and NextJs. I have a strong foundation in managing
					cloud infrastructure, implementing scalable and secure solutions, and optimizing cloud performance. 
					Additionally, I excel in CMS platforms like WordPress, Drupal, and Joomla, and have expertise in both SQL 
					(MySQL, Microsoft SQL Server) and NoSQL (MongoDB, PostgreSQL, Redis) databases. As a versatile full-stack developer, 
					I am also skilled in UI/UX design tools like Adobe XD and Figma, and have strong version control capabilities. 
					I am a dedicated team player with excellent communication skills and a passion for learning new technologies."
				/>
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