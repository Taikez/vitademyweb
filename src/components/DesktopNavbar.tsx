"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/NavigationMenu";
import { Button } from "./ui/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";
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
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ModeToggle from "./ModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

function DesktopNavbar() {
  const t = useTranslations("Navbar");
  const [isContactOpen, setContactOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const vitaClasses = t.raw("vitaClasses");
  const vitaVoices = t.raw("vitaVoices");
  const vitaConnects = t.raw("vitaConnects");
  const vitaStories = t.raw("vitaStories");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.inquiry) {
      alert("Please fill in all required fields!");
      setIsSending(false);
      return;
    }

    try {
      const res = await fetch("/api/sendMailViaContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert(res.ok ? "Email sent!" : "Failed to send email!");
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex justify-between items-center">
      {/* Loading Overlay */}
      {isSending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white px-6 py-4 rounded-md shadow-md flex items-center space-x-3">
            <svg
              className="animate-spin h-6 w-6 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span className="text-gray-700 text-sm font-medium">
              Sending your message...
            </span>
          </div>
        </div>
      )}

      {/* Left Section */}
      <div className="flex gap-6 items-center">
        <Link href="/">
          <Image
            src="/logo-small.png"
            width={30}
            height={20}
            alt="Vitademy Logo"
          />
        </Link>

        {/* Contact Dialog */}
        <Dialog open={isContactOpen} onOpenChange={setContactOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={sendEmail}>
              <DialogHeader>
                <DialogTitle>{t("ContactDialog.title")}</DialogTitle>
                <DialogDescription>
                  {t("ContactDialog.description")}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-5">
                <Input name="name" placeholder="Name" />
                <Input name="workspace" placeholder="Workspace" />
                <Input name="email" placeholder="Email" />
                <Input name="phone" placeholder="Phone" />
                <Textarea name="inquiry" placeholder="Your message..." />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">{t("ContactDialog.cancel")}</Button>
                </DialogClose>
                <Button type="submit">{t("ContactDialog.send")}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            {[
              { label: "VitaClass", items: vitaClasses },
              { label: "VitaVoice", items: vitaVoices },
              { label: "VitaConnect", items: vitaConnects },
              { label: "VitaStory", items: vitaStories },
            ].map(({ label, items }) => (
              <NavigationMenuItem key={label}>
                <NavigationMenuTrigger>{t(label)}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {items.map((item: any) => {
                      const isContact =
                        item.title === "Contact" || item.title === "Kontak";
                      return isContact ? (
                        <button
                          key={item.title}
                          onClick={() => setContactOpen(true)}
                          className="text-left w-full"
                        >
                          <ListItem title={item.title}>
                            {item.description}
                          </ListItem>
                        </button>
                      ) : (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Section */}
      <div className="flex gap-5 items-center">
        <LanguageSwitcher />
        <ModeToggle />
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

export default DesktopNavbar;
