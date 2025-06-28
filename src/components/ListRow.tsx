import type { ReactNode } from 'react';
import { css } from '@emotion/react';

type ListRowProps = {
  children: ReactNode;
};

export function ListRow({ children }: ListRowProps) {
  return <div css={listRow}>{children}</div>;
}

const listRow = css`
  padding: 15px 15px 25px;

  &:last-child {
    padding-bottom: 15px;
  }
`;