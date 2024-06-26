import { MatchData, MatchFormFields } from '../components/types'

// TODO (Issue #6): Refactor using React Query
export async function fetchMatches(page: number = 1, abortController: AbortController | null = null) {
    const endpoint = `${import.meta.env.VITE_BACKEND_URL}/matches`;
    const response = await fetch(endpoint, { signal: abortController?.signal });
    const matches = (await response.json()) as MatchData[];

    return matches;
}

// TODO (Issue #6): Refactor using React Query
export async function createMatch(data: MatchFormFields, abortController: AbortController | null = null) {
    const endpoint = `${import.meta.env.VITE_BACKEND_URL}/create-match`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: abortController?.signal
    }
    console.log(requestOptions);
    const response = await fetch(endpoint, requestOptions);
    console.log(response);
    console.log(response.status);
    console.log(response.json());
}