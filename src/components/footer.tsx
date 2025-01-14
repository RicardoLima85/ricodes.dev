import Link from "next/link";
import { Animation } from "./animation";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const socials = [
  {
    href: "https://twitter.com/shadcn",
    icon: Icons.Twitter,
  },
  {
    href: "https://instagram.com/shadcn",
    icon: Icons.Instagram,
  },
  {
    href: "https://facebook.com/shadcn",
    icon: Icons.Facebook,
  },
  {
    href: "https://tiktok.com/shadcn",
    icon: Icons.TikTok,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center gap-6 py-8 bg-muted">
      <Animation
        once
        className="flex items-center gap-3 "
        direction="right"
        duration={0.4}
        delay={0.2}
        margin="-32px"
      >
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Ricardo Lima</AvatarFallback>
        </Avatar>
        <p className="text-xl font-bold">Ricardo Lima</p>
      </Animation>

      <Animation
        once
        className="space-y-3"
        direction="left"
        duration={0.4}
        delay={0.4}
        margin="-32px"
      >
        <hr className="w-full border-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          &copy; {year} Ricodes - UseSoftware. All rights reserved
        </p>
      </Animation>

      <Animation
        once
        className="flex items-center gap-8"
        direction="left"
        duration={0.4}
        delay={0.6}
        margin="-10px"
      >
        {socials.map((social) => (
          <Link
            key={social.href}
            href={social.href}
            className="hover:scale-125 transition hover:text-primary"
          >
            <social.icon className="size-6" />
          </Link>
        ))}
      </Animation>
    </div>
  );
}
