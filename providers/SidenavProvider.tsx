import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";
import Sidenav from "../components/Sidenav";

export interface ISidenavContext {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const SidenavContext = createContext<ISidenavContext>({
	open: false,
	setOpen: () => {},
});

const SidenavProvider = ({ children }: PropsWithChildren) => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "auto";
	}, [open]);
	return (
		<SidenavContext.Provider value={{ open, setOpen }}>
			<div
				style={{
					backgroundColor: "#ffffff",
					width: "100%",
					minHeight: "100%",
					position: "absolute",
					transition: "ease-in-out 0.15s left",
					left: open ? "-240px" : "0vw",
					boxShadow: "0 0 -5px 10px rgba(0,0,0, 0.5)",
					overflow: open ? "hidden" : "auto",
				}}
			>
				{children}
			</div>
			<Sidenav />
		</SidenavContext.Provider>
	);
};

export const useSidenav = () => useContext(SidenavContext);

export default SidenavProvider;
