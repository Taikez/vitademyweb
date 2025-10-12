"use client";

import React, { useState } from "react";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { ReactTyped } from "react-typed";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/Drawer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/Button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

function MobileNavbar() {
  const t = useTranslations("Navbar");
  const [isContactOpen, setContactOpen] = useState(false);

  const vitaClasses = t.raw("vitaClasses");
  const vitaVoices = t.raw("vitaVoices");
  const vitaConnects = t.raw("vitaConnects");
  const vitaStories = t.raw("vitaStories");

  return (
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="flex gap-6 items-center">
        <Link href="/">
          <Image
            src="/logo-small.png"
            width={30}
            height={20}
            alt="Vitademy Logo"
          />
        </Link>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t("ContactDialog.title")}</DialogTitle>
            <DialogDescription>
              {t("ContactDialog.description")}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="workspace">Workspace</Label>
              <Input id="workspace" name="workspace" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="inquiry">{t("ContactDialog.inquiryLabel")}</Label>
              <Textarea id="inquiry" name="inquiry" />
            </div>
          </div>
          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button variant="outline">{t("ContactDialog.cancel")}</Button>
            </DialogClose>
            <Button type="submit" className="w-full">
              {t("ContactDialog.send")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Right side: Language + Dark Mode + Drawer Menu */}
      <div className="flex gap-5 items-center">
        <LanguageSwitcher />
        <ModeToggle />
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent>
            {/* Header */}
            <div className="border-b-2 p-10">
              <h1 className="font-bold text-xl">
                <ReactTyped
                  strings={["Vitademy.", "ヴィタデミー.", "비타데미."]}
                  typeSpeed={60}
                  backSpeed={70}
                  loop
                />
              </h1>
            </div>

            {/* Accordion Menu */}
            <Accordion type="single" collapsible>
              {[
                { label: "VitaClass", items: vitaClasses },
                { label: "VitaVoice", items: vitaVoices },
                { label: "VitaConnect", items: vitaConnects },
                { label: "VitaStory", items: vitaStories },
              ].map(({ label, items }) => (
                <AccordionItem key={label} value={label} className="py-2 px-10">
                  <AccordionTrigger className="text-md">
                    {t(label)}
                  </AccordionTrigger>
                  <AccordionContent>
                    {items.map((item: any) => {
                      const isContact =
                        item.title === "Contact" || item.title === "Kontak";
                      return (
                        <div key={item.title} className="px-10 py-5">
                          {isContact ? (
                            <a onClick={() => setContactOpen(true)}>
                              {item.title}
                            </a>
                          ) : (
                            <a href={item.href}>{item.title}</a>
                          )}
                        </div>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default MobileNavbar;
