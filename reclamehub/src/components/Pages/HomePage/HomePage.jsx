import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { HomeService } from "./HomeService";
import { HomePageTop } from "./HomePageTop";

export const HomePage=()=>{
    const { colorMode, toggleColorMode } = useColorMode();


    return(<Box>
        
        <HomePageTop />
        <HomeService />
    </Box>)
}