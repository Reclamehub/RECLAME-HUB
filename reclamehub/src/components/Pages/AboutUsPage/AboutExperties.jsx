import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export const AboutExperties=()=>{


return(<Box>
    <Box><Heading>OUR <span style={{color:"orangered"}}>EXPERTIES</span></Heading></Box>
    
    <br />
    <Box><Text fontWeight={"500"}>Our expertise is in determining what makes a firm unique, attractive, and lucrative</Text></Box>
<Box>
    <Flex>
        <Box>
        <Box><Image src="bannerimg.png" alt="gif" /></Box>
            <Box> <Text color="orangered" fontWeight={"bold"}> SOCIAL MEDIA MANAGMENT</Text></Box>
        </Box>
        <Box> 
        <Box><Image src="bannerimg.png" alt="gif" /></Box>
            <Box> <Text color="orangered" fontWeight={"bold"}>GRAPHIC DESIGNING</Text></Box>

        </Box>
        <Box>
        <Box><Image src="bannerimg.png" alt="gif" /></Box>
            <Box> <Text color="orangered" fontWeight={"bold"}> WEB DESIGN & DEVELOPMENT</Text></Box>

        </Box>
    </Flex>
</Box>
</Box>)

}