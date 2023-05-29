import {Box,Text,Image, useColorModeValue, Heading, Button} from "@chakra-ui/react"

import "./HomeService.css"

const serviceData=[
    {
    id:1,
    simg:"smm.png",
    heading:`SOCIAL MEDIA  MANAGEMENT`,
    desc:`Are you languishing in managing your social media? No need to look further, here we are the best Digital marketing agency in Noida.`

},
{
    id:2,
    simg:"cw.png",
    heading:`CONTENT  WRITER`,
    desc:`We will help you build content that is SEO-friendly and could maximize your online presence.`

},
{
    id:3,
    simg:"orm.png",
    heading:`ONLINE  REPUTATION  MANAGEMENT`,
    desc:`We will help you build content that is SEO-friendly and could maximize your online presence.`

},
{
    id:4,
    simg:"gd.png",
    heading:`GRAPHIC  DESIGNING`,
    desc:`our graphic design services can help. We think that excellent design extends beyond aesthetics.`

},
{
    id:5,
    simg:"wdd.png",
    heading:`WEB DESIGN AND DEVELOPMENT`,
    desc:`Are you ready to boost your online presence with a beautiful and effective website? Contact the best digital marketing agency`
},
{
    id:6,
    simg:"da.png",
    heading:`DIGITAL ADVERTISEMENT`,
    desc:`We'll help you manage the ever-changing digital world and remain ahead of the competition with our data-driven strategies and industry experience.`
},

]

export const HomeService=()=>{


    return (<Box p="30px">
        
        <Heading fontSize={"3vw"}>SERVICES <span style={{ color:"#F47721"}} >WE</span> PROVIDE</Heading>
        
        <Box  className="home-service-container" bg={useColorModeValue('white', '#1a202c')}>



{serviceData.map((el)=><Box key={el.id}  boxShadow='2xl' >

<Box className="home-service-box">
            <Box><Image  src={el.simg}/></Box>
            <br />
            <Box w={"55%"}><Text fontSize={"1.8vw"} fontWeight={"600"} >{el.heading}</Text></Box>
            <br />
            <Box w="80%"><Text fontSize={"1.2vw"}> {el.desc}</Text></Box>
        <br />
        </Box>

</Box>)}



    </Box>
    <br />
    <Box><Button border="2px solid #F47721" fontWeight={"500"} _hover={{bg:"#F47721",color:"white"}} borderRadius={"30px"}>Explore More</Button></Box>
    </Box>)

}