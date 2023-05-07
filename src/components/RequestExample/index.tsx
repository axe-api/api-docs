import styled from "styled-components";
import { IRoute } from "../../Interfaces";
import CurlRequest from "../CurlRequest";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

const Container = styled.div``;

const Title = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 24px;
`;

const CodeBox = styled.div`
  border: 1px solid #282828;
  border-radius: 8px;
  overflow: hidden;
`;

const CodeTab = styled.div`
  height: 48px;
  border-bottom: 1px solid #282828;
  display: flex;
`;

const CodeTitleLink = styled.button`
  padding: 0px;
  border: none;
  background-color: transparent;
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  padding: 15px 24px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 50ms;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #393939;
  }

  &:focus {
    outline: none;
  }

  &.active {
    border-bottom: 2px solid transparent;
    background: linear-gradient(#161616, #161616) padding-box,
      linear-gradient(90deg, #9747ff 0%, #6c8eef 100%);
  }
`;

const CodeContent = styled.div`
  background-color: #161616;
  padding: 24px 16px;
  position: relative;

  &:hover {
    & button {
      display: flex;
    }
  }
`;

interface IRequestExampleProps {
  route: IRoute;
}

export default function RequestExample({ route }: IRequestExampleProps) {
  const copyContent = (content: string) => {
    copy(content);
    toast.success("The code has been copied!", {
      position: "bottom-right",
      theme: "dark",
    });
  };

  return (
    <Container>
      <Title>Request Example</Title>
      <CodeBox>
        <CodeTab>
          <CodeTitleLink
            className="active"
            //onClick={() => setActiveTab("curl")}
          >
            cURL
          </CodeTitleLink>
          {/* <CodeTitleLink
            className={activeTab === "javascript" ? "active" : ""}
            onClick={() => setActiveTab("javascript")}
          >
            JavaScript
          </CodeTitleLink> */}
        </CodeTab>
        <CodeContent>
          <CurlRequest route={route} onCopy={copyContent} />
        </CodeContent>
      </CodeBox>
    </Container>
  );
}
