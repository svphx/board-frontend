import { FC } from "react";

import { Router } from "pages";
import { Box, ChakraProvider } from "@chakra-ui/react";

export const App: FC = () => {
  return (
    <ChakraProvider>
      <Box h="100dvh">
        <Router />
      </Box>
    </ChakraProvider>
  );
};
