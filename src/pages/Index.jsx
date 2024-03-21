import React from "react";
import { Box, Heading, Text, Image, Button, Stack, Grid, GridItem, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" p={8} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Pro Shot Photography
        </Heading>
        <Text fontSize="xl" mb={8}>
          Capturing life's precious moments
        </Text>
        <Button colorScheme="blue" size="lg">
          Book a Session
        </Button>
      </Box>

      {/* Services Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Our Services
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTEwNTUzNjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Photography" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Photography
            </Heading>
            <Text>We offer professional photography services for weddings, events, portraits, and more.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDB8fHx8MTcxMTA1NTM2OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Graphic Design" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Graphic Design
            </Heading>
            <Text>Our talented graphic designers can create stunning visuals for your brand.</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmd8ZW58MHx8fHwxNzExMDU1MzY4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Photo and Video Editing" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Photo and Video Editing
            </Heading>
            <Text>We provide professional photo and video editing services to enhance your media.</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* Portfolio Section */}
      <Box bg="gray.100" p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Portfolio
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <Image src="https://images.unsplash.com/flagged/photo-1552981941-424aac2b4311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzExMDU1MzY4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Wedding Photography" />
          <Image src="https://images.unsplash.com/photo-1591833383187-a750e84a494c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxMTA1NTM2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Event Photography" />
          <Image src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxMDk4MDk1Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Portrait Photography" />
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Contact Us
        </Heading>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="blue" size="lg">
          Send Message
        </Button>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" p={8}>
        <Stack direction="row" spacing={4} mb={4}>
          <FaInstagram size={24} />
          <FaFacebook size={24} />
          <FaTwitter size={24} />
        </Stack>
        <Text>&copy; 2023 Pro Shot Photography. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
