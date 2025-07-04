import { atom } from 'jotai';

export type Step = 'init' | 'introduce' | 'content';

export const stepAtom = atom<Step>('init');