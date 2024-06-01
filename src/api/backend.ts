import { MatchData } from '../components/types'

// TODO (Issue #9): Use aixos instead of fetch
export async function fetchMatches() {
    const endpoint = `${import.meta.env.VITE_BACKEND_URL}/matches`;
    const response = await fetch(endpoint);
    const matches = (await response.json()) as MatchData[];

    return matches;
}

// TODO (Issue #9): Use aixos instead of fetch
export async function createMatch({request}: {request: Request}) {
    const matchFormData = await request.json();
    const endpoint = `${import.meta.env.VITE_BACKEND_URL}/create-match`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(matchFormData),

    }
    const response = await fetch(endpoint, requestOptions);
    return response.json();
}