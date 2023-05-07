import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocFromServer,
  getDocs,
} from "firebase/firestore";
import { app, data } from "../../firebase.config";

const dbInstance = collection(data, "table");
import { BsHandThumbsUpFill, BsFillDisplayFill } from "react-icons/bs";
import Link from "next/link";
function TableCard(data2) {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await getDocs(dbInstance);
    console.log(res);
    setData(
      res.docs.map((item) => {
        return { ...item.data(), id: item.id };
      })
    );
    console.log(data[0]?.tableData?.tname);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data2);

  const handleWaiterChange = (event) => {
    setWaiter(event.target.value);
  };

  const handleDisplayClick = () => {
    // Handle display logic here
  };

  const handleBillClick = () => {
    // Handle bill generation logic here
  };

  const handleAddWaiterClick = () => {
    // Handle adding waiter logic here
  };

  const randomImage = `https://picsum.photos/200/300?random=12`;

  return (
    <div className=" ">
      <div className="p-3  sm:grid md:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <div
            key={item?.id}
            className=" rounded-md group p-2 cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50  "
          >
            <img
              layout="responsive"
              src={`https://picsum.photos/200/100?random=${Math.random()}`}
              height={1080}
              width={1920}
            />
            <div className="">
              <h1 className=" text-xl transition-all duration-100 ease-in-out group-hover:font-extrabold">
                Table Number-{item?.tableData?.tnumber}
              </h1>

              <div className="flex justify-between">
                <Link
                  href={`/orders/${item?.id}`}
                  className="text-md font-extrabold hover:text-red-400"
                >
                  Order
                </Link>
                <Link
                  href={`/bill/${item?.id}`}
                  className="text-md font-extrabold hover:text-red-400"
                >
                  Bill
                </Link>
                <p className="text-md font-extrabold hover:text-red-400">
                  Waiter
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TableCard;
