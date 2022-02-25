import { ReactElement } from 'react';

export interface ILayoutCore {
  titlePage?: string;
  metaPage?: string;
}
export interface ILayoutGrid extends ILayoutCore {
  paginator: ReactElement;
}

export interface IHeader {
  isBack: boolean;
}
