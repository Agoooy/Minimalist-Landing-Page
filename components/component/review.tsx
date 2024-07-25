import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Jaki",
    username: "@jaki",
    body: "Cock bimsa?",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Sucipto",
    username: "@sucipto",
    body: "Gorengan rek.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Heru",
    username: "@heru",
    body: "Jika kamue sedih, keluarkan kesedihanmu. Jika kamu malu, keluarkan",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jumadi",
    username: "@jumadi",
    body: "Hey, teman-teman. Kwnaoa di pegang kontolnya tuh.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Sucipto",
    username: "@sucipto",
    body: "Nilaiku seperti Lightning Mekwin, kachow.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Parwoto",
    username: "@parwoto",
    body: "Tolong, jangan sakiti aku. Aku hanyalah raja iblis yang kemsepian.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-background dark:bg-accent text-foreground dark:text-accent-foreground shadow-sm"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium text-muted-foreground">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export { ReviewCard, reviews };
