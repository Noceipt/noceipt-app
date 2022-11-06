import Image from "next/image";
import logo from "./noceipt_logo.svg";
import logoWhite from "./noceipt_logo_white.svg";
import { FiAlignRight } from "react-icons/fi";
import styles from "./Navbar.module.scss";
import { useSidenav } from "../../providers/SidenavProvider";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Navbar = () => {
	const image = useColorModeValue(logo, logoWhite);
	const hamburgerColor = useColorModeValue("#000000", "#FFFFFF");
	const { open, setOpen } = useSidenav();
	return (
		<div className={styles.NavSideContainer}>
			<Box as="header" bgColor="green" className={styles.Navbar}>
				<Image src={image} alt="Noceipt Logo" />
				<button onClick={() => setOpen(!open)}>
					<FiAlignRight color={hamburgerColor} size={22} />
				</button>
			</Box>
		</div>
	);
};

export default Navbar;