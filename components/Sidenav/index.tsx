import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import styles from "./Sidenav.module.scss";

const Sidenav = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box as="aside" bgColor="green" className={styles.Sidenav}>
			<IconButton aria-label="Toggle Mode" onClick={toggleColorMode}>
				{colorMode === "light" ? (
					<FiMoon size={20} />
				) : (
					<FiSun size={20} />
				)}
			</IconButton>
		</Box>
	);
};

export default Sidenav;
