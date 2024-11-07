import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import storeLogo from "../assets/images/storeLogo.png";
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Footer = () => {
  return (
    <div className="bg-orange-500 text-white">
      {/* <!-- Top part --> */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap -mx-4">
          {/* <!-- Menu 1 --> */}
          <div className="w-full sm:w-1/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul>
              <li>
                <a href="/shop.html" className="hover:text-primary">
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/single-product-page.html"
                  className="hover:text-primary"
                >
                  Women
                </a>
              </li>
              <li>
                <a href="/shop.html" className="hover:text-primary">
                  Men
                </a>
              </li>
              <li>
                <a
                  href="/single-product-page.html"
                  className="hover:text-primary"
                >
                  Shoes
                </a>
              </li>
              <li>
                <a
                  href="/single-product-page.html"
                  className="hover:text-primary"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Menu 2 --> */}
          <div className="w-full sm:w-1/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul>
              <li>
                <a href="/shop.html" className="hover:text-primary">
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/single-product-page.html"
                  className="hover:text-primary"
                >
                  Product
                </a>
              </li>
              <li>
                <a href="/checkout.html" className="hover:text-primary">
                  Checkout
                </a>
              </li>
              <li>
                <a href="/404.html" className="hover:text-primary">
                  404
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Menu 3 --> */}
          <div className="w-full sm:w-1/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul>
              <li>
                <a href="/cart" className="hover:text-primary">
                  Cart
                </a>
              </li>
              <li>
                <a href="/register" className="hover:text-primary">
                  Registration
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-primary">
                  Login
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Social Media --> */}
          <div className="w-full sm:w-1/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul>
              <li className="flex items-center mb-2">
                <FacebookIcon />
                <a href="#" className="hover:text-primary">
                  Facebook
                </a>
              </li>
              <li className="flex items-center mb-2">
                <XIcon />
                <a href="#" className="hover:text-primary">
                  Twitter
                </a>
              </li>
              <li className="flex items-center mb-2">
                <InstagramIcon />
                <a href="#" className="hover:text-primary">
                  Instagram
                </a>
              </li>
              <li className="flex items-center mb-2">
                <YouTubeIcon />
                <a href="#" className="hover:text-primary">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Contact Information --> */}
          <div className="w-full sm:w-2/6 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>
              <img src={storeLogo} alt="Logo" className=" mb-4" />
            </p>
            <p>Lalitpur, Imadol</p>
            <p className="text-xl font-bold my-4">Phone: 98425*****</p>
            <a href="mailto:info@company.com" className="underline">
              Email: dipenstha.work@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Bottom part --> */}
      <div className="py-6 border-t border-gray-line bg-zinc-900">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-white">
          {/* <!-- Copyright and Links --> */}
          <div className="w-full lg:w-3/4 text-center lg:text-left mb-4 lg:mb-0">
            <p className="mb-2 font-bold">
              &copy; 2024 EStore by Dipen Shrestha. All rights reserved.
            </p>
            <ul className="flex justify-center lg:justify-start space-x-4 mb-4 lg:mb-0">
              <li>
                <a href="#" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
            <p className="text-sm mt-4">A Demo Ecommerce Project on reactjs.</p>
          </div>
          {/* <!-- Payment Icons --> */}
          <div className="w-full lg:w-1/4 text-center lg:text-right flex justify-end gap-4">
            <PaymentIcon/>
            <PaymentsIcon/>
            <AccountBalanceWalletIcon/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
