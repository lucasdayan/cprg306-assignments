
import Item from './item.js';
import ItemList from './item-list.js';

export default function Page() {
    return (
        <main>
            <h1 class = "text-3xl font-bold m-2">Shopping List</h1>
            <ItemList></ItemList>    
        </main>
    )
}