import styled from "styled-components";
import { IColumn } from "../../Interfaces";

export const DBColumnStyle = styled.span`
  color: rgba(108, 142, 239, 1);
  background-color: #333;
  padding: 3px 6px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  font-size: 13px;
`;

interface IDBColumnProps {
  column: IColumn;
}

export default function DBColumn({ column }: IDBColumnProps) {
  return <DBColumnStyle>{column.name}</DBColumnStyle>;
}
