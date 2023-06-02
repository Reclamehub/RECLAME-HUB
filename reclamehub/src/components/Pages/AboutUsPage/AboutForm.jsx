import { PhoneIcon } from "@chakra-ui/icons"
import { Box, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

export const AboutForm=()=>{


    return(<Box>
        <Box><Heading color="orangered">TALK TO OUR EXPERTS</Heading></Box>
        <br />
        <Box fontWeight={"500"}>We are available for a friendly chat to discuss your business needs,no obligation</Box>
<Box>
    <form>

    <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <PhoneIcon color='gray.300' />
    </InputLeftElement>
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>

    </form>
</Box>


    </Box>)
}

