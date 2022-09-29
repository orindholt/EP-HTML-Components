/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html", "./js/**/*"],
	theme: {
		extend: {
			colors: {
				black: "#1a2433",
				darkBlue: "#546583",
				lightBlue: "#eaeff7",
				red: "#f82858",
				sunset: "#FF5858",
				purpleBright: "#FF0080",
				purple: "#fae4fe",
				cyan: "#a8ebe9",
				blue: "#3585DF",
				blueBright: "#0060e9",
				blueDark: "#0b119b",
				blueDarker: "#0e1934",
				teal: "#80bad0",
				white: "#f9f9f9",
				orange: "#FFA626",
				yellow: "#ffd45b",
				green: "#259c63",
				greenMedium: "#16B77B",
				greenBright: "#0fd792",
				lightGray: "#f1f5fa",
				gray: "#eeeeee",
				mediumGray: " #D5D7DB",
				darkGray: "#999999",
				darkerGray: "#3D4654",
			},
			fontFamily: {
				sofia: "'sofia-pro', 'Montserrat', sans-serif",
				montserrat: "'Montserrat', 'sofia-pro', sans-serif",
			},
			borderRadius: {
				base: "0.3rem",
			},
			borderWidth: {
				3: "3px",
			},
			screens: {
				"2xl-max": { max: "1535px" },
				"xl-max": { max: "1279px" },
				"lg-max": { max: "1023px" },
				"md-max": { max: "767px" },
				"sm-max": { max: "639px" },
			},
			boxShadow: {
				base: "0px 4px 20px rgb(0 0 0 / 8%)",
			},
			fontWeight: {
				inherit: "inherit",
			},
			animation: {
				fadeIn: "fadeIn 1s ease forwards",
				fadeInShort: "fadeIn 0.5s ease forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			height: {
				unset: "unset",
			},
			width: {
				unset: "unset",
			},
			content: {
				empty: "''",
			},
			spacing: {
				13: "3.25rem",
			},
			screens: {
				"sm-max": { max: "640px" },
				"md-max": { max: "768px" },
				"lg-max": { max: "1024px" },
				"xl-max": { max: "1280px" },
				"2xl-max": { max: "1536px" },
			},
			flex: {
				2: "2 2 0%",
				3: "3 3 0%",
				4: "4 4 0%",
				5: "5 5 0%",
				6: "6 6 0%",
			},
		},
	},
	plugins: [],
};
