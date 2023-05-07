import styled from "styled-components";
import { IRoute } from "../../Interfaces";
import {
  CodeBox,
  CodeContent,
  CodeTab,
  CodeTitleLink,
} from "../RequestExample";
import JSONItem, { JSONCollapse } from "../JSONItem";
import JSONPaginate from "../JSONPaginate";
import { CopyButton, getExampleValue } from "../CurlRequest";
import { CopyIcon } from "../Icons";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

interface IResponseExampleProps {
  route: IRoute;
}

const Container = styled.div``;

const Title = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 24px;
`;

const AllArray = styled.div`
  padding-left: 20px;
`;

const SINGLE_ITEM_HANDLERS = ["store", "show", "update", "patch"];

export default function ResponseExample({ route }: IResponseExampleProps) {
  const possibleColumns = [...route.columns]
    .filter((column) => !route.hiddens.includes(column.name))
    .sort((a: any, b: any) => a.name - b.name);

  const copyItem = () => {
    let data: any = null;
    const item: any = {};
    possibleColumns.forEach((column) => {
      item[column.name] = getExampleValue(column.data_type);
    });

    if (SINGLE_ITEM_HANDLERS.includes(route.handler)) {
      data = item;
    } else if (route.handler === "all") {
      data = [item, item];
    } else if (route.handler === "paginate") {
      data = {
        data: [item, item],
        pagination: {
          total: 1,
          lastPage: 1,
          perPage: 10,
          currentPage: 1,
          from: 0,
          to: 1,
        },
      };
    }

    copy(JSON.stringify(data));
    toast.success("The response has been copied!", {
      position: "bottom-right",
      theme: "dark",
    });
  };

  return (
    <>
      <Container>
        <Title>Response Example</Title>
        <CodeBox>
          <CodeTab>
            <CodeTitleLink className="active">JSON</CodeTitleLink>
          </CodeTab>
          <CodeContent>
            {SINGLE_ITEM_HANDLERS.includes(route.handler) && (
              <JSONItem columns={possibleColumns} />
            )}
            {["all"].includes(route.handler) && (
              <>
                <JSONCollapse>{"["}</JSONCollapse>
                <AllArray>
                  <JSONItem columns={possibleColumns} addComma={true} />
                  <JSONItem columns={possibleColumns} />
                </AllArray>
                <JSONCollapse>{"]"}</JSONCollapse>
              </>
            )}
            {["paginate"].includes(route.handler) && (
              <JSONPaginate columns={possibleColumns} />
            )}
            <CopyButton type="button" onClick={copyItem}>
              <CopyIcon height={16} width={16} />
              <div>Copy</div>
            </CopyButton>
          </CodeContent>
        </CodeBox>
      </Container>
    </>
  );
}
