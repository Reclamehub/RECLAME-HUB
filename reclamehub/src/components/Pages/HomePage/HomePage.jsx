import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { HomeService } from "./HomeService";
import { HomePageTop } from "./HomePageTop";
import { HomeClientNumber } from "../HomeClientNumber/HomeClientNumber";
import { HomeAbout } from "./HomeAbout";
import { Help } from "./Help";
import { Brand } from "./Brand";
import { HomeClients } from "./HomeClients";

export const HomePage=()=>{
    const { colorMode, toggleColorMode } = useColorMode();


    return(<Box>
        
        <HomePageTop />
        <HomeAbout />
        {/* <HomeClientNumber /> */}
        <HomeService />
        <Help />
        <Brand />
        <HomeClients />
    </Box>)
}