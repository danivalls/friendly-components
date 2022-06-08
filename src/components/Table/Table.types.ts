type Alignment = 'left' | 'center' | 'right';

export type Column = {
  dataIndex: string;
  label: string;
  align?: Alignment;
  width?: string | number;
};

export type Row = {
  key: string;
  active?: boolean;
  [key: string]: any;
};

export interface TableRowProps {
  clickable: boolean;
  active?: boolean;
}

export interface TableProps {
  columns: Column[];
  dataSource: Row[];
  onRowClick?: (row: Row) => void;
  className?: string;
}

export interface CellProps {
  align: Alignment;
  width?: string | number;
}
