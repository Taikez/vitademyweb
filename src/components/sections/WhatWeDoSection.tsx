import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";

export default function WhatWeDoSection() {
  return (
    <div>
      <section id="what-we-do">
        <SectionHeader>What We Do</SectionHeader>
        <div className="flex flex-col gap-20 md:gap-40">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col gap-10">
              <h1 className="font-bold text-3xl text-center md:text-start md:text-5xl leading-relaxed">
                Omnidirectional Learning: A 360° Approach to Education.
              </h1>
              <div className="flex justify-center md:hidden">
                <Image
                  src="/omnidirectional_learning.jpg"
                  alt="Omnidirectional Learning"
                  width={400}
                  height={200}
                  className="rounded-2xl ease-in-out duration-200 group-hover:scale-110"
                ></Image>
              </div>
              <p className="leading-loose text-lg md:text-xl text-justify">
                Omnidirectional learning helps you learn in different ways —
                using fun methods, real-life examples, and creative thinking to
                understand things better and solve problems easily.
              </p>
            </div>
            <div className="hidden md:flex justify-center">
              <Image
                src="/omnidirectional_learning.jpg"
                alt="Omnidirectional Learning"
                width={400}
                height={200}
                className="rounded-2xl ease-in-out duration-200 group-hover:scale-110"
              ></Image>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="hidden md:flex items-center">
              <Image
                src="/what-we-give/connect.jpg"
                alt="Learning Module Thumbnail"
                width={600}
                height={600}
                className="rounded-2xl ease-in-out duration-200 group-hover:scale-110"
              ></Image>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="font-bold text-3xl text-center md:text-start md:text-5xl leading-relaxed">
                Connect Knowledge like Your Brain.
              </h1>
              <div className="md:hidden flex items-center">
                <Image
                  src="/what-we-give/connect.jpg"
                  alt="Learning Module Thumbnail"
                  width={600}
                  height={600}
                  className="rounded-2xl ease-in-out duration-200 group-hover:scale-110"
                ></Image>
              </div>
              <p className="leading-loose text-lg md:text-xl text-justify">
                Our platform connects ideas across disciplines — just like your
                brain does. Every topic is curated to build a seamless,
                interconnected understanding.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col gap-10">
              <h1 className="font-bold text-3xl text-center md:text-start md:text-5xl leading-relaxed">
                Find Your Style, Learn Your Way.
              </h1>
              <div className="md:hidden flex justify-center">
                <Image
                  src="/what-we-give/find-your-style.jpg"
                  alt="Learning Module Thumbnail"
                  width={600}
                  height={200}
                  className="rounded-2xl ease-in-out duration-200 group-hover:scale-110"
                ></Image>
              </div>
              <div className="leading-loose flex flex-col gap-5 text-lg md:text-xl text-justify">
                <div>
                  At Vitademy, you control the pace. Our decentralised platform
                  lets you explore, practice, and grow — anytime, anywhere.
                </div>
                <div className="underline underline-offset-8"> Access:</div>
                <div>
                  <p>✅ Engaging Video Lessons</p>
                  <p>✅ Easy-to-digest Text Summaries & Lecture Notes</p>
                  <p>✅ Real-time Voiceover Explanations</p>
                  <p>✅ Interactive Problem Sheets & Practice Modules</p>
                </div>
                <div>
                  No rigid schedules. No limits. Education that adapts to you —
                  not the other way around.
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Image
                src="/what-we-give/find-your-style.jpg"
                alt="Learning Module Thumbnail"
                width={600}
                height={200}
                className="rounded-2xl ease-in-out duration-200 group-hover:scale-110"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
