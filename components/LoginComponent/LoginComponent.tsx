import styles from "./LoginComponent.module.scss";
import { Button, Input } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useUser } from "../../providers/UserProvider";
import { getLogin } from "../../utils/lib/receipts";
import { useAuthenticationContext } from "../../providers/AuthenticationProvider";

interface ILoginComponentProps {
  classname?: string;
}
const LoginComponent = ({ classname = "" }: ILoginComponentProps) => {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const { user, setUser } = useUser();
  const { setLoggedIn } = useAuthenticationContext();

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };

  const handlePwdChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.currentTarget.value);
  };

  const handleLogin = async () => {
    getLogin({ email, password: pwd }).then((res) => {
      setUser!({
        ...user,
        email: res.data.email,
      });
      setLoggedIn(res.data.token)
    });
  };

  return (
    <>
      <Input
        className={styles.loginUsername}
        placeholder="Email"
        size="lg"
        type="text"
        onChange={handleEmailChange}
        value={email}
      />

      <Input
        className={styles.loginPwd}
        placeholder="Password"
        size="lg"
        type="password"
        onChange={handlePwdChange}
        value={pwd}
      />

      <Button className={styles.loginBtn} w="100%" onClick={handleLogin}>
        {"Sign In"}
      </Button>
    </>
  );
};
export default LoginComponent;
