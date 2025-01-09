"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  handleCloseSheet,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { DialogTitle } from "./ui/dialog";

const itemsNav = [
  {
    label: "Apresentação",
    href: "about",
  },
  {
    label: "Comentários",
    href: "comments",
  },
  {
    label: "Mentoria",
    href: "mentorship",
  },
  {
    label: "Faq",
    href: "faq",
  },
];

function navigationClick(link: string) {
  const href = document.getElementById(link);
  href?.scrollIntoView({
    behavior: "smooth",
  });
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, delay: 0 },
      }}
      viewport={{ once: true, margin: "-64px" }}
      className={cn(
        "sticky top-0 z-50 flex flex-wrap items-center justify-between duration-500 border h-20 transition-all w-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 container bg-muted",
        isScrolled
          ? "h-16 mt-0 rounded-b-3xl"
          : "sm:mt-10 sm:rounded-3xl rounded-b-3xl"
      )}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={1920}
            height={1080}
            className="h-fit w-40 object-contain"
          />
        </div>
        <div className="md:block hidden">
          <NavbarDesktop />
        </div>
        <div className="md:hidden block">
          <NavbarMobile />
        </div>
      </div>
    </motion.nav>
  );
}

function NavbarDesktop() {
  return (
    <div className="flex items-center gap-4">
      {itemsNav.map((items) => (
        <div
          className="group flex justify-center flex-col transition-all"
          key={items.href}
        >
          <button onClick={() => navigationClick(items.href)}>
            {items.label}
          </button>
          <hr className="w-0 group-hover:w-full  border-primary group-hover:bg-primary h-0.5 duration-500" />
        </div>
      ))}
      <ThemeToggle />
    </div>
  );
}

function NavbarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
          <span className="sr-only">Abrir/Fechar Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pl-0 w-screen md:hidden">
        <DialogTitle />
        <div className="flex flex-col gap-8 items-center justify-center h-full">
          {itemsNav?.map((item) => (
            <button
              key={item.href}
              type="button"
              className="text-2xl font-bold"
              onClick={() => {
                handleCloseSheet();
                navigationClick(item.href);
              }}
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
        </div>
        <SheetClose className="absolute top-8 right-8">
          <X className="size-6" />
          <span className="sr-only">Fechar</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
