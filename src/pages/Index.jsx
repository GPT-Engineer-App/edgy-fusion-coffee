import { Box, Button, ChakraProvider, Flex, Grid, Heading, Image, Link, Text, theme } from "@chakra-ui/react";
import { FaBicycle, FaCoffee, FaInstagram, FaTwitter, FaFacebookF, FaEnvelope } from "react-icons/fa";

// Custom theme to extend Chakra's default theme with our color scheme and typography
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    electricBlue: "#0077FF",
    neonGreen: "#39FF14",
    hotPink: "#FF1493",
    matteBlack: "#121212",
  },
  fonts: {
    heading: "'Permanent Marker', cursive",
    body: "'Roboto', sans-serif",
  },
};

const Index = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Box bg="matteBlack" color="white" minH="100vh">
        <Flex as="header" justifyContent="space-between" p={4} align="center">
          <Heading as="h1" fontSize="xl" color="electricBlue">
            Biker's Brew
          </Heading>
          <Flex as="nav">
            <Link px={3} py={1} href="#" color="neonGreen">
              Home
            </Link>
            <Link px={3} py={1} href="#" color="neonGreen">
              About
            </Link>
            <Link px={3} py={1} href="#" color="neonGreen">
              Menu
            </Link>
            <Link px={3} py={1} href="#" color="neonGreen">
              Events
            </Link>
          </Flex>
        </Flex>

        <Flex as="section" direction="column" align="center" justify="center" minH="70vh" bg="matteBlack" position="relative">
          <Image src="https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiaWtlciUyMGNvZmZlZXxlbnwwfHx8fDE3MTAzMjAwNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" objectFit="cover" w="full" h="full" position="absolute" top="0" left="0" zIndex="-1" opacity="0.5" />
          <Heading as="h2" fontSize="5xl" bgClip="text" bgGradient="linear(to-l, electricBlue, neonGreen)" py={2}>
            Where Coffee Meets The Road
          </Heading>
          <Button mt={6} bg="hotPink" _hover={{ bg: "neonGreen" }}>
            Dive In <FaBicycle />
          </Button>
        </Flex>

        <Grid as="section" templateColumns="repeat(2, 1fr)" gap={6} p={6}>
          <Box>
            <Heading as="h3" fontSize="2xl" color="electricBlue" mb={4}>
              Our Story
            </Heading>
            <Text fontSize="md" color="white">
              Biker's Brew is a sanctuary for those who speak the languages of both coffee and the open road...
            </Text>
          </Box>
          <Box bg="hotPink" p={4} borderRadius="md">
            <Text color="matteBlack">Immerse yourself in the world of coffee-infused rides and high-octane thrills. Watch our story unfold.</Text>
          </Box>
        </Grid>

        <Grid as="section" templateColumns="repeat(3, 1fr)" gap={6} p={6}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1601390483714-955fd3066695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMHNob3R8ZW58MHx8fHwxNzEwMzIwMDU2fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Heading as="h4" fontSize="xl" color="neonGreen" my={2}>
              Espresso Accelerator
            </Heading>
            <Text fontSize="sm" color="white">
              Shot of espresso to kickstart your ride.
            </Text>
          </Box>
          {/* ... similar layout for other menu items ... */}
        </Grid>

        <Box as="section" p={6} bg="hotPink">
          <Heading as="h3" fontSize="2xl" color="matteBlack" mb={4}>
            Upcoming Events
          </Heading>
          {/* Carousel for events would go here */}
        </Box>

        <Flex as="footer" direction="column" align="center" justify="center" p={6} bg="matteBlack">
          <Flex mb={4}>
            <Link href="#" mx={2}>
              <FaInstagram color="#39FF14" />
            </Link>
            <Link href="#" mx={2}>
              <FaTwitter color="#39FF14" />
            </Link>
            <Link href="#" mx={2}>
              <FaFacebookF color="#39FF14" />
            </Link>
          </Flex>
          <Flex align="center">
            <FaEnvelope color="#FF1493" />
            <Text ml={2} color="neonGreen">
              Subscribe to our newsletter
            </Text>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
