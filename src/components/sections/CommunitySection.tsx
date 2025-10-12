import Image from "next/image";
import React from "react";
import CategoryBadge from "../ui/CategoryBadge";
import Link from "next/link";
import { Button } from "../ui/Button";
import { useTranslations } from "next-intl";

export default function CommunitySection() {
  const t = useTranslations("CommunitySection");
  return (
    <section>
      <div className="flex flex-col gap-5">
        <CategoryBadge>{t("headerText")}</CategoryBadge>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-3 md:col-span-2">
            <div className="flex flex-col gap-5">
              <h1 className="text-6xl font-black">{t("headerSubText")}</h1>
              <div className="flex flex-col gap-10">
                <p className="text-xl">{t("description-1")}</p>
                <p className="text-xl">{t("description-2")}</p>
                <p className="text-xl">{t("description-3")}</p>
                <Link href="" className="text-center">
                  <Button size="lg">{t("detailBtnText")}</Button>
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
