import Image from "next/image";
import { Animation } from "./animation";
import Marquee from "./ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/vercel.svg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/vercel.svg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it. Exmplo com um texto muito grande, olha só esse texto aqui aaaaaaaaa aaaaaaaaaa adadw dad awdwajdajdnjawndjawndj najdnjkand jkandjkandjanjkd nakjdnajkndjkandkjaw nakjnd ajknd ajkdnajkndajkndajkdnajkdnajkdnaj knajkn ajkndjkandjkawndjkand.",
    img: "/vercel.svg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/vercel.svg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/vercel.svg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/vercel.svg",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <div className="relative size-72 cursor-pointer overflow-hidden rounded-xl border p-4 bg-muted">
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div id="comments" className="container flex flex-col gap-4 scroll-m-36">
      <Animation once direction="left" delay={0.6}>
        <h1 className="text-2xl font-semibold text-primary">Comentários!</h1>
      </Animation>
      <Animation once direction="left" delay={0.7}>
        <p className="text-lg">
          O que as pessoas tem achado sobre nosso serviço?
        </p>
      </Animation>
      <Animation
        once
        direction="down"
        delay={0.7}
        className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </Animation>
    </div>
  );
}
