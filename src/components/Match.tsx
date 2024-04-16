import { Text, Box, Flex, Heading, Divider, Badge } from "@chakra-ui/react"
import { MatchData } from './types';
import { PlayerCounter } from "./PlayerCounter";
import { EventBadge } from "./EventBadge";

// A Match component has 1 property you can pass; matchData
interface MatchProps {
    matchData: MatchData;
}

export function Match(matchProps: MatchProps) {
    let matchData = matchProps.matchData

    let homeGame = matchData.home_away == 'H'
    let currentTeam = "Sterrenwijk 6"
    let opponent = matchData.opponent
    let homeTeam = homeGame ? currentTeam : opponent
    let awayTeam = homeGame ? opponent : currentTeam
    let totalPlayers = (
        matchData.joining +
        matchData.not_joining +
        matchData.spectating +
        matchData.no_answer
    )

    return (
        <Box
            as="section"
            background="white"
            padding="30px"
            padding-top="20px"
            rounded="lg"
            minWidth="2xl"
            textAlign="center"
            boxShadow="lg"
            position="relative" // allows positioning Badge relative to this Box
        >
            <EventBadge homeGame={homeGame} />
            <Heading as="h2" fontSize={["lg", "xl", "3xl"]}>{homeTeam} - {awayTeam}</Heading>
            <Text fontWeight="500" fontSize={["lg", "xl", "xl"]} mt="2">{matchData.date}</Text>
            <Text>Starts: {matchData.starts_at} | Meet: {matchData.meet_at}</Text>

            <Divider borderColor="capptain.darkgreen" borderWidth="1px" mt="4" mb="4" />

            <Flex justifyContent="space-between" width="80%" mx="auto" textAlign="center">
                <PlayerCounter
                    playerCount={matchData.joining}
                    totalCount={totalPlayers}
                    color="capptain.darkgreen"
                    width="25%"
                    label="Joining"
                />
                <PlayerCounter
                    playerCount={matchData.not_joining}
                    totalCount={totalPlayers}
                    color="capptain.pink"
                    width="25%"
                    label="Not joining"
                />
                <PlayerCounter
                    playerCount={matchData.spectating}
                    totalCount={totalPlayers}
                    color="capptain.yellow"
                    width="25%"
                    label="Spectating"
                />
                <PlayerCounter
                    playerCount={matchData.no_answer}
                    totalCount={totalPlayers}
                    color="capptain.darkgrey"
                    width="25%"
                    label="No answer"
                />
            </Flex>
        </Box >
    )
}