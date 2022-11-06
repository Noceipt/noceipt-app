import styles from './Search.module.scss';
import { Box, Button, Input } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiSearch, FiX } from "react-icons/fi";

interface ISearchProps {
    classname?: string;
    callback?: () => void;
}
const Search = ({
    classname = '',
    callback = () => {},
}: ISearchProps) => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.currentTarget.value);
    }

    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsActive(!isActive);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        callback();
    }

    return (
        <Box className={styles.searchContainer} display={'flex'} justifyContent={'flex-end'}>
            <AnimatePresence>
                {isActive && (
                    <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: '100%', opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ duration: 0.8 }}>
                        <Input placeholder='Search' 
                            size='md' 
                            type='search' 
                            onChange={handleChange} 
                            value={searchInput}/>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {!isActive ? (
                    <Button className={styles.searchBtn} onClick={handleClick}>
                    <FiSearch size={22}/>
                </Button>
                ) : (
                    <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
                        <Button className={styles.searchBtn} onClick={handleClick}>
                            <FiX  size={22}/>
                        </Button>
                    </motion.div>
                    <Button className={styles.searchBtn} onClick={handleSubmit}>
                        <FiSearch size={22} />
                    </Button>
                </>
                )}
            </AnimatePresence>
        </Box>
    );
};
export default Search;