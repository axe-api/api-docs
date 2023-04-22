import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import { DocContext } from "./contexts/DocContext";

function App() {
  const [docs, setDocs] = useState(null);

  const fetchDocs = async () => {
    const response = await fetch("http://localhost:3000/docs");
    setDocs(await response.json());
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  if (!docs) {
    return <></>;
  }

  return (
    <DocContext.Provider value={docs}>
      <Header />
      <LeftBar />
      <Content />
      <RightBar />
    </DocContext.Provider>
  );
}

export default App;
