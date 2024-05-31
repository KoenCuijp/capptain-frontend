import { Box, VStack } from '@chakra-ui/react';

import { useQuery } from '@tanstack/react-query';

import { fetchMatches } from '../api/backend'
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

    // Get all matches query
    const matchesQuery = useQuery({ queryKey: ['matches'], queryFn: fetchMatches })

    return (
        <VStack mt="-180px" mb="90px" spacing="8">
            <CreateMatchModal />
            {matchesQuery.data?.map((match) => (
                <Box key={match.id}>
                    <Match matchData={match} />
                </Box>
            )
            )}
        </VStack>
    )
}