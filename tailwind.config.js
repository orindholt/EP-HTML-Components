/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./casino.html"],
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
				greenBright: "#0fd792",
				lightGray: "#f1f5fa",
				gray: "#eeeeee",
				mediumGray: " #D5D7DB",
				darkGray: "#999999",
			},
			fontFamily: {
				montserrat: "'Montserrat', sans-serif",
			},
			borderRadius: {
				base: "0.3rem",
			},
			borderWidth: {
				3: "3px",
			},
			boxShadow: {
				base: "0px 4px 20px rgb(0 0 0 / 8%)",
			},
		},
	},
	plugins: [],
};
