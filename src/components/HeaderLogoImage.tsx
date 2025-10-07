import Image from "next/image";
import React from "react";

export default function HeaderLogoImage() {
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
    </div>
  );
}
