import { useRouter } from "next/router";
import React, { useState } from "react";
import { app, data } from "../../firebase.config";
import { collection, addDoc, setDoc, getDocs, doc } from "firebase/firestore";
const dbInstance = collection(data, "order");
const CreateOrders = () => {
  const router = useRouter();
  const [data, setdata] = useState({
    items: [],
    waiterId: "",
    tableId: "",
    tableNum: "",
  });
  const [items, setItems] = useState([{ name: "", price: "" }]);
  const [waiterId, setwaiterId] = useState("");

  const handleAddItem = () => {
    setItems([...items, { name: "", price: "" }]);
  };
  const handleRemoveItem = (index) => {
    const values = [...items];
    values.splice(index, 1);
    setItems(values);
  };
  const handleItemChange = (index, event) => {
    const values = [...items];
    if (event.target.name === "name") {
      values[index].name = event.target.value;
    } else {
      values[index].price = event.target.value;
    }
    setItems(values);
  };

  const handlewaiterIdChange = (event) => {
    setwaiterId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const db = doc(data, "order"," router.query.slug?.slice(3)?.toString()");
    console.log({ items, waiterId });
    data.items = items;
    data.tableId = router.query.slug?.slice(3);
    data.tableNum = router.query.slug?.slice(0, 3);
    data.waiterId = waiterId;
    addDoc(dbInstance, data).then(alert("Added_head back"));
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form className="p-6 bg-white rounded-md shadow-md">
        <div className="mb-6">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="tnumber"
          >
            Table Number
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            id="tnumber"
            name="tnumber"
            type="text"
            value={router.query.slug?.slice(0, 2).toString()}
            disabled
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold text-gray-700">Items</label>
          {items.map((item, index) => (
            <div key={index} className="flex mb-4">
              <input
                className="w-1/2 px-3 py-2 mr-4 border rounded-md"
                name="name"
                type="text"
                placeholder="Item Name"
                value={item.name}
                onChange={(event) => handleItemChange(index, event)}
              />
              <input
                className="w-1/2 px-3 py-2 border rounded-md"
                name="price"
                type="text"
                placeholder="Price"
                value={item.price}
                onChange={(event) => handleItemChange(index, event)}
              />
            </div>
          ))}
          <div className="flex justify-between">
            <button
              className="px-3 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
              type="button"
              onClick={handleAddItem}
            >
              Add Item
            </button>
            <button
              className="px-3 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
              type="button"
              onClick={handleRemoveItem}
            >
              Remove Item
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="waiterId"
          >
            Waiter Tip
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            id="waiterId"
            name="waiterId"
            type="text"
            placeholder="Waiter Tip"
            value={waiterId}
            onChange={handlewaiterIdChange}
          />
        </div>
        <button
          className="w-full px-3 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateOrders;
