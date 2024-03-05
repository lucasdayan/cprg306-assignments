
const Item = ({item}) => {
    return (
        <li className="p-2 m-4 bg-grey-900 max-w-sm">
          <div>
            <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.category}</p>
          </div>
          <span className="text-gray-600">{item.quantity}</span>
        </li>
      );
}

export default Item;