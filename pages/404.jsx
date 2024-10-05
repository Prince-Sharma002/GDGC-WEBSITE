import Link from "next/link";
import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import Image from "next/image";
import Illustration from "../assets/NotFound.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Custom404() {
  return (
    <>
      {" "}
      <Head>
        <title>404 | Page not found</title>
      </Head>
      <div className="overflow-hidden">
        <Navbar />
        <section className="bg-white">
          <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
            <div className="wf-ull lg:w-1/2">
              <p className="text-sm font-medium text-blue-500">
                404 error
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
                Page not found
              </h1>
              <p className="mt-4 text-gray-500">
                Sorry, the page you are looking for doesn&apos;t exist. Here&apos;s
                what you can do meanwhile:
              </p>

              <div className="flex items-center mt-6 gap-x-3">
                <Link href="">
                  <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 hover:text-gray-200">
                    <ArrowLeftIcon className="h-5 w-5" />

                    <span>Go back</span>
                  </button>
                </Link>

                <Link href="/" replace>
                  {" "}
                  <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600">
                    Take me home
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
              <Image
                className="w-full max-w-lg lg:mx-auto"
                src={Illustration}
                alt=""
              >
              </Image>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
