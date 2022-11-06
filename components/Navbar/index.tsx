import Image from "next/image";
import logo from "./noceipt_logo.svg";
import logoWhite from "./noceipt_logo_white.svg";
import { FiAlignRight, FiChevronRight } from "react-icons/fi";
import styles from "./Navbar.module.scss";
import { useSidenav } from "../../providers/SidenavProvider";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useAuthenticationContext } from "../../providers/AuthenticationProvider";

const Navbar = () => {
	const image = useColorModeValue(logo, logoWhite);
	const hamburgerColor = useColorModeValue("#000000", "#FFFFFF");
	const { open, setOpen } = useSidenav();
	const { isLoggedIn } = useAuthenticationContext();
	return (
		<div className={styles.NavSideContainer}>
			<Box as="header" bgColor="green" className={styles.Navbar}>
				<Link href="/">
					<Image src={image} alt="Noceipt Logo" />
				</Link>
				{isLoggedIn.length > 0 &&
				<button onClick={() => setOpen(!open)}>
					{open ? (
						<FiChevronRight size={22} />
					) : (
						<FiAlignRight color={hamburgerColor} size={22} />
					)}
				</button>
				}
			</Box>
		</div>
	);
};

export default Navbar;
