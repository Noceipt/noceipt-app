import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface IAuthenticationContext {
    isLoggedIn: boolean;
    setLoggedIn: () => void;
    error: string;
};

const AuthenticationContext = createContext<IAuthenticationContext>({
    isLoggedIn: false,
    setLoggedIn: () => {},
    error: '',
});

export const AuthenticationProvider = (
    props: PropsWithChildren<IAuthenticationContext>
) => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    

    return (
        <AuthenticationContext.Provider value={{isLoggedIn, setLoggedIn, error, setError}}>
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export const useAuthenticationContext = () => useContext(AuthenticationContext);