import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface IAuthenticationContext {
    token: string;
    setToken: (prevState: string) => void;
};

const AuthenticationContext = createContext<IAuthenticationContext>({
    token: '',
    setToken: () => {},
});

export const AuthenticationProvider = (
    props: PropsWithChildren<IAuthenticationContext>
) => {
    const [token, setToken] = useState<string>('');

    return (
        <AuthenticationContext.Provider value={{token, setToken}}>
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export const useAuthenticationContext = () => useContext(AuthenticationContext);