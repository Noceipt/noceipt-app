import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface IAuthenticationContext {
  isLoggedIn?: string;
  setLoggedIn?: Dispatch<SetStateAction<string>>;
  error?: string;
  setError?: Dispatch<SetStateAction<string>>;
};

const AuthenticationContext = createContext<IAuthenticationContext>({
    isLoggedIn: '',
    setLoggedIn: () => {},
    error: '',
    setError: () => {},
});

export const AuthenticationProvider = (
    props: PropsWithChildren<IAuthenticationContext>
) => {
    const [isLoggedIn, setLoggedIn] = useState<string>('');
    const [error, setError] = useState<string>('');

    

    return (
        <AuthenticationContext.Provider value={{isLoggedIn, setLoggedIn, error, setError}}>
            {props.children}
        </AuthenticationContext.Provider>
    );
};

export const useAuthenticationContext = () => useContext(AuthenticationContext);