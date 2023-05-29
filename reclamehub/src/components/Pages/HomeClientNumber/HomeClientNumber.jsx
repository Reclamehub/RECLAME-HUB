import { Box, Image, useColorModeValue } from "@chakra-ui/react"

export const HomeClientNumber=()=>{


    return(<Box bg={useColorModeValue('black', 'white')} color={useColorModeValue('red', 'blue')} >
<Image src="globe.png" />
    </Box>)
}