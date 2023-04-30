import { Provider } from "react-redux";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import { DocContext } from "./contexts/DocContext";
import { IDoc, IRoute } from "./Interfaces";
import store from "./store";
import { HANDLER_TITLE_MAP } from "./Constants";

function App() {
  const [docs, setDocs] = useState<IDoc>({
    routes: [],
    versions: [],
  });

  const fetchDocs = async () => {
    const response = await fetch(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api_docs"
        : "/api_docs"
    );

    const result = await response.json();
    setDocs({
      ...docs,
      ...{
        routes: result.routes.map((route: IRoute) => {
          return {
            ...route,
            searchKey: `${route.model}-${HANDLER_TITLE_MAP[route.handler]}-${
              route.method
            }`.toLowerCase(),
          };
        }),
        versions: result.versions,
      },
    });
  };

  useEffect(() => {
    fetchDocs();
    // eslint-disable-next-line
  }, []);

  if (!docs) {
    return <></>;
  }

  return (
    <Provider store={store}>
      <DocContext.Provider value={docs}>
        <Header />
        <LeftBar />
        <Content />
        {/* <RightBar /> */}
      </DocContext.Provider>
    </Provider>
  );
}

export default App;
