import { atom } from 'jotai';

export type Step = 'init' | 'introduce' | 'projects';

export const stepAtom = atom<Step>('init');