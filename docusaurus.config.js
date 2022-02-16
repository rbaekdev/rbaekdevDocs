const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
	title: "Richard Baek",
	tagline: "Lead Developer",
	url: "https://rbaek.dev",
	baseUrl: "/teamdocs/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.png",
	organizationName: "rbaekdev",
	projectName: "rbaekdev",

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl: "https://github.com/rbaekdev",
				},
				blog: {
					showReadingTime: true,
					editUrl: "https://github.com/rbaekdev",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Richard Baek",
				logo: {
					alt: "Rbaek.dev",
					src: "img/my_logo.svg",
				},
				items: [
					{ to: "/blog", label: "Blog", position: "left" },
					{ to: "/code", label: "Examples", position: "left" },
					{
						type: "doc",
						docId: "index",
						position: "left",
						label: "Team Docs",
					},
					{
						href: "https://github.com/rbaekdev",
						label: "GitHub",
						position: "right",
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
