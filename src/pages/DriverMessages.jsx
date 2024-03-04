import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const DriverMessages = () => {
  return (
    <VStack spacing={4} p={8}>
      <Box p={4} borderWidth="1px" borderRadius="md" width="full" shadow="md">
        <Text>The bus is running late due to unexpected traffic. We apologize for the inconvenience.</Text>
      </Box>
    </VStack>
  );
};

export default DriverMessages;
