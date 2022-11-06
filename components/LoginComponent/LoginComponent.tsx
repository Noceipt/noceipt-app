import styles from './LoginComponent.module.scss';
import { Button, Input } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { useAuthenticationContext } from '../../providers/AuthenticationProvider';

interface ILoginComponentProps {
    classname?: string;
}
const LoginComponent = ({
    classname = '',
}: ILoginComponentProps) => {
    const [username, setUsername] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');
    const { setToken } = useAuthenticationContext();

    const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUsername(e.currentTarget.value);
    }

    const handlePwdChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPwd(e.currentTarget.value);
    }

    const handleLogin = async () => {
        fetch(
            '/vi/auth', 
            {
                method: 'POST',
                headers: new Headers({
                    'content-type': 'application/json'
                }),
                body: JSON.stringify({
                    'email': username,
                    'password': pwd,
                })
            }
        ).then((res) => res.json())
        .then((data) => {
            setToken(data.setToken);
            // todo: data.email, data.id
            // todo: set user
        })
    }
    
    return (
        <>
            <Input className={styles.loginUsername}
                placeholder='Username' 
                size='lg' 
                type='text' 
                onChange={handleUsernameChange}
                value={username}/>

            <Input className={styles.loginPwd}
                placeholder='Password' 
                size='lg' 
                type='password' 
                onChange={handlePwdChange}
                value={pwd}/>

            <Button className={styles.loginBtn} 
                w='100%'
                onClick={handleLogin}>
                {'Sign In'}
            </Button> 
        </>
    );
};
export default LoginComponent;