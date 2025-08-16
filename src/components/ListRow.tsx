import type { ReactNode } from 'react';
import { listRow } from '../styles/ListRow.css';

type ListRowProps = {
  children: ReactNode;
};

export function ListRow({ children }: ListRowProps) {
  return <div className={listRow}>{children}</div>;
}