import { Box, VStack } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { Match, CreateMatchModal } from "./Match"


interface Match {
    id: number,
    team: string,
    joining_players: string[],
    not_joining_players: string[],
    spectating_players: string[],
    no_answer_players: string[],
    opponent: string,
    home_away: string,
    location: string,
    date: string,
    meet_at: string,
    starts_at: string,
    created_at: string,
    updated_at: string
}

export function EventsList() {
    const matches = useLoaderData() as Match[];

    return (
        <VStack mt="-180px" mb="90px" spacing="8">
            <CreateMatchModal />
            {matches.map((match) => (
                <Box key={match.id}>
                    <Match matchData={match} />
                </Box>
            )
            )}
        </VStack>
    )
}