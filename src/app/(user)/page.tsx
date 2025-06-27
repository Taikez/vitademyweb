"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { FaDiscord, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const socialLinks = [
  { icon: <FaDiscord />, url: "https://dsc.gg/vitademy", color: "#5865F2" },
  { icon: <FaWhatsapp />, url: "https://wa.me", color: "#25D366" },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/vitademy.official",
    color: "#E4405F",
  },
  { icon: <SiX />, url: "https://x.com", color: "#000000" },
];

const learningModules = [
  {
    imageURL: "/free_modules.jpg",
    title: "Demo Module 1",
    createdDate: "March 26, 2025",
    creatorName: "Julian Nardita",
  },
  {
    imageURL: "/free_modules.jpg",
    title: "Demo Module 2",
    createdDate: "March 26, 2025",
    creatorName: "Julian Nardita",
  },
  {
    imageURL: "/free_modules.jpg",
    title: "Demo Module 3",
    createdDate: "March 26, 2025",
    creatorName: "Julian Nardita",
  },
  {
    imageURL: "/free_modules.jpg",
    title: "Demo Module 4",
    createdDate: "March 26, 2025",
    creatorName: "Julian Nardita",
  },
  {
    imageURL: "/free_modules.jpg",
    title: "Demo Module 5",
    createdDate: "March 26, 2025",
    creatorName: "Julian Nardita",
  },
  {
    imageURL: "/free_modules.jpg",
    title: "Demo Module 6",
    createdDate: "March 26, 2025",
    creatorName: "Julian Nardita",
  },
  {
    imageURL: "/free_modules.jpg",
    title: "Demo Module 7",
    createdDate: "March 26, 2025",
    creatorName: "Julian Nardita",
  },
  {
    imageURL: "/free_modules.jpg",
    title: "Demo Module 8",
    createdDate: "March 26, 2025",
    creatorName: "Julian Nardita",
  },
  {
    imageURL: "/free_modules.jpg",
    title: "Demo Module 9",
    createdDate: "March 26, 2025",
    creatorName: "Julian Nardita",
  },
];

