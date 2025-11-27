import StaText from "@/components/sta-text";
import StaLinkButton from "@/components/sta-link-button";
import { ProductionNode } from "@/app/whats-on/productions";

function makeDateString(start: string, end: string): string {
  start = start ? start : "";
  end = end ? end : "";
  if (start.substring(0, 10) === end.substring(0, 10)) {
    return new Date(start).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long"
    });
  } else if (start.substring(5, 7) === end.substring(5, 7)) {
      return new Date(start).toLocaleDateString("en-GB", { day: "numeric" }) +
      " – " +
      new Date(end).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long"
      });
  } else {
      return new Date(start).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long"
      }) +
      " – " +
      new Date(end).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long"
      });
  }
}

export default function ProductionTile({production}: {production: ProductionNode}) {
  return (
    <div key={production.slug} className={"flex flex-col p-3"}>
      <div className="m-3">
        {production.featuredImage?.url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={production.featuredImage.url}
            alt={`${production.name} cover image`}
            className="rounded w-full"
          />
        )}
      </div>
      <div>
        <StaText className={"font-bold text-xl"}>{production.name}</StaText>
        <StaText>{production.society?.name && production.society.name}</StaText>
        <StaText>{makeDateString(production.start, production.end)}</StaText>
        <StaLinkButton
          href={`https://uobtheatre.com/production/${production.slug}`}
          className={"my-3"}
        >View on UOB Theatre</StaLinkButton>
      </div>
    </div>
  );
}