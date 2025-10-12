import { learningModules } from "@/data/modules";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/Button";
import { useTranslations } from "next-intl";

export default function BrowseLearningModulesSection() {
  const t = useTranslations("BrowseLearningModulesSection");
  return (
    <div>
      <section>
        <div className="flex-grow border-t-4 border-gray-300 dark:border-gray-600 mb-12" />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-extrabold">{t("title")}</h1>
          <p className="text-lg mb-5">{t("subTitle")}</p>
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
                          <p className="italic">{learningModule.createdDate}</p>
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
          <div className="flex justify-center">
            <Link href="/learn/modules">
              <Button>{t("headerBtnText")}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
