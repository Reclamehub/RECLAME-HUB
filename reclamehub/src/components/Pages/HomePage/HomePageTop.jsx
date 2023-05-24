import {Flex, Button,Image,Box,Text } from "@chakra-ui/react"

import "./HomePageTop.css"

export const HomePageTop=()=>{


    return(<Box className="Home-top-container">
        <Text className="home-heading-one">TRADE WITH US ON</Text>
        <Text className="home-heading-two">UNLOCK NEW OPPORTUNITIES WITH DYNAMIC DIGITAL MARKETING STRATEGIES</Text>
<Flex className="home-btn-img">
    <Box className="home-top-btn-box" ><Button className="home-top-btn" bg="pink">Get Started</Button></Box>
    <Box className="home-top-img-box"><Image className="home-top-img"  src="imagegrp.png" /></Box>
</Flex>

    </Box>)
}