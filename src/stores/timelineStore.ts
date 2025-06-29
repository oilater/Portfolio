import { atom } from 'jotai';

type TimelinePlayState = Map<string, boolean>;

const timelinePlayStateAtom = atom<TimelinePlayState>(new Map());

export const timelinePlayAtom = atom(
  (get) => (key: string) => get(timelinePlayStateAtom).get(key) || false,
  (get, set, key: string) => {
    const current = get(timelinePlayStateAtom);
    const newMap = new Map(current).set(key, true);
    set(timelinePlayStateAtom, newMap);
  }
);