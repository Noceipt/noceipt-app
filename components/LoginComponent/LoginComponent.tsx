import styles from './LoginComponent.module.scss';
import { Button, Input } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { useAuthenticationContext } from '../../providers/AuthenticationProvider';
import { useUser } from '../../providers/UserProvider';
import { server } from '../../utils/lib/server';

interface ILoginComponentProps {
    classname?: string;
}
const LoginComponent = ({
    classname = '',
}: ILoginComponentProps) => {
    const [email, setEmail] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');
    const { setToken } = useAuthenticationContext();
    const { user, setUser } = useUser();

    const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEmail(e.currentTarget.value);
    }

    const handlePwdChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPwd(e.currentTarget.value);
    }

    const handleLogin = async () => {
        server.post('auth/login', {
            email,
            password: pwd,
        }).then((res) => {
            console.log(res.data);
            setToken!(res.data.setToken);
            setUser!({
                ...user,
                email: res.data.email
            })
        })
    }
    
    return (
        <>
            <Input className={styles.loginUsername}
                placeholder='Email' 
                size='lg' 
                type='text' 
                onChange={handleEmailChange}
                value={email}/>

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

function axios(arg0: string, arg1: { method: string; headers: Headers; body: string; }) {
    throw new Error('Function not implemented.');
}
