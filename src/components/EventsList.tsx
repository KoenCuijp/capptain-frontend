import React, { useEffect, useRef, useState } from "react";
import { VStack, Box } from "@chakra-ui/react"
import { Match } from "./Match"


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

// TODO (Issue #6): Refactor using React Query
async function fetchMatches(page: number = 1, abortController: AbortController | null = null) {
    const endpoint = `${import.meta.env.VITE_BACKEND_URL}/matches`;
    const response = await fetch(endpoint, { signal: abortController?.signal });
    const matches = (await response.json()) as Match[];

    return matches;
}

export function EventsList() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [matches, setMatches] = useState<Match[]>([]);
    const [page, setPage] = useState(1);

    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        // Cancel any previous ongoing fetches, we're doing a new request
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();

        const fetchAndRender = async () => {
            const matchesData = await fetchMatches(page, abortControllerRef.current);
            setMatches(matchesData);
        }
        try {
            fetchAndRender();
        }
        catch (e: any) {
            if (e.name == "AbortError") {
                console.log("Previous request aborted");
                return;
            }
            setError(e);
        }
        finally {
            setIsLoading(false);
        }
    }, []);

    // TODO (Issue #7): Add loading spinner
    if (isLoading) {
        console.log("Loading...");
        return <h1>LOADING....</h1>;
    }

    // TODO (Issue #7): Add error handlingß
    if (error) {
        console.error("Error: ", error);
        return <h1>ERROR!</h1>;
    }

    return (
        <VStack mt="-90px" mb="90px" spacing="8">
            {matches.map((match) => (
                <Box key={match.id}>
                    <Match matchData={match} />
                </Box>
            )
            )}
        </VStack>
    )
}