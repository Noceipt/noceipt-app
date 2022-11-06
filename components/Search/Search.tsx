import styles from "./Search.module.scss";
import { Box, Button, Input } from "@chakra-ui/react";
import { FormEvent, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";
import { useReceiptsContext } from "../../providers/ReceiptsProvider";

interface ISearchProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const Search = ({
  isActive,
  setIsActive,
}: ISearchProps) => {
  const { filterReceiptsCallback } = useReceiptsContext();
  const [searchInput, setSearchInput] = useState<string>("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.currentTarget.value);
  };

  const toggleInput = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  useCallback(() => {
    filterReceiptsCallback && filterReceiptsCallback(searchInput);
  }, [searchInput]);

  return (
    <Box
      className={styles.searchContainer}
      display={"flex"}
      justifyContent={"flex-end"}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Input
              placeholder="Search"
              size="md"
              type="text"
              onChange={handleChange}
              value={searchInput}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isActive ? (
          <Button className={styles.searchBtn} onClick={toggleInput}>
            <FiSearch size={22} />
          </Button>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Button
                className={styles.searchBtn}
                onClick={() => {
                  setSearchInput("");
                  setIsActive(false);
                }}
              >
                <FiX size={22} />
              </Button>
            </motion.div>
            <Button className={styles.searchBtn} onClick={toggleInput}>
              <FiSearch size={22} />
            </Button>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
};
export default Search;
