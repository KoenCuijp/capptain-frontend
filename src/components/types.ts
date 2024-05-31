export type MatchData = {
  id: number;
  team: string;
  opponent: string;
  home_away: string;
  location: string;
  date: string;
  starts_at: string;
  meet_at: string;
  joining_players: string[];
  not_joining_players: string[];
  spectating_players: string[];
  no_answer_players: string[];
}

export type MatchFormFields = {
  team: string,
  opponent: string,
  home_away: string,
  location: string,
  date: string,
  meet_at: string,
  starts_at: string,
}