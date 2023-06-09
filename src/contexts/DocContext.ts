import { createContext } from "react";
import { IDoc } from "../Interfaces";

const DocContext = createContext<IDoc>({
  routes: [],
  versions: [],
  selectedVersion: "",
});

export { DocContext };
