"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/images/isaac-main.png";
import frontendIcon from "../../public/images/frontend-icon.png";
import backendIcon from "../../public/images/backend.png";
import apiDevIcon from "../../public/images/api-dev.png";
import houseSearchApp from "../../public/images/house-search-app.jpg";
import ecommerce from "../../public/images/ecommerce.png";
import jobPortal from "../../public/images/job-portal.png";
import email from "../../public/images/email.png";
import Location from "../../public/images/location.png";
import Telephone from "../../public/images/telephone.png";
import Linkedin from "../../public/images/linkedin.png";
import Twitter from "../../public/images/twitter.svg";
import Github from "../../public/images/github.svg";
import Technologies from "./components/technologies";
import Logo from "../../public/logo.svg";
import Button from "./components/button";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center bg-stone-100">
      {/* url(<path-to-image>), */}
      <div className="flex overflow-hidden relative flex-col self-stretch pb-12 w-full text-black fill-[linear-gradient(180deg,rgba(0,0,0,0.20)_0%,rgba(19,17,17,0.20)_100%),lightgray_590.203px_80px_/_46.934%_97.091%_no-repeat] min-h-[817px] max-md:min-h-fit max-md:max-w-full">
        {/* <img
          loading="lazy"
          srcSet="..."
          className="object-cover absolute inset-0 size-full"
        /> */}
        <div className="flex relative gap-5 justify-between pr-20 w-full text-2xl font-semibold whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <Image src={Logo} alt="Logo" className="aspect-[1.14] w-[82px]" />
          <div className="flex gap-5 justify-between self-end px-3 py-2 mt-7 font-semibold text-base max-md:hidden max-md:max-w-full">
            <a href="#home">
              <div className="grow text-green-600 underline">Home</div>
            </a>
            <a href="#about">
              <div>About</div>
            </a>
            <a href="#services">
              <div className="">Services</div>
            </a>
            <a href="#portfolio">
              <div className="">Portfolio</div>
            </a>
            <a href="#contact">
              <div className="">Contact</div>
            </a>
          </div>
          {open ? (
            <CloseIcon
              className="hidden max-md:block mt-7"
              fontSize="large"
              sx={{ color: "#058215" }}
              onClick={() => setOpen(!open)}
            />
          ) : (
            <DensityMediumIcon
              className="hidden max-md:block mt-7"
              fontSize="large"
              sx={{ color: "#058215" }}
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        {/* mobile design */}
        {open && (
          <div className="max-md:flex absolute z-50 flex-col gap-5 text-center font-semibold text-base my-20 max-md:py-5  max-md:w-full bg-green-600">
            <a onClick={() => setOpen(false)} href="#home">
              <div className="">Home</div>
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              <div>About</div>
            </a>
            <a href="#services" ocClick={() => setOpen(false)}>
              <div>Services</div>
            </a>
            <a href="#portfolio" onClick={() => setOpen(false)}>
              <div className="">Portfolio</div>
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              <div className="">Contact</div>
            </a>
          </div>
        )}
        <div
          id="home"
          className="flex  relative flex-col mt-48 mb-44 ml-40  max-md:ml-0 max-md:px-4 max-w-full text-xl font-bold w-[771px] max-md:mb-0"
        >
          <div className="font-light max-md:max-w-full">Hello I'm a,</div>
          <div className="mt-5 text-6xl text-green-600 max-md:max-w-full max-md:text-4xl">
            Software <span className="text-green-600">developer</span>
          </div>
          <div className="mt-6 max-md:max-w-full font-normal text-base">
            Hi I’m Isaac Maina a software developer based in Kenya. I offer
            software solutions in web and mobile applications.
            <br />
            Let’s turn your ideas into a market ready product.
          </div>
          <a href="#portfolio" className="w-fit">
            <Button>View portfolio</Button>
          </a>
        </div>
      </div>
      <div className="mt-28 w-full max-w-[1115px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              src={profile}
              alt="isaac maina profile picture"
              className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div
            id="about"
            className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
          >
            <div className="flex flex-col px-5 mt-1 font-bold max-md:mt-10 max-md:max-w-full">
              <div className="text-base font-light text-black max-md:max-w-full">
                What you should know about me
              </div>
              <div className="mt-2 text-5xl text-green-600 max-md:max-w-full max-md:text-4xl">
                About me
              </div>
              <div className="mt-8 text-lg font-normal text-black max-md:max-w-full">
                I'm a software developer with a Computer Science degree,
                specializing in web and mobile application development with the
                latest technologies. I'm always learning new stuff, especially
                in an industry that changes so rapidly. My passion lies in
                digital products, and through development, I've found a
                captivating way to be a part of that world. I'm deeply
                passionate about crafting software solutions that align with
                business needs. My greatest strength is my ability to interpret
                clients' requirements, design, code, and rigorously test
                software to ensure it meets their needs.
              </div>
              <div className="flex gap-5  mt-18 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <a href="#contact">
                  <Button>Contact</Button>
                </a>
                <Button bgColor="white">Download CV</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-44 text-base font-light text-center text-black whitespace-nowrap max-md:mt-10">
        What services do I offer
      </div>
      <div
        id="services"
        className="text-5xl font-bold text-center text-green-600 max-md:text-4xl"
      >
        Services
      </div>
      <div className="flex flex-col items-center self-stretch px-16 pb-12 mt-48 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex z-10 flex-col mt-0 mb-11 w-full max-w-[1120px] max-md:mb-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-4 py-7 w-full text-white bg-green-600 rounded-lg max-md:mt-5">
                  <Image
                    src={frontendIcon}
                    alt="frontend development service"
                    className="max-w-full aspect-square w-[100px]"
                  />
                  <div className="mt-6 text-xl font-bold whitespace-nowrap">
                    Frontend development
                  </div>
                  <div className="mt-6 text-base">
                    I create custom, responsive websites using React, Next.js,
                    Tailwind CSS, and MUI. I work closely with clients to
                    understand their needs, ensuring that the final product
                    exceeds their expectations.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-4 py-7 w-full bg-white rounded-lg text-neutral-900 max-md:mt-5">
                  <Image
                    src={backendIcon}
                    alt="backend development service"
                    className="max-w-full aspect-square w-[100px]"
                  />
                  <div className="mt-6 text-xl font-bold whitespace-nowrap">
                    Backend development
                  </div>
                  <div className="mt-6 text-base">
                    I develop full-stack applications using Django and Node.js,
                    tailored to each client's unique needs for high-quality
                    solutions that exceed their expectations.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-4 py-7 w-full text-white bg-green-600 rounded-lg max-md:mt-5">
                  <Image
                    src={apiDevIcon}
                    alt="API development service"
                    className="max-w-full aspect-square w-[100px]"
                  />
                  <div className="mt-6 text-xl font-bold">APIs development</div>
                  <div className="mt-6 text-base">
                    I develop custom API applications using Django REST
                    framework and Node.js, integrating other APIs to create
                    high-quality solutions that meet each client's unique needs.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="portfolio"
            className="flex gap-5 justify-between self-center mt-44 max-w-full text-center w-[736px] max-md:flex-wrap max-md:mt-10"
          >
            <div className="flex flex-col pt-1 pb-3 basis-0 max-md:text-center">
              <div className="text-base font-light text-black">My projects</div>
              <div className="mt-5 max-md:mt-1 text-5xl font-bold text-green-600 max-md:text-4xl">
                Portfolio
              </div>
            </div>
            <div className="flex gap-4 justify-between px-5 py-5 my-auto text-base font-medium whitespace-nowrap bg-stone-300 max-md:flex-wrap max-md:max-w-full">
              <div className="text-green-600 underline">All</div>
              <div className="flex-auto">Frontend</div>
              <div className="flex-auto">Backend</div>
              <div className="grow">APIs</div>
            </div>
          </div>
          <div className="mt-28 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow w-full bg-white rounded-lg max-md:mt-5">
                  <div className="flex overflow-hidden relative flex-col items-start pt-12 pr-16 w-full aspect-[1.29] max-md:pr-5">
                    <Image
                      src={ecommerce}
                      alt="ecommerce website"
                      className="object-cover absolute inset-0 size-full"
                    />
                    {/* <div className="flex relative flex-col items-center px-5 pt-2.5 pb-4 mt-40 aspect-square bg-neutral-900 h-[63px] w-[63px] max-md:mt-10">
                      <Image
                        src={ecommerce}
                        alt="ecommerce website"
                        className="w-full aspect-[0.81]"
                      />
                    </div> */}
                  </div>
                  <div className="flex flex-col px-4 pt-px pb-4 mt-5 font-bold text-black">
                    <div className="text-xl">Ecommerce website</div>
                    <div className="mt-2 text-sm font-normal">
                      Django e-commerce platform with integrated Stripe payment
                      gateway, optimized performance through asynchronous tasks
                      using RabbitMQ and Celery, and introduced a coupon system
                      for user discounts.
                    </div>
                    <a href="https://github.com/isaacmain254/ecommerce" target="_blank">
                      <Button>View source</Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow w-full font-bold text-black bg-white rounded-lg max-md:mt-5">
                  <Image
                    src={jobPortal}
                    alt="Job posting system"
                    className="w-full aspect-[1.28]"
                  />
                  <div className="flex flex-col px-4 pt-px pb-4 mt-5">
                    <div className="text-xl">Freelance job portal</div>
                    <div className="mt-2 text-sm font-normal">
                      Developed a user-friendly job posting system in Django,
                      featuring role-based authentication for clients to post
                      jobs and freelancers to apply, and integrated Channels and
                      Websockets for real-time chat between users.
                    </div>
                    <a
                      href="https://github.com/isaacmain254/Workpay"
                      target="_blank"
                    >
                      <Button>View source</Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col w-full bg-white rounded-lg max-md:mt-5">
                  <div className="flex overflow-hidden relative flex-col items-end pt-12 pl-16 w-full aspect-[1.29] max-md:pl-5">
                    <Image
                      src={houseSearchApp}
                      alt="House search mobile application"
                      className="object-cover absolute inset-0 size-full"
                    />
                    {/* <div className="relative mt-40 bg-neutral-900 h-[63px] w-[63px] max-md:mt-10" /> */}
                  </div>
                  <div className="flex flex-col px-4 pt-px pb-4 mt-5 font-bold text-black">
                    <div className="text-xl whitespace-nowrap">
                      House searching mobile app
                    </div>
                    <div className="mt-2 text-sm font-normal">
                      A dynamic house-searching mobile app with React Native and
                      Firebase, utilizing Firebase for real-time data
                      synchronization, optimizing performance, and implementing
                      efficient house registration and search features.
                    </div>
                    <a
                      href="https://github.com/isaacmain254/house-search-mobile-app"
                      target="_blank"
                    >
                      <Button>View source</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-base font-light text-center text-black whitespace-nowrap max-md:mt-10">
        What technologies do i use
      </div>
      <div className="text-5xl font-bold text-center text-green-600 max-md:text-4xl">
        Technologies
      </div>

      <Technologies />
      <div className="flex overflow-hidden relative flex-col items-center self-stretch px-16 pt-12 pb-5 mt-24 w-full fill-green-600 min-h-[808px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad907ab9aa9287234c8968ebadda34579517ead9108f76388ce249359cb09de5?"
          className="object-cover absolute inset-0 size-full"
        /> */}
        <div className="flex relative flex-col mt-7 w-full max-w-[1128px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div
                  id="contact"
                  className="flex flex-col text-xl text-neutral-900 max-md:mt-3 max-md:max-w-full"
                >
                  <div className="self-end max-md:self-center text-base font-light text-center">
                    Get in touch
                  </div>
                  <div className="self-end max-md:self-center text-5xl font-bold text-center max-md:text-4xl">
                    Contact
                  </div>
                  <div className="mt-14 text-lg font-bold max-md:mt-10 max-md:max-w-full">
                    Send me an email
                  </div>
                  <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                    Name
                  </div>
                  <div className="shrink-0 mt-5 bg-neutral-900 h-[3px] max-md:max-w-full" />
                  <div className="mt-8 max-md:max-w-full">Email</div>
                  <div className="shrink-0 mt-5 bg-neutral-900 h-[3px] max-md:max-w-full" />
                  <div className="mt-5 max-md:max-w-full">Subject</div>
                  <div className="shrink-0 mt-3.5 bg-neutral-900 h-[3px] max-md:max-w-full" />
                  <div className="mt-8 max-md:max-w-full">Message</div>
                  <div className="shrink-0 mt-3.5 bg-neutral-900 h-[3px] max-md:max-w-full" />
                  <div className="justify-center self-start px-4 py-3.5 mt-14 text-2xl font-bold text-white whitespace-nowrap rounded-lg bg-neutral-900 max-md:mt-10">
                    Send message
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-start px-20 py-12 mt-36 w-full text-lg font-noral bg-white text-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between mt-3.5 whitespace-nowrap">
                    <Image
                      src={Location}
                      alt="Location"
                      className="self-start w-12 aspect-square"
                    />
                    <div className="flex flex-col flex-1">
                      <div>Location</div>
                      <div className="mt-2">Nairobi, kenya</div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-14 max-md:mt-10">
                    <Image
                      src={Telephone}
                      alt="telephone"
                      className="self-start w-14 aspect-[1.19] fill-black"
                    />
                    <div className="flex flex-col flex-1">
                      <div>mobile number</div>
                      <div className="mt-2">0748923894</div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-14 whitespace-nowrap max-md:mt-10">
                    <Image
                      src={email}
                      alt="email"
                      className="self-start w-12 aspect-square"
                    />
                    <div className="flex flex-col flex-1">
                      <div>Email</div>
                      <div className="mt-2">isaacmain72@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between">
              <Image
                src={Linkedin}
                alt="Linkedin"
                className="aspect-square fill-black w-[35px]"
              />
              <Image
                src={Twitter}
                alt="Twitter"
                className="aspect-square w-[35px]"
              />
              <Image
                src={Github}
                alt="Github"
                className="aspect-square w-[35px]"
              />
            </div>
            {/* flex-auto my-auto text-base font-bold text-neutral-900 */}
            <div className="text-xs">
              © 2022 All rights reserved   made with ♥ by Isaac
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
