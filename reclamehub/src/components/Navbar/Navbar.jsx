import { Box, Container, Flex, Image, Text,Button, useDisclosure,useColorModeValue,useColorMode, } from "@chakra-ui/react"
import "./Navbar.css"
import DarkMode from "./DarkMode";

export const Navbar=()=>{
  const { colorMode, toggleColorMode } = useColorMode();
    

    return(<div>
         <Container className="nav-container" maxW='100%'  bg={useColorModeValue('white', 'black')}>
<Flex className="nav-row">
    <Box className="nav-icon-box"> <Image bgColor={"white"} borderRadius={"60px"} border="1px solid black" color={"white"} className="nav-icon-img" src="navicon.png" /></Box>
    <Box className="nav-col-two-container">
        <Flex className="nav-col-two">
            <Box>
              </Box>
            <Box><Text>About</Text> </Box>
            <Box><Text>Services</Text></Box>
            <Box> <Text>Explore</Text></Box>
            <Box> <Text>Contact</Text></Box>
            
        </Flex>
    </Box>
    <Box className="color-mode-change"><DarkMode /></Box>
</Flex>
  </Container>
    </div>)
}