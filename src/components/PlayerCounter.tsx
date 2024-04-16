import { Box, Heading, CircularProgress, CircularProgressLabel } from "@chakra-ui/react"

type CounterProps = {
    playerCount: number,
    totalCount: number,
    width: string,
    color: string,
    label: string,
}

export function PlayerCounter(props: CounterProps) {

    return (
        <Box width={props.width}>
            <Heading as="h3" fontSize={["xs", "sm", "sm"]} mb="2">{props.label}</Heading>
            <CircularProgress value={(props.playerCount / props.totalCount) * 100} color={props.color}>
                <CircularProgressLabel>{props.playerCount}</CircularProgressLabel>
            </CircularProgress>
        </Box>
    )
}