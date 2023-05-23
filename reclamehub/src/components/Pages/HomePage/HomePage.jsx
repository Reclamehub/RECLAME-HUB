import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react"

export const HomePage=()=>{
    const { colorMode, toggleColorMode } = useColorMode();


    return(<Box bg={useColorModeValue('red.100', 'blue.900')}>
        <h1>HomePage</h1>
    </Box>)
}