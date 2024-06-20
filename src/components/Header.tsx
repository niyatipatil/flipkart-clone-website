import React from "react";
import {
  UserIcon,
  ShoppingCartIcon,
  UserAddIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-600 text-2xl font-bold italic">Flipkart</div>

        <div className="flex items-center w-1/2">
          <SearchIcon className="h-5 w-5" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full p-2 border bg-gray-100 text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="relative flex items-center space-x-1 text-black">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex items-center space-x-1">
                    <UserIcon className="h-5 w-5 text-gray-600" />
                    <span>Login</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 border border-gray-300 bg-white shadow-lg">
                      <form>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            New Customer?
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full p-2 bg-blue-500 text-white rounded-md"
                        >
                          Sign Up
                        </button>
                      </form>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li className="flex items-center space-x-1 text-black">
              <ShoppingCartIcon className="h-5 w-5 text-gray-600" />
              <span>Cart</span>
            </li>
            <li className="flex items-center space-x-1 text-black">
              <UserAddIcon className="h-5 w-5 text-gray-600" />
              <span>Become a Seller</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
