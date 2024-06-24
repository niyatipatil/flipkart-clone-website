"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Params {
  id: number;
}

interface FormComponentProps {
  params: Params;
}

interface Product {
  id: number;
  count: number;
  image: string;
  price: number;
  rating: number;
  name: string;
}

const FormComponent: React.FC<FormComponentProps> = ({ params }) => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [email, setEmail] = useState<string>("");
  const [pin, setPin] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    console.log("Fetching data for ID:", params.id);
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data: Product[] = await response.json();
        console.log(data);
        const filteredData = data.filter(
          (item: Product) => item.id === Number(params.id)
        );
        console.log(filteredData);
        if (filteredData.length > 0) {
          setProductData(filteredData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (productData.length === 0) {
      alert("No product data available.");
      return;
    }

    const product = productData[0]; // Use the first product as an example

    const customer = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_no: phone,
      city: city,
      pin_code: pin,
      address: address,
      product_name: product.name,
      product_price: product.price,
    };
    try {
      const resp = await axios.post("/api/formhandler", customer);
      alert(resp.data.message);
    } catch (error) {
      console.error("Failed to submit form", error);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-100 w-screen items-center">
      <h1 className="mt-10 mb-1 text-3xl font-bold text-black">USER DETAILS</h1>
      <h5 className="mb-4">Please enter the details below!</h5>
      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-gray-100 p-5 rounded-sm w-[500px]"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ backgroundColor: "transparent" }} // Ensure transparent background
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ backgroundColor: "transparent" }} // Ensure transparent background
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ backgroundColor: "transparent" }} // Ensure transparent background
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ backgroundColor: "transparent" }} // Ensure transparent background
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_city"
            id="floating_city"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ backgroundColor: "transparent" }} // Ensure transparent background
          />
          <label
            htmlFor="floating_city"
            className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            City
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_pin"
            id="floating_pin"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
            required
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={{ backgroundColor: "transparent" }} // Ensure transparent background
          />
          <label
            htmlFor="floating_pin"
            className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Pincode
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_address"
            id="floating_address"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ backgroundColor: "transparent" }} // Ensure transparent background
          />
          <label
            htmlFor="floating_address"
            className="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Address
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-bold rounded-sm text-sm w-full sm:w-auto px-5 py-3 text-center"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
