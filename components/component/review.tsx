import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Albert Einstein",
    username: "@einstein",
    body: "Imajinasi lebih penting daripada pengetahuan.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Mahatma Gandhi",
    username: "@Mahatma",
    body: "Jadilah perubahan yang ingin kamu lihat di dunia.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Nelson Mandela",
    username: "@Nelson",
    body: "Pendidikan adalah senjata paling ampuh untuk mengubah dunia.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Steve Jobs",
    username: "@steve",
    body: "Waktumu terbatas, jadi jangan habiskan untuk kehidupan orang lain.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Walt Disney",
    username: "@disney",
    body: "Semua mimpi bisa menjadi kenyataan, jika kta punya keberanian untuk mengejarnya.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Parwoto",
    username: "@parwoto",
    body: "Nilaiku seperti Lightning McQueen, kachow.",
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
