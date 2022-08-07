module.exports = {
	stories: ['../common/components/**/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	typescript: {
		reactDocgen: false,
	},
	webpackFinal: async config => {
		const fileLoaderRule = config.module.rules.find(rule =>
			rule.test.test('.svg'),
		)
		fileLoaderRule.exclude = /\.svg$/
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack', 'url-loader'],
		})
		return config
	},
}
