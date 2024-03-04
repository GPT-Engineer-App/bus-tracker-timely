import React, { useState } from "react";
import { Box, Flex, Text, Input, Button, Heading, VStack, HStack, Stack, IconButton, Image, useToast } from "@chakra-ui/react";
import { FaBus, FaSearch, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [search, setSearch] = useState("");

  // Dummy data for bus schedules, would typically be fetched from an API.
  const busSchedules = [
    { id: 1, name: "Route 22", arrival: "10:15 AM", departure: "10:30 AM", duration: "15 mins", destination: "Downtown" },
    { id: 2, name: "Route 5", arrival: "11:00 AM", departure: "11:20 AM", duration: "20 mins", destination: "Uptown" },
    { id: 3, name: "Route 10", arrival: "09:30 AM", departure: "09:50 AM", duration: "20 mins", destination: "Eastside" },
    { id: 4, name: "Route 11", arrival: "09:45 AM", departure: "10:05 AM", duration: "20 mins", destination: "Westside" },
    { id: 5, name: "Route 12", arrival: "10:00 AM", departure: "10:20 AM", duration: "20 mins", destination: "Southside" },
    { id: 6, name: "Route 13", arrival: "10:15 AM", departure: "10:35 AM", duration: "20 mins", destination: "Northside" },

    { id: 7, name: "Route 14", arrival: "TBD", departure: "TBD", duration: "TBD", destination: "TBD" },
  ];

  // Search handler for buses (dummy implementation)
  const handleSearch = () => {
    toast({
      title: "Search Feature",
      description: "This is a demo. In a real app, this would trigger a search for the bus schedules.",
      status: "info",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Flex direction="column" align="center" mb={8}>
        <Heading mb={4}>City Bus Tracker</Heading>
        <Image src="https://images.unsplash.com/photo-1546604306-52e655c109b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnVzfGVufDB8fHx8MTcwOTUzNzIzMHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={4} />
        <Text fontSize="lg" mb={4}>
          Find and track your city buses in real time.
        </Text>
        <HStack>
          <Input placeholder="Search for bus routes, stops..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <IconButton icon={<FaSearch />} onClick={handleSearch} aria-label="Search bus schedules" />
        </HStack>
      </Flex>

      <VStack spacing={4}>
        {busSchedules.map((bus) => (
          <Box key={bus.id} p={4} borderWidth="1px" borderRadius="md" width="full" shadow="md">
            <HStack justifyContent="space-between">
              <HStack>
                <Box color="blue.500" p={2} borderRadius="md">
                  <FaBus />
                </Box>
                <VStack align="start">
                  <Text fontWeight="bold">{bus.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {bus.destination}
                  </Text>
                </VStack>
              </HStack>
              <Stack>
                <HStack>
                  <FaClock />
                  <Text>{bus.arrival}</Text>
                </HStack>
                <HStack>
                  <FaMapMarkerAlt />
                  <Text>{bus.departure}</Text>
                </HStack>
              </Stack>
              <Text fontWeight="bold">{bus.duration}</Text>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
