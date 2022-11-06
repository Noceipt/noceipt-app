import {
	Box,
	Button,
	Text,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
	FiMoon,
	FiSun,
	FiSettings,
	FiBell,
	FiFileText,
	FiGrid,
} from "react-icons/fi";
import avatar from "../../assets/avatar.png";
import nLogo from "../../assets/noceipt_black.svg";
import nLogoWhite from "../../assets/noceipt.svg";
import { useUser } from "../../providers/UserProvider";
import styles from "./Sidenav.module.scss";
import { useSidenav } from "../../providers/SidenavProvider";

const Sidenav = () => {
	const navigate = useRouter();
	const { open, setOpen } = useSidenav();
	const { user } = useUser();
	const { colorMode, toggleColorMode } = useColorMode();
	const linkButtonBG = useColorModeValue("#C0EEA4", "#7AA361");
	const sideNavLogo = useColorModeValue(nLogo, nLogoWhite);
	const userLinks = [
		{
			label: "Dashboard",
			icon: <FiGrid />,
			path: "/dashboard",
		},
		{
			label: "Settings",
			icon: <FiSettings />,
			path: "/dashboard/settings",
		},
		{
			label: "Notifications",
			icon: <FiBell />,
			path: "/dashboard/settings/notifications",
		},
		{
			label: "Switch Theme",
			icon:
				colorMode === "light" ? (
					<FiMoon size={20} />
				) : (
					<FiSun size={20} />
				),
			onClick: toggleColorMode,
		},
		{
			label: "Privacy Policy",
			icon: <FiFileText />,
			path: "/dashboard/settings/privacy",
		},
	];
	return (
		<Box as="aside" bgColor="green" className={styles.Sidenav}>
			<Box
				width="100%"
				display="flex"
				justifyContent="center"
				marginTop={4}
				textAlign="center"
				flexDirection="column"
				alignItems="center"
			>
				<Image
					className={styles.Sidenav__avatar}
					width={100}
					height={100}
					src={avatar}
					alt="User Profile avatar"
				/>
				<Box
					padding={4}
					width="100%"
					bgColor={linkButtonBG}
					borderRadius={8}
				>
					<Text size="md" marginBottom={4}>
						{user?.email}
					</Text>
					{userLinks.map((link, index) => {
						return (
							<Box
								marginBottom="2"
								borderBottom="solid 1px"
								className={styles.Sidenav__link}
								key={index}
							>
								<Button
									paddingX={0}
									className={styles.Sidenav__link}
									borderRadius={0}
									backgroundColor="transparent"
									width="100%"
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									onClick={() => {
										link.onClick
											? link.onClick()
											: navigate.push(link.path);
										setOpen(!open);
									}}
									_hover={{
										backgroundColor:
											colorMode === "light"
												? "black.100"
												: "white.100",
									}}
									_focus={{
										backgroundColor: "transparent",
									}}
								>
									{link.icon}
									<Text>{link.label}</Text>
								</Button>
							</Box>
						);
					})}
				</Box>
				<Image width={50} src={sideNavLogo} alt="Noceipt Logo" />
				<Text fontSize="sm" marginTop="4">
					Noceipt Version 0.1.
					<br /> Copyright 2022. All Rights Reserved
				</Text>
			</Box>
		</Box>
	);
};

export default Sidenav;
