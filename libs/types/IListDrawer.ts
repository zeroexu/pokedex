import { FC } from 'react';

export interface IlistDrawer {
  elements: any[];
  Component: FC<any>;
  name: string;
}

export interface IListNavigation {
  offset: number;
  next?: string | null;
  previous?: string | null;
}
