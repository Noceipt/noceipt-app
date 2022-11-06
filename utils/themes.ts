import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: true,
};

const semanticTokens = {
	colors: {
		green: {
			default: "rgb(192, 238, 164)",
			_dark: "rgb(122, 163, 97)",
		},
		green_accent: {
			default: "rgb(173, 229, 139)",
			_dark: "white",
		},
		subtext: {
			default: "rgb(153, 153, 153)",
		},
	},
	fontSizes: {
		subtext: "12px",
		listItem: "18px",
	},
	font: {
		size: {
			sm: "12px",
		},
	},
};

const styles = {
	global: () => ({
		body: {
			bg: "green",
		},
	}),
};

const theme = extendTheme({ config, semanticTokens, styles });

export default theme;
