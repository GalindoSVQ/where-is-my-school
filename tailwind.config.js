const defaultConfig = require('tailwindcss/defaultConfig')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultConfig.theme.fontFamily.sans]
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: []
}
module.exports = config
