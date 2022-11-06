import { server } from "./server";

const getLogin = async() => server.post('auth/login', {email, password})};

const getReceipts = async() => server.get('receipt');