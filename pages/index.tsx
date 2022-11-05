import { Box, Heading, useColorMode } from "@chakra-ui/react";
import { IconButton } from '@chakra-ui/button'
import Head from "next/head";

export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Head>
        <title>Noceipt</title>
        <meta name="description" content="NEVER PRINT A RECEIPT AGAIN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Box display="flex" height={'50vh'} flexDirection={'column'}>
        <Heading>{'Noceipt'}</Heading>
        <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
          { colorMode === 'light' ? <h1>{'Dark Mode'}</h1> : <h5>{'Light Mode'}</h5> }
        </IconButton>
      </Box>
        
        
      </main>

      <footer>{'Footer'}</footer>
    </div>
  );
}
