import React from "react";
import Image from "next/image";
// Assets
import Yorky from "../../public/assets/images/Grumpy404.png";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmergency } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
// Components
import ContactItem from "./ContactItem";
import Form from "./Form";

const AppointmentForm = () => {
  // const submitErrorHandler = (error) => {
  //   console.log(error);
  // };

  return (
    //
    <section className="w-full col-start-1 col-end-9 lg:grid lg:grid-cols-3 lg:grid-rows-[50vh_minmax(50vh,_1fr)] flex-wrap ">
      {/* FORM */}
      <Form />

      {/* QUICK CONTACT  */}
      <div className=" bg-[#1F6B6B] flex flex-col justify-between items-center py-10 col-start-3 col-span-1 row-span-2 sm:pl-[9rem] lg:pl-0 ">
        <div className=" flex flex-col items-center mt-10 p-8">
          <h1 className="text-white text-3xl font-semibold mb-5">
            Quick Contact
          </h1>
          <ul className="text-white ">
            <ContactItem>
              <BsTelephone size={20} />
              <p>+57 (000) 000-000</p>
            </ContactItem>
            <ContactItem>
              <MdOutlineEmergency size={22} />
              <p>Contact Vet-Teams</p>
            </ContactItem>
            <ContactItem>
              <Ri24HoursFill size={22} />
              <p>Open 24/7</p>
            </ContactItem>
            <ContactItem>
              <TiLocation size={25} />
              <p>Some address - 123</p>
            </ContactItem>
          </ul>
        </div>
        <div className="max-w-md">
          <Image src={Yorky} />
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
