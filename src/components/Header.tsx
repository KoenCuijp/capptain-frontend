import { Box, Heading, Text, Image, Menu, MenuItem, MenuIcon } from "@chakra-ui/react"

export function Header() {
    return (
        <Box
            as='section'
            color='black.700'
            bg='capptain.yellow'
            pt='20px'
            pb='120px'
            px='8'
            textAlign='center'
        >
            <Image
                src="src/assets/capptain-logo.png"
                ml="auto"
                mr="auto"
                mt="10px"
                maxWidth="250px"
            />
            {/* <Menu orientation="vertical">
                <MenuItem>Home</MenuItem>
                <MenuItem>Agenda</MenuItem>
                <MenuItem>Team</MenuItem>
            </Menu> */}
            <Heading
                fontWeight="extrabold"
                fontSize={["3xl", "3xl", "5xl"]}
                mt="120px"
            >upcoming team events</Heading>
            <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} >be there or be square.</Text>
        </Box>
    )
}