export default function Home() {
  return (
    <div>
      <div className="w-full h-[50vw] lg:h-[25vw] relative">
        <Image
          src="/logo-desktop.png"
          alt="Vitademy Logo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        ></Image>
      </div>
      <div className="px-5 md:px-20 py-10">
        <div className="flex flex-col gap-24">
          <section className="flex flex-col gap-3 items-center">
            <ReactTyped
              className="flex justify-center items-center text-xl text-[#6946a1] dark:text-[#B48EF0]"
              strings={["Vitademy.", "ヴィタデミー.", "비타데미."]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            <p className="text-center font-black text-4xl">
              Welcome to Vitademy
            </p>
            <p className="text-center text-[#7a7a7a] dark:text-[#8C8C8C]">
              A great space to ask.
            </p>
            <Button className="w-50 mt-5">Get Started</Button>
          </section>
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <Link href="/learn/articles">
              <div className="lg:flex items-center gap-3.5 lg:flex-row lg:text-start text-center flex flex-col [&_.body]:text-center group">
                <div className="header relative grid aspect-square size-[5em] shrink-0 place-items-center rounded-2xl border shadow-svg-button-link transition-all duration-200 group-hover:shadow-svg-button-link-hover group-hover:transition-all group-hover:duration-200 group-focus:shadow-none group-focus:transition-all group-focus:duration-200">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 ease-in-out transform origin-center group-hover:scale-110 group-hover:rotate-[10deg] group-hover:stroke-[#A855F7] dark:group-hover:stroke-[#e3cff8]"
                  >
                    <path
                      d="M3 5H21V19H3V5Z"
                      stroke="currentColor"
                      className="text-[#6A0DAD] dark:text-[#D8B4FE] group-hover:text-[#A855F7] dark:group-hover:text-[#e3cff8]"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 8H17M7 12H12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-lg text-[#6A0DAD] dark:text-[#D8B4FE] transition-all group-hover:text-[#A855F7] dark:group-hover:text-[#e3cff8]">
                    Browse Articles
                  </p>
                  <p>Explore topics that interest you.</p>
                </div>
              </div>
            </Link>
            <Link href="/learn/modules">
              <div className="lg:flex items-center gap-3.5 lg:flex-row lg:text-start text-center flex flex-col [&_.body]:text-center group">
                <div className="header relative grid aspect-square size-[5em] shrink-0 place-items-center rounded-2xl border shadow-svg-button-link transition-all duration-200 group-hover:shadow-svg-button-link-hover group-hover:transition-all group-hover:duration-200 group-focus:shadow-none group-focus:transition-all group-focus:duration-200">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 ease-in-out transform origin-center group-hover:scale-110 group-hover:rotate-[10deg] group-hover:stroke-[#FBBF24] dark:group-hover:stroke-[#fcd34d]"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#F59E0B"
                      strokeWidth="2"
                      className="group-hover:stroke-[#FBBF24] dark:group-hover:stroke-[#fcd34d]"
                    />
                    <path
                      d="M12 8V12L15 14"
                      stroke="#F59E0B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="group-hover:stroke-[#FBBF24] dark:group-hover:stroke-[#fcd34d]"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-lg text-[#F59E0B] transition-all group-hover:text-[#FBBF24] dark:group-hover:text-[#FCD34D]">
                    Interactive Modules
                  </p>
                  <p>Learn through fun activities.</p>
                </div>
              </div>
            </Link>
            <Link href="/learn/challenges">
              <div className="lg:flex items-center gap-3.5 lg:flex-row lg:text-start text-center flex flex-col [&_.body]:text-center group">
                <div className="header relative grid aspect-square size-[5em] shrink-0 place-items-center rounded-2xl border shadow-svg-button-link transition-all duration-200 group-hover:shadow-svg-button-link-hover group-hover:transition-all group-hover:duration-200 group-focus:shadow-none group-focus:transition-all group-focus:duration-200">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 ease-in-out transform origin-center group-hover:scale-110 group-hover:rotate-[10deg] group-hover:stroke-[#10B981] dark:group-hover:stroke-[#6EE7B7]"
                  >
                    <path
                      d="M8 12L12 4L16 12"
                      stroke="#10B981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="group-hover:stroke-[#10B981] dark:group-hover:stroke-[#6EE7B7]"
                    />
                    <circle
                      cx="12"
                      cy="16"
                      r="2"
                      fill="#10B981"
                      className="group-hover:stroke-[#10B981] dark:group-hover:stroke-[#6EE7B7]"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-lg text-[#10B981] transition-all group-hover:text-[#34D399] dark:group-hover:text-[#6EE7B7]">
                    Complete Challenges
                  </p>
                  <p>Test your skills with puzzles.</p>
                </div>
              </div>
            </Link>
            <Link href="/event/workshops">
              <div className="lg:flex items-center gap-3.5 lg:flex-row lg:text-start text-center flex flex-col [&_.body]:text-center group">
                <div className="header relative grid aspect-square size-[5em] shrink-0 place-items-center rounded-2xl border shadow-svg-button-link transition-all duration-200 group-hover:shadow-svg-button-link-hover group-hover:transition-all group-hover:duration-200 group-focus:shadow-none group-focus:transition-all group-focus:duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="40"
                    height="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 ease-in-out transform origin-center group-hover:scale-110 group-hover:rotate-[10deg] group-hover:stroke-[#2563EB] dark:group-hover:stroke-[#DBEAFE]"
                  >
                    <rect
                      x="4"
                      y="10"
                      width="56"
                      height="36"
                      rx="4"
                      ry="4"
                      fill="#DBEAFE"
                    />
                    <path d="M10 16h44M10 24h44M10 32h28" stroke="#2563EB" />
                    <circle cx="52" cy="32" r="3" fill="#2563EB" />
                    <path d="M10 40h44" stroke="#2563EB" />
                    <circle cx="20" cy="52" r="4" fill="#2563EB" />
                    <circle cx="32" cy="52" r="4" fill="#2563EB" />
                    <circle cx="44" cy="52" r="4" fill="#2563EB" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-lg text-[#2563EB] dark:text-[#93C5FD] transition-all group-hover:text-[#3B82F6] dark:group-hover:text-[#DBEAFE]">
                    Join Our Workshops
                  </p>
                  <p>Learn and collaborate in groups.</p>
                </div>
              </div>
            </Link>
          </section>
          <section className="hidden md:grid md:grid-cols-3 md:gap-10">
            <div className="flex flex-col gap-5">
              <div className="w-fit rounded-full bg-[#e3d4fa] dark:bg-[#3c2661] px-4 py-0 text-sm uppercase text-[#3c2661] dark:text-[#e3d4fa]">
                Learning Hub
              </div>
              <h1 className="text-6xl font-black">
                Change your perspective about learning.
              </h1>
            </div>
            <div className="col-span-2 from-20% to-60% from-[#9f6cf0]/10 to-[#9f6cf0]/5 dark:from-[#7d5bb5]/20 dark:to-[#7d5bb5]/10 border-[#7d5bb5]/10 bg-gradient-to-b rounded-2xl border-2 p-10 grid grid-cols-2 gap-16">
              <div>
                <Image
                  src="/omnidirectional_learning.jpg"
                  alt="Omnidirectional Learning"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                ></Image>
              </div>
              <div className="flex flex-col gap-10">
                <h2 className="text-3xl font-black">
                  Omnidirectional Learning: A 360° Approach to Education
                </h2>
                <p className="text-justify">
                  Omnidirectional learning helps you learn in different ways —
                  using fun methods, real-life examples, and creative thinking
                  to understand things better and solve problems easily.
                </p>
                <Link href="">
                  <Button>Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="col-span-2 from-20% to-60% from-[#7efca0]/10 to-[#7efca0]/5 dark:from-[#5cff88]/20 dark:to-[#5cff88]/10 border-[#5cff88]/10 bg-gradient-to-b rounded-2xl border-2 p-10 grid grid-cols-2 gap-16">
              <div className="flex flex-col gap-10">
                <h2 className="text-3xl font-black">
                  Free Modules: Explore our content at no cost – no strings
                  attached!
                </h2>
                <p className="text-justify">
                  Get started with our free modules and dive into a range of
                  lessons, activities, and resources — all at no cost. It's a
                  great way to start learning and discovering new ideas!
                </p>
                <Link href="/learn/modules">
                  <Button>Start Learning</Button>
                </Link>
              </div>
              <div>
                <Image
                  src="/free_modules.jpg"
                  alt="Free Modules"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                ></Image>
              </div>
            </div>
            <div className="row-span-2 from-20% to-60% from-[#c7106c]/10 to-[#c7106c]/5 dark:from-[#bf2a75]/20 dark:to-[#bf2a75]/10 border-[#bf2a75]/10 bg-gradient-to-b rounded-2xl border-2 p-10">
              <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-5">
                  <h2 className="text-3xl font-black">Join Our Events</h2>
                  <p className="text-justify">
                    Connect, learn, and grow with like-minded individuals
                    through our engaging events and workshops.
                  </p>
                  <Link href="/event/workshops">
                    <Button>I'm Interested</Button>
                  </Link>
                </div>
                <div>
                  <Image
                    src="/education_event.jpg"
                    alt="Education Event"
                    width={400}
                    height={400}
                    className="rounded-2xl"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="col-span-2 from-20% to-60% from-[#9f6cf0]/10 to-[#9f6cf0]/5 dark:from-[#7d5bb5]/20 dark:to-[#7d5bb5]/10 border-[#7d5bb5]/10 bg-gradient-to-b rounded-2xl border-2 p-10 grid grid-cols-2 gap-16">
              <div>
                <Image
                  src="/one_on_one.jpg"
                  alt="One on One Consulting"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                ></Image>
              </div>
              <div className="flex flex-col gap-10">
                <h2 className="text-3xl font-black">
                  One-on-One Consultations
                </h2>
                <p className="text-justify">
                  Connect with our friendly consultants for personalized
                  guidance. Whether you have questions or need direction, we're
                  here to help you every step of the way.
                </p>
                <Link href="">
                  <Button>Meet Our Consultors</Button>
                </Link>
              </div>
            </div>
            <div className="col-span-3 from-20% to-60% from-[#3492eb]/10 to-[#3492eb]/5 dark:from-[#17558f]/20 dark:to-[#7d5bb5]/10 border-[#17558f]/10 bg-gradient-to-b rounded-2xl border-2 p-15 grid grid-cols-2">
              <div className="flex flex-col gap-10">
                <h2 className="text-3xl font-black">
                  Virtual Classes: Learn Anytime, Anywhere
                </h2>
                <p className="text-justify">
                  Our virtual classes give you the freedom to learn on your own
                  schedule. Whether you're an early bird or a night owl, you can
                  access lessons, resources, and interactive sessions from the
                  comfort of your home — or anywhere you choose.
                </p>
                <Button className="w-50">Learn Now</Button>
              </div>
              <div className="flex justify-end items-center">
                <Image
                  src="/virtual_class.jpg"
                  alt="Virtual Classes"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                ></Image>
              </div>
            </div>
          </section>

          {/* Mobile Learning Hub */}
          <section className="grid grid-cols-1 gap-10 md:hidden">
            <div className="flex flex-col gap-5">
              <div className="w-fit rounded-full bg-[#e3d4fa] dark:bg-[#3c2661] px-4 py-0 text-sm uppercase text-[#3c2661] dark:text-[#e3d4fa]">
                Learning Hub
              </div>
              <h1 className="text-5xl font-black md:text-6xl">
                Change your perspective about learning.
              </h1>
            </div>

            <div className="col-span-2 block md:hidden">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className="rounded-2xl"
              >
                <SwiperSlide>
                  <div className="h-[900px] from-[#9f6cf0]/10 to-[#9f6cf0]/5 dark:from-[#7d5bb5]/20 dark:to-[#7d5bb5]/10 border-[#7d5bb5]/10 bg-gradient-to-b rounded-2xl border-2 p-10">
                    <div className="flex flex-col gap-10 h-full">
                      <Image
                        src="/omnidirectional_learning.jpg"
                        alt="Omnidirectional Learning"
                        width={400}
                        height={400}
                        className="rounded-2xl"
                      />
                      <h2 className="text-3xl font-black">
                        Omnidirectional Learning: A 360° Approach to Education
                      </h2>
                      <p>
                        Omnidirectional learning helps you learn in different
                        ways — using fun methods, real-life examples, and
                        creative thinking to understand things better and solve
                        problems easily.
                      </p>
                      <Link href="">
                        <Button>Learn More</Button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="h-[900px] from-[#7efca0]/10 to-[#7efca0]/5 dark:from-[#5cff88]/20 dark:to-[#5cff88]/10 border-[#5cff88]/10 bg-gradient-to-b rounded-2xl border-2 p-10">
                    <div className="flex flex-col gap-10 h-full">
                      <Image
                        src="/free_modules.jpg"
                        alt="Free Modules"
                        width={400}
                        height={400}
                        className="rounded-2xl"
                      />
                      <h2 className="text-3xl font-black">
                        Free Modules: Explore our content at no cost – no
                        strings attached!
                      </h2>
                      <p>
                        Get started with our free modules and dive into a range
                        of lessons, activities, and resources — all at no cost.
                        It's a great way to start learning and discovering new
                        ideas!
                      </p>
                      <Link href="/learn/modules">
                        <Button>Start Learning</Button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="h-[900px] from-[#c7106c]/10 to-[#c7106c]/5 dark:from-[#bf2a75]/20 dark:to-[#bf2a75]/10 border-[#bf2a75]/10 bg-gradient-to-b rounded-2xl border-2 p-10">
                    <div className="flex flex-col gap-10 h-full">
                      <Image
                        src="/education_event.jpg"
                        alt="Education Event"
                        width={400}
                        height={400}
                        className="rounded-2xl"
                      />
                      <h2 className="text-3xl font-black">Join Our Events</h2>
                      <p>
                        Connect, learn, and grow with like-minded individuals
                        through our engaging events and workshops.
                      </p>
                      <Link href="/event/workshops">
                        <Button>I'm Interested</Button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[900px] from-[#9f6cf0]/10 to-[#9f6cf0]/5 dark:from-[#7d5bb5]/20 dark:to-[#7d5bb5]/10 border-[#7d5bb5]/10 bg-gradient-to-b rounded-2xl border-2 p-10">
                    <div className="flex flex-col gap-10 h-full">
                      <Image
                        src="/one_on_one.jpg"
                        alt="One on One Consultation"
                        width={400}
                        height={400}
                        className="rounded-2xl"
                      />
                      <h2 className="text-3xl font-black">
                        One-on-One Consultations
                      </h2>
                      <p className="text-justify">
                        Connect with our friendly consultants for personalized
                        guidance. Whether you have questions or need direction,
                        we're here to help you every step of the way.
                      </p>
                      <Link href="">
                        <Button>Meet Our Consultors</Button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-[900px] from-[#3492eb]/10 to-[#3492eb]/5 dark:from-[#17558f]/20 dark:to-[#7d5bb5]/10 border-[#17558f]/10 bg-gradient-to-b rounded-2xl border-2 p-10">
                    <div className="flex flex-col gap-10 h-full">
                      <Image
                        src="/virtual_class.jpg"
                        alt="Virtual Class"
                        width={400}
                        height={400}
                        className="rounded-2xl"
                      />
                      <h2 className="text-3xl font-black">
                        Virtual Classes: Learn Anytime, Anywhere
                      </h2>
                      <p className="text-justify">
                        Our virtual classes give you the freedom to learn on
                        your own schedule. Whether you're an early bird or a
                        night owl, you can access lessons, resources, and
                        interactive sessions from the comfort of your home — or
                        anywhere you choose.
                      </p>
                      <Link href="">
                        <Button>Learn Now</Button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <section>
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-extrabold">Top Modules</h1>
              <p className="text-lg mb-5">
                Our top learning modules recommended for you
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
                Swipe me →
              </p>
              <div className="w-full">
                <Swiper
                  className="cursor-grab active:cursor-grabbing"
                  modules={[Scrollbar]}
                  spaceBetween={20}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {learningModules.map((learningModule, index) => (
                    <SwiperSlide key={index}>
                      <Link href="" className="group">
                        <div className="flex flex-col">
                          <div className="relative overflow-hidden rounded-2xl">
                            <Image
                              src={learningModule.imageURL}
                              alt="Learning Module Thumbnail"
                              width={400}
                              height={200}
                              className="rounded-2xl ease-in-out duration-200 group-hover:scale-110"
                            ></Image>
                          </div>
                          <div className="py-5">
                            <h1 className="text-2xl font-bold group-hover:underline">
                              {learningModule.title}
                            </h1>
                            <div className="py-5">
                              <p className="italic">
                                {learningModule.createdDate}
                              </p>
                              <p className="uppercase text-stone-400">
                                {learningModule.creatorName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col gap-5">
              <div className="w-fit rounded-full bg-[#e3d4fa] dark:bg-[#3c2661] px-4 py-0 text-sm uppercase text-[#3c2661] dark:text-[#e3d4fa]">
                Vitademy Community
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div className="col-span-3 md:col-span-2">
                  <div className="flex flex-col gap-5">
                    <h1 className="text-6xl font-black">Be Part Of The Fam.</h1>
                    <div className="flex flex-col gap-10">
                      <p className="text-xl">
                        Learning can be tough, but you’re never alone at
                        Vitademy. Our friendly community is full of learners and
                        mentors ready to guide you through challenges, big or
                        small.
                      </p>
                      <p className="text-xl">
                        Whether you're stuck on schoolwork or exploring new
                        ideas, our members are here to help. Ask questions,
                        share thoughts, and connect with people who want to see
                        you succeed.
                      </p>
                      <p className="text-xl">
                        At Vitademy, we believe learning is better together.
                        Whenever you need support, our community is here to
                        encourage and inspire you every step of the way.
                      </p>
                      <div className="flex gap-4">
                        {socialLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full text-white transition-transform duration-300 transform hover:scale-110"
                            style={{
                              backgroundColor: link.color,
                              boxShadow: `0 4px 15px ${link.color}80`,
                            }}
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <Image
                    src="/community.jpg"
                    alt="Community"
                    width={500}
                    height={500}
                    className="rounded-2xl"
                  ></Image>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
