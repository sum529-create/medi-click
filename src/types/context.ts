export interface date {
  date?: string;
  time?: string;
  other?: unknown;
}

export interface time {
  date: string;
  time?: string;
  other?: unknown;
}

export interface other {
  date: string;
  time: string;
  other?: unknown;
}
