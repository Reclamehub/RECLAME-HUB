import { Box, useColorModeValue } from "@chakra-ui/react";

export const Footer=()=>{


    return(<Box bg={useColorModeValue('red.100', 'blue.900')}>
        <h1>footer</h1>
    </Box>)
}