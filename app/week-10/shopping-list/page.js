"use client";
import ItemList from "../item-list";
import NewItem from "../new-item";
import MealIdeas from "../meal-ideas";
import { useState, useEffect } from "react";
import useUserAuth from "../utils/auth-context";
import Layout from "../layout";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  function handleAddItem(newItem) {
    addItem(user.uid, newItem).then(() => {
      setItems([...items, newItem]);
    });
  }

  async function loadItems() {
    if (user) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  function handleItemSelect(itemJson) {
    const itemName = itemJson.name
      .split(",")[0]
      .replace(
        /([\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u26FF\u2700-\u27BF])/g,
        ""
      )
      .trim();
    setSelectedItemName(itemName);
  }

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <main>
        <div style={{ display: "flex" }}>
          <div>
            <NewItem onAddItem={handleAddItem}></NewItem>
            <br></br>
            <br></br>
            <br></br>
            <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>
          </div>
          <MealIdeas ingredient={selectedItemName}></MealIdeas>
        </div>
      </main>
    </Layout>
  );
}
