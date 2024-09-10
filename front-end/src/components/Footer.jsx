import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Ea Lorem officia occaecat ea id aute proident. Incididunt pariatur
            sint commodo mollit irure ipsum magna veniam minim cupidatat in
            reprehenderit aliqua. Commodo ullamco veniam consequat eu. Cupidatat
            non deserunt ex dolore occaecat excepteur nisi et magna voluptate
            enim labore exercitation velit. Anim elit veniam minim culpa ipsum
            laborum aliquip. Voluptate aliquip non dolor laborum sint et culpa
            culpa ullamco. Cillum nulla voluptate incididunt aute fugiat ullamco
            adipisicing velit.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="#">Delivery</Link>
            </li>
            <li>
              <Link to="#">Privacy policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-12839718231231</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ phong.com - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
