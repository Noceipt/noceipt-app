import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { FiChevronLeft, FiMoon, FiSun } from "react-icons/fi";
import { useSidenav } from "../../providers/SidenavProvider";
import styles from "./Sidenav.module.scss";

const Sidenav = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { open, setOpen } = useSidenav();
	return (
		<Box as="aside" bgColor="green" className={styles.Sidenav}>
			<IconButton
				aria-label="Close Sidenav"
				onClick={() => setOpen(!open)}
			>
				<FiChevronLeft size={20} />
			</IconButton>
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
