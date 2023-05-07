import styled from "styled-components";
import { IColumn } from "../../Interfaces";
import JSONItem, { Field, JSONCollapse, Value } from "../JSONItem";

const Container = styled.div``;

const Level = styled.div`
  padding-left: 20px;
`;

const RowStart = styled.div`
  display: flex;
  gap: 10px;
`;

interface IJSONPaginateProps {
  columns: IColumn[];
}

export default function JSONPaginate({ columns }: IJSONPaginateProps) {
  return (
    <Container>
      <JSONCollapse>{"{"}</JSONCollapse>
      <Level>
        <RowStart>
          <Field>"data":</Field>
          <Value>{"["}</Value>
        </RowStart>
        <Level>
          <JSONItem columns={columns} addComma={true} />
          <JSONItem columns={columns} />
        </Level>
        <Value>{"],"}</Value>
        <RowStart>
          <Field>"pagination":</Field>
          <Value>{"{"}</Value>
        </RowStart>
        <Level>
          <RowStart>
            <Field>"total":</Field>
            <Value>2,</Value>
          </RowStart>
          <RowStart>
            <Field>"lastPage":</Field>
            <Value>1,</Value>
          </RowStart>
          <RowStart>
            <Field>"perPage":</Field>
            <Value>10,</Value>
          </RowStart>
          <RowStart>
            <Field>"currentPage":</Field>
            <Value>1,</Value>
          </RowStart>
          <RowStart>
            <Field>"from":</Field>
            <Value>0,</Value>
          </RowStart>
          <RowStart>
            <Field>"to":</Field>
            <Value>1</Value>
          </RowStart>
        </Level>
        <Value>{"}"}</Value>
      </Level>
      <JSONCollapse>{"}"}</JSONCollapse>
    </Container>
  );
}
