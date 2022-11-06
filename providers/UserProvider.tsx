import { useContext, createContext, PropsWithChildren, useState } from "react";

export interface IUser {
	email?: string;
	avatar?: string;
	theme?: "light" | "dark";
}

const DefaultUser: IUser = {
	email: "johndoe@ditchthereceipts.com",
	avatar: "",
	theme: "dark",
};

const UserContext = createContext<IUser>(DefaultUser);

const UserProvider = ({ children }: PropsWithChildren) => {
	const [user] = useState<IUser>(DefaultUser);
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
