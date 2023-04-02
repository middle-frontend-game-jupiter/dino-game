export declare type CssAlign =
  | 'left'
  | 'right'
  | 'inherit'
  | 'center'
  | 'justify'

export interface IColumn {
  title: string
  align?: CssAlign
  width?: string | number
}

export const COLUMNS: IColumn[] = [
  {
    title: 'Name',
    width: '44px',
  },
  {
    title: 'Rating',
    width: 'auto',
  },
]
