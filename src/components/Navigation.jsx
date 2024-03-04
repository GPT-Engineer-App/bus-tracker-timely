import React from "react";
import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <HStack spacing={4} mb={4}>
      <Button as={Link} to="/">
        Home
      </Button>
      <Button as={Link} to="/messages">
        Messages
      </Button>
    </HStack>
  );
};

export default Navigation;
