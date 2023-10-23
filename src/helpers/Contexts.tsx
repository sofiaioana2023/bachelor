import { Dispatch, SetStateAction, createContext } from "react";
type LabContextType = {
  labState: string;
  setLabState: Dispatch<SetStateAction<string>>;
};
export const labContext = createContext<LabContextType>({
  labState: "",
  setLabState: () => {},
});
