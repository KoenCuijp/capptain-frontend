import { VStack, Box } from "@chakra-ui/react"
import { Match } from "./Match"

let matchesData = [
    {
        'opponent': 'Rivierwijkers 2',
        'home_away': 'H',
        'location': 'Sportpark Sterrenwijk',
        'date': '17-04-2024',
        'meet_at': '12:15',
        'starts_at': '13:00',
        "id": "1",
        "joining": 13,
        "not_joining": 7,
        "spectating": 1,
        "no_answer": 5,
    },
    {
        'opponent': 'Sterrenwijk 2',
        'home_away': 'A',
        'location': 'Sportpark Sterrenwijk',
        'date': '24-04-2024',
        'meet_at': '11:15',
        'starts_at': '12:00',
        "id": "2",
        "joining": 10,
        "not_joining": 6,
        "spectating": 2,
        "no_answer": 8,
    },
    {
        'opponent': 'PVC 4',
        'home_away': 'A',
        'location': 'Sportpark Sterrenwijk',
        'date': '17-04-2024',
        'meet_at': '09:15',
        'starts_at': '10:00',
        "id": "3",
        "joining": 8,
        "not_joining": 5,
        "spectating": 1,
        "no_answer": 12,
    },

]

export function EventsList() {
    return (
        <VStack mt="-90px" spacing="8">
            {matchesData.map((matchData) => (
                <Box key={matchData.id}>
                    <Match matchData={matchData} />
                </Box>
            )
            )}
        </VStack>
    )
}