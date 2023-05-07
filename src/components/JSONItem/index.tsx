import styled from "styled-components";
import { IColumn } from "../../Interfaces";
import { getExampleValue } from "../CurlRequest";

export const JSONCollapse = styled.div`
  color: #00f4b9;
  font-size: 14px;
`;

const FieldLine = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 20px;
  font-size: 14px;
`;

export const Field = styled.div`
  color: #b4b1ff;
  font-weight: 400;
`;

export const Value = styled.div`
  color: #bedbeb;
  font-weight: 400;
`;

interface IJSONItemProps {
  columns: IColumn[];
  addComma?: boolean;
}

export default function JSONItem({
  columns,
  addComma = false,
}: IJSONItemProps) {
  return (
    <>
      <JSONCollapse>{"{"}</JSONCollapse>
      {columns.map((column, index) => (
        <FieldLine key={column.name}>
          <Field>"{column.name}":</Field>
          <Value>
            {getExampleValue(column.data_type)}{" "}
            {index < columns.length - 1 ? "," : ""}
          </Value>
        </FieldLine>
      ))}
      <JSONCollapse>
        {"}"}
        {addComma ? "," : ""}
      </JSONCollapse>
    </>
  );
}
