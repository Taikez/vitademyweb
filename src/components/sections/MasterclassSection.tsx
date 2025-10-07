import React from "react";
import CategoryBadge from "../ui/CategoryBadge";
import { masterclasses } from "@/data/masterclasses";
import MasterclassCard from "../MasterclassCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function MasterclassSection() {
  return (
    <div>
      {/* Masterclass Desktop */}
      <section>
        <div className="flex flex-col gap-10">
          <div className="hidden md:grid md:grid-cols-3 md:gap-10">
            <div className="flex flex-col gap-5">
              <CategoryBadge>Masterclasses</CategoryBadge>
              <h1 className="text-6xl font-black">
                Learn from the Best. Become the Best.
              </h1>
            </div>

            {masterclasses.map((item, i) => (
              <MasterclassCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
      {/* Mobile Masterclass */}
      <section className="grid grid-cols-1 gap-10 md:hidden">
        <h1 className="text-4xl text-center font-black col-span-2">
          Masterclass: Learn from the Best. Become the Best.
        </h1>
        <div className="col-span-2 block md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-2xl"
          >
            {masterclasses.map((item, i) => (
              <SwiperSlide key={i}>
                <MasterclassCard {...item} isMobile />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
