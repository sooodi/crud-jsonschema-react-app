import { useContext, useEffect, useState } from "react";

import { useLocalStorage } from "./useLocalStorage";
import { User } from "../utils/common.type";

export const useSort = () => {
  const { setItem } = useLocalStorage();

  const addUser = (userObj: User) => {
    if (userObj !== null) {
      setItem("user", JSON.stringify(userObj));
    }
  };
  const removeUser = () => {
    setItem("user", "");
  };

  return { addUser, removeUser };
};
