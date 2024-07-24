import About 		from '../components/sections/about/about'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			{/* <Looking /> */}
			<About />
			{/* <Career /> */}
		</>
	);
}