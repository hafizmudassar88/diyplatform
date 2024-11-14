"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Images } from "../../../public/assets/Images";

function Footer() {
  return (
    <section className="font-madaniArabicMedium bg-primaryLight py-10 mt-16 px-4 md:px-0 text-primaryDark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 md:mx-24">
        <div className="flex flex-col  gap-5">
          <Image src={Images.logo} alt="ShwraLogo" width={120} />
          <p className="text-justify text-sm font-normal">
            A DIY (Do-It-Yourself) website builder is an online tool or platform
            that allows individuals or businesses to create and manage their
            websites without the need for extensive coding knowledge or
            professional web design services.
          </p>
          <div>
            <ul
              className="flex md:text-start md:flex-row flex-col gap-5 text-base"
              style={{ fontWeight: 300 }}
            >
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/services"}>Services</Link>
              <Link href={"/contact"}>Contact</Link>
              <p
                className="md:hidden text-lg mt-2 font-[madaniArabicMedium]"
                style={{ fontWeight: 300 }}
              >
                Download app
              </p>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:items-end mt-4">
          <div className="flex flex-col items-center gap-3">
            <p className="hidden md:block text-lg font-[madaniArabicMedium]">
              Download app
            </p>
            <div className="flex md:flex-col flex-row  md:justify-end gap-3 ">
              <Link target="_blank" href="">
                <Image
                  width={120}
                  height={120}
                  className="store-button"
                  src={Images.hwawei}
                  alt="Huwaei Store"
                />
              </Link>

              <Link target="_blank" href="">
                <Image
                  width={120}
                  height={120}
                  className="store-button"
                  src={Images.android}
                  alt="Android Store"
                />
              </Link>

              <Link target="_blank" href="">
                <Image
                  width={120}
                  height={120}
                  className="store-button"
                  src={Images.apple}
                  alt="Apple Store"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-x-10 pt-10 justify-center text-[#475467] text-sm w-full">
        <div className="flex gap-2">
          <p>923232323223</p>
          <Image
            className="object-contain"
            width={20}
            src={Images.message}
            alt="Phone Icon"
          />
        </div>
        <div className="flex gap-2">
          <p>info@diy.sa</p>
          <Image
            className="object-contain"
            width={20}
            src={Images.message}
            alt="Email Icon"
          />
        </div>
      </div>
      <div className="border-b border-[#F0E8D7] my-4"></div>
      <div
        className="flex md:flex-row flex-col-reverse justify-end md:justify-between items-center md:mx-24"
        dir="ltr"
      >
        <div className="">
          <p>&copy; 2024 DIY. All rights reserved.</p>
        </div>
        <div className="flex flex-row gap-8">
          <Link href="https://x.com/shwraApp" passHref>
            <Image
              className="object-contain"
              width={40}
              src={Images.x}
              alt="Twitter Logo"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/shwraapp/" passHref>
            <Image
              className="object-contain"
              width={40}
              src={Images.fb}
              alt="LinkedIn Logo"
            />
          </Link>

          <Link
            href="https://www.facebook.com/people/%D8%B4%D9%88%D8%B1%D9%89-Shwra/61553127944298/?mibextid=LQQJ4d"
            passHref
          >
            <Image
              className="object-contain"
              width={40}
              src={Images.fb}
              alt="Facebook Logo"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@shwraapp?is_from_webapp=1&sender_device=pc"
            passHref
          >
            <Image
              className="object-contain"
              width={40}
              src={Images.in}
              alt="Tiktok Logo"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
