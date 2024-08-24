import { useEffect, useState } from "react";
import server from "../server";

function MenuItems() {
  // MainCourse effect for data

  const [items, setItems] = useState([]);

  useEffect(() => {
    server.getMainCourse().then((data) => {
      setItems(data);
    });
  }, []);

  // Dessert effect for data

  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    server.getDessert().then((data) => {
      setDessert(data);
    });
  }, []);

  // Drinks effect for data

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    server.getDrinks().then((data) => {
      setDrinks(data);
    });
  }, []);

  // Return for all the menu items

  return (
    <>
      <ul>
        {items.map((e) => (
          <li key="id">{e.name}</li>
        ))}
        {dessert.map((e) => (
          <li key="id">{e.name}</li>
        ))}
        {drinks.map((e) => (
          <li key="id">{e.name}</li>
        ))}
      </ul>
    </>
  );
}

export default MenuItems;
