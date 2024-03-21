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

      {}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4}>
          What Our Clients Say
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <Box>
            <Text fontSize="xl" mb={4}>
              "Pro Shot Photography captured our wedding beautifully. They were professional, creative, and easy to work with. We couldn't be happier with the results!"
            </Text>
            <Text fontWeight="bold">- Sarah and Tom</Text>
          </Box>
          <Box>
            <Text fontSize="xl" mb={4}>
              "The team at Pro Shot designed an amazing logo and branding package for my business. They took the time to understand my vision and delivered exceptional work."
            </Text>
            <Text fontWeight="bold">- Michael, Business Owner</Text>
          </Box>
        </Grid>
      </Box>

      {}
      <Box bg="gray.100" p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Featured Work
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzExMDU1MzY5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fashion Photography" mb={4} />
            <Heading as="h3" size="lg">
              Fashion Photography
            </Heading>
            <Text>We collaborated with top fashion brands to create stunning campaign images.</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzExMDU1MzY5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Photography" mb={4} />
            <Heading as="h3" size="lg">
              Product Photography
            </Heading>
            <Text>Our product photography showcases items in the best light to drive sales.</Text>
          </Box>
        </Grid>
      </Box>

      {}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Portfolio
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <Image src="https://images.unsplash.com/flagged/photo-1552981941-424aac2b4311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzExMDU1MzY4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Wedding Photography" />
          <Image src="https://images.unsplash.com/photo-1591833383187-a750e84a494c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxMTA1NTM2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Event Photography" />
          <Image src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxMDk4MDk1Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Portrait Photography" />
        </Grid>
      </Box>

      {}
      <Box bg="gray.100" p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Our Services in Detail
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Photography
            </Heading>
            <Text mb={4}>Our experienced photographers capture the essence of your event, portrait session, or commercial project. We use high-end equipment and techniques to deliver images you'll treasure.</Text>
            <Button colorScheme="blue">Learn More</Button>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Graphic Design
            </Heading>
            <Text mb={4}>From logos and branding to marketing materials and social media graphics, our designers create visuals that make an impact. We work closely with you to understand your goals and bring your vision to life.</Text>
            <Button colorScheme="blue">Learn More</Button>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Photo and Video Editing
            </Heading>
            <Text mb={4}>Our skilled editors use the latest software to retouch photos, color grade videos, and add special effects. We can enhance your media and create a polished final product.</Text>
            <Button colorScheme="blue">Learn More</Button>
          </Box>
        </Grid>
      </Box>

      {}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Meet Our Team
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzExMDU1MzY5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Doe" mb={4} />
            <Heading as="h3" size="lg">
              John Doe
            </Heading>
            <Text>Lead Photographer</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwwfHx8fDE3MTEwNTUzNjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Jane Smith" mb={4} />
            <Heading as="h3" size="lg">
              Jane Smith
            </Heading>
            <Text>Senior Graphic Designer</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzbWlsaW5nfGVufDB8fHx8MTcxMTA1NTM2OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Mike Johnson" mb={4} />
            <Heading as="h3" size="lg">
              Mike Johnson
            </Heading>
            <Text>Video Editor</Text>
          </Box>
        </Grid>
      </Box>

      {}
      <Box bg="gray.100" p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Frequently Asked Questions
        </Heading>
        <Box mb={4}>
          <Heading as="h3" size="lg" mb={2}>
            How do I book a photography session?
          </Heading>
          <Text>Simply fill out our contact form or give us a call to discuss your project. We'll work with you to find a convenient date and location.</Text>
        </Box>
        <Box mb={4}>
          <Heading as="h3" size="lg" mb={2}>
            What is your turnaround time for editing?
          </Heading>
          <Text>For photography, we typically deliver edited images within 2 weeks. Video editing and graphic design turnaround times vary based on the project scope.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>
            Do you offer any discounts?
          </Heading>
          <Text>Yes, we offer a 10% discount for non-profit organizations and a 15% discount for booking multiple services. Contact us for details.</Text>
        </Box>
      </Box>

      {}
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

      {}
      <Box bg="gray.900" color="white" p={8}>
        <Stack direction="row" spacing={4} mb={4}>
          <FaInstagram size={24} />
          <FaFacebook size={24} />
          <FaTwitter size={24} />
        </Stack>
        <Text mb={4}>&copy; 2024 Pro Shot Photography. All rights reserved.</Text>
        <Button colorScheme="blue">Get a Quote</Button>
      </Box>
    </Box>
  );
};

export default Index;
