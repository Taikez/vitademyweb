import Image from "next/image";
import React from "react";
import CategoryBadge from "../ui/CategoryBadge";
import Link from "next/link";
import { Button } from "../ui/Button";

export default function CommunitySection() {
  return (
    <section>
      <div className="flex flex-col gap-5">
        <CategoryBadge>Vitademy Community</CategoryBadge>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-3 md:col-span-2">
            <div className="flex flex-col gap-5">
              <h1 className="text-6xl font-black">Be Part Of The Fam.</h1>
              <div className="flex flex-col gap-10">
                <p className="text-xl">
                  Learning can be tough, but you’re never alone at Vitademy. Our
                  friendly community is full of learners and mentors ready to
                  guide you through challenges, big or small.
                </p>
                <p className="text-xl">
                  Whether you're stuck on schoolwork or exploring new ideas, our
                  members are here to help. Ask questions, share thoughts, and
                  connect with people who want to see you succeed.
                </p>
                <p className="text-xl">
                  At Vitademy, we believe learning is better together. Whenever
                  you need support, our community is here to encourage and
                  inspire you every step of the way.
                </p>
                <Link href="" className="text-center">
                  <Button size="lg">Join the community</Button>
                </Link>
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
  );
}
