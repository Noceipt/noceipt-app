import { useContext, createContext, PropsWithChildren, useState, Dispatch, SetStateAction } from "react";

export interface IUser {
	email?: string;
	avatar?: string;
	theme?: "light" | "dark";
}

interface IUserContext {
	user?: IUser;
	setUser?: Dispatch<SetStateAction<IUser>>;
}

const DefaultUser: IUser = {
	email: "johndoe@ditchthereceipts.com",
	avatar: "",
	theme: "dark",
};

const UserContext = createContext<IUserContext>({
	user: DefaultUser,
	setUser: () => {}
});

const UserProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<IUser>(DefaultUser);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
