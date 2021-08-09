import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { dataStat } from "../datas/dataStat";
import Winner from "../images/winner.png";
import Seo from "../components/Seo";

function Home() {
  return (
    <div className="h-screen">
      <Seo title="STKIP Muhammadiyah Kuningan" />
      <Header />
      <div className="relative">
        <img
          src="https://i.ibb.co/Pwc98xp/6386-min.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt="bg-private"
        />
        <section className="relative text-gray-400 bg-primary bg-opacity-75 body-font">
          <div className="px-10 mx-auto">
            <div className="pt-20 pb-5">
              <p className="text-white font-bold text-5xl flex flex-col items-center mt-10">
                <span>Pemilihan Umum Raya</span>
              </p>
              <p className="text-white text-lg flex flex-col items-center py-5">
                Pemilihan Presiden dan Wakil Presiden Badan Eksekutif Mahasiswa
                STKIP Muhammadiyah Kuningan 2021-2022.
                <div className="mt-5 w-full md:w-1/4 inline-flex items-center bg-white leading-none text-black rounded-full p-2 shadow text-teal text-sm">
                  <span className="inline-flex bg-info text-white rounded-full h-6 px-3 justify-center items-center">
                    Informasi
                  </span>
                  <span className="inline-flex px-2">
                    Pemilihan sudah berakhir.
                  </span>
                </div>
              </p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#E0E7FF"
              fill-opacity="1"
              d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </section>
      </div>
      {/* 
      <section>
        <div className="flex flex-col items-start px-5 pb-20 mx-auto lg:items-center md:flex-row lg:px-28">
          <div className="w-full mb-10 lg:w-7/8 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center"
              alt="hero"
              src={Winner}
            />
          </div>
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-primary lg:text-5xl title-font">
              {" "}
              Pasangan Terpilih
            </h1>
            <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
              <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
                <div className="flex-grow">
                  <h2 className="mb-3 text-xl font-medium tracking-tighter text-gray-700 title-font">
                    {" "}
                    Handika Rahmat Utama
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Presiden Badan Eksekutif Mahasiswa STKIP Muhammadiyah
                    Kuningan
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
                <div className="flex-grow">
                  <h2 className="mb-3 text-xl font-medium tracking-tighter text-gray-700 title-font">
                    {" "}
                    Muhammad Abdul Aziz
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Wakil Presiden Badan Eksekutif Mahasiswa STKIP Muhammadiyah
                    Kuningan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font my-5" id="result">
        <div className="container px-5 pb-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">
              Hasil Pemilihan
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-700">
              Rekapitulasi Hasil Pemilihan Presiden dan Wakil Presiden Badan
              Eksekutif Mahasiswa STKIP Muhammadiyah Kuningan 2021-2022.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            {dataStat.map((stat) => (
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full" key={stat.title}>
                <div className="px-4 py-6 rounded-lg bg-white shadow-lg">
                  <h2 className="title-font font-medium text-3xl text-black">
                    {stat.value.toLocaleString()}
                  </h2>
                  <p className="leading-relaxed">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}

export default Home;
