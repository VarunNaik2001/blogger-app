import { userInfo } from "os";
import { createContext } from "react";
import { UserInfo } from "./types";

export const UserContext = createContext<UserInfo>({user:null, username:null});