import React from "react";
import {
  UserIcon,
  ShoppingCartIcon,
  UserAddIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white p-2 ">
      <div className="container mx-auto flex justify-between items-center text-[16px] h-11 w-full m-0">
        <Link href="/">
          <Image
            className="ml-5"
            width={150}
            height={150}
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="Flipkart-Logo"
          />
        </Link>
        <div className="flex items-center w-1/2 h-10 bg-blue-50 rounded-md px-2">
          <SearchIcon className="h-5 w-5" /> &nbsp;
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full p-2 bg-blue-50 text-gray-900 rounded-md focus:outline-none"
          />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="relative flex items-center space-x-1 text-black">
              <div className="relative flex hover:bg-blue-600 hover:border-2 p-2 hover:rounded-md group">
                <button
                  id="LoginButton"
                  className="text-black text-[15px] rounded-lg px-2 text-center inline-flex items-center"
                  type="button"
                >
                  <UserIcon className="h-5 w-5 text-gray-600" />
                  <span className="ml-1">Login</span>
                  <svg
                    className="h-3 w-3 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 11 4"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownHover"
                  className="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 group-hover:block"
                  style={{ top: "100%", left: "0", zIndex: 50 }}
                >
                  <div className="p-2 border border-gray-200 bg-white shadow-lg rounded-lg">
                    <form>
                      <div className="mb-4 flex items-center justify-between">
                        <label className="block text-gray-700 mx-2">
                          New Customer?
                        </label>
                        <button
                          type="submit"
                          className="p-2 bg-blue-500 text-white rounded-md"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                    <hr className="my-2 border-gray-300" />
                    <ul>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <Image
                          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                          alt="My Profile"
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                        My Profile
                      </li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <Image
                          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg"
                          alt="Flipkart Plus Zone"
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                        Flipkart Plus Zone
                      </li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <Image
                          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg"
                          alt="Orders"
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                        Orders
                      </li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <Image
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                          alt="Wishlist"
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                        Wishlist
                      </li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <Image
                          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg"
                          alt="Rewards"
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                        Rewards
                      </li>
                      <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                        <Image
                          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg"
                          alt="Gift Cards"
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                        Gift Cards
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative flex items-center space-x-1 text-black">
              <Link href="/cart">
                <button
                  className="flex items-center space-x-1 text-black"
                  type="button"
                >
                  <ShoppingCartIcon className="h-5 w-5 text-gray-600" />
                  <span>Cart</span>
                </button>
              </Link>
            </li>
            <li className="flex items-center space-x-1 text-black">
              <UserAddIcon className="h-5 w-5 text-gray-600" />
              <span>Become a Seller</span>
            </li>
            <div className="relative flex hover:bg-slate-100 hover:border-2 hover:border-gray-200 p-2 hover:rounded-md group">
              <Image
                className=" text-black"
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
                alt="Three Dots"
                width={22}
                height={22}
              />
              <div
                id="dropdownHoverThreeDots"
                className="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-56 group-hover:block"
                style={{ top: "100%", right: "0", zIndex: 50 }}
              >
                <ul
                  className="py-2 text-[14px] text-gray-700"
                  aria-labelledby="dropdownHoverThreeDots"
                >
                  <li>
                    <a href="#" className="flex px-4 py-2 hover:bg-gray-100">
                      <Image
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg"
                        alt="Notification preferences"
                        width={20}
                        height={20}
                      />
                      <span className="pl-2">Notification preferences</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex px-4 py-2 hover:bg-gray-100">
                      <Image
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg"
                        alt="24x7 Customer Care"
                        width={20}
                        height={20}
                      />
                      <span className="pl-2">24x7 Customer Care</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex px-4 py-2 hover:bg-gray-100">
                      <Image
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg"
                        alt="Advertise"
                        width={20}
                        height={20}
                      />
                      <span className="pl-2">Advertise</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex px-4 py-2 hover:bg-gray-100">
                      <Image
                        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg"
                        alt="Download"
                        width={20}
                        height={20}
                      />
                      <span className="pl-2">Download</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
