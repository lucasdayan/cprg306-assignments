'use client';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsJson from './items.json';
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsJson);

    function handleAddItem(newItem) {
        setItems([...items, newItem])
    }
    return (
        <main>
            <NewItem onAddItem={handleAddItem}></NewItem>
            <br></br>
            <br></br>
            <br></br>
            <ItemList items={items}></ItemList>
        </main>
    )
}