import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import { data } from "../../firebase.config";
import { collection } from "firebase/firestore";

import { query, where, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
// const dbInstance = collection(data, "order");
const Orders = () => {
  const [order, setorder] = useState([]);
  const router = useRouter();
  const get = async () => {
    const q = query(
      collection(data, "order"),
      where("tableId", "==", router?.query?.slug?.toString())
    );

    const querySnapshot = await getDocs(q);
    const documentsData = querySnapshot.docs.map((doc) => doc.data());
    setorder(documentsData);
    console.log(order);
  };
  get();
  // Sample order data
  // const order = {
  //   orderId: "12345",
  //   items: [
  //     { name: "Product 1", quantity: 2, price: 20.99 },
  //     { name: "Product 2", quantity: 1, price: 15.99 },
  //     { name: "Product 3", quantity: 3, price: 10.99 },
  //   ],
  //   shippingAddress: {
  //     name: "John Doe",
  //     address1: "123 Main St",
  //     address2: "Apt 4",
  //     city: "Anytown",
  //     state: "CA",
  //     zip: "12345",
  //   },
  //   total: 99.94,
  //   status: "Delivered",
  // };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Order {order.orderId}</h1>
          <span className="text-gray-600 text-sm">{order.status}</span>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Order Summary
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {order[0]?.items.map((item, index) => (
                <div
                  key={index}
                  className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <dt className="text-sm font-medium text-gray-500">
                    {item?.name}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {item?.price}
                  </dd>
                </div>
              ))}

              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 bg-gray-50">
                <dt className="text-sm font-medium text-gray-500">Waiter</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {order[0]?.waiterTip}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-8">
          {({ open }) => (
            <>
              <button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
                <span>Order Details</span>
                <AiFillFire
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                />
              </button>
              <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>Order ID: {order.orderId}</p>
                <p>Status: {order.status}</p>
                <p>Shipping Address:</p>
                <ul className="ml-4 mb-4">
                  <li>{order.shippingAddress.name}</li>
                  <li>{order.shippingAddress.address1}</li>
                  {order.shippingAddress.address2 && (
                    <li>{order.shippingAddress.address2}</li>
                  )}
                  <li>
                    {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                    {order.shippingAddress.zip}
                  </li>
                </ul>
                <p>Items:</p>
                <ul className="ml-4 mb-4">
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
                <p>Total: ${order.total.toFixed(2)}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
