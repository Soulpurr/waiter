import { useEffect, useState } from "react";
import { app, data } from "../../firebase.config";
import { collection, addDoc, getDocs } from "firebase/firestore";
const dbInstance = collection(data, "table");
function Addtables() {
  const [tableData, setTableData] = useState({ tnumber: "", tname: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTableData({ ...tableData, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    await addDoc(dbInstance, {
      tableData,
    });
    alert("Added")
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3"
      >
        <div className="mb-4">
          <label
            htmlFor="tnumber"
            className="block text-gray-700 font-bold mb-2"
          >
            Table Number
          </label>
          <input
            type="number"
            id="tnumber"
            name="tnumber"
            value={tableData.tnumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tname" className="block text-gray-700 font-bold mb-2">
            Table Name
          </label>
          <input
            type="text"
            id="tname"
            name="tname"
            value={tableData.tname}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Addtables;
