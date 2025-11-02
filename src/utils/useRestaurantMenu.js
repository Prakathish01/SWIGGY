import { useState, useEffect } from "react";
import { RES_MENU } from "./constants";

export const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + resId);
    const json = await data.json();
    setResMenu(json.data);
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  return resMenu;
};
