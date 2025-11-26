"use client";
import React, {JSX, useEffect, useState} from "react";
import StaTextContainer from "../../components/sta-text-container";
import {ApolloClient, gql, HttpLink, InMemoryCache} from "@apollo/client";
import StaLinkButton from "../../components/sta-link-button";
import StaText from "../../components/sta-text";
import StaTitle from "../../components/sta-title";

type ProductionNode = {
  name: string;
  start: string;
  end: string;
  slug: string;
  society?: { name?: string };
  featuredImage?: { url?: string | null } | null;
};

type ProductionEdge = { node: ProductionNode };
type ProductionsResponse = {
  productions: { edges: ProductionEdge[] } | null;
};

const GET_PRODUCTIONS = gql`
  query GetProductions {
    productions(status: "PUBLISHED") {
      edges {
        node {
          name
          start
          end
          slug
          society {
            name
          }
          featuredImage {
            url
          }
        }
      }
    }
  }
`;

export default function Page(): JSX.Element {
  const endpoint = process.env.UOB_THEATRE_GRAPHQL_ENDPOINT;
  const [edges, setEdges] = useState<ProductionEdge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cancelled = false;

    const client = new ApolloClient({
      link: new HttpLink({uri: endpoint, fetch}),
      cache: new InMemoryCache(),
    });

    (async () => {
      try {
        setLoading(true);
        const result = await client.query<ProductionsResponse>({query: GET_PRODUCTIONS});
        if (cancelled) return;
        setEdges(result.data?.productions?.edges ?? []);
      } catch (error) {
        if (cancelled) return;
        setError(error?.message ?? "Failed to load productions.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
  });

  if (loading) {
    return (
      <main>
        <StaTitle title="What's On" bgImage="panto-narnia.jpeg"/>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <StaTitle title="What's On" bgImage="panto-narnia.jpeg"/>
        <StaTextContainer>
          <StaText>{error}</StaText>
        </StaTextContainer>
      </main>
    );
  }

  return (
    <main>
      <StaTitle title="What's On" bgImage="panto-narnia.jpeg"/>
      <StaTextContainer className={"grid grid-cols-1 sm:grid-cols-2 grid-flow-row"}>
        {edges.map((edge) => {
          const p = edge.node;
          let dateString = "";
          if (p.start.substring(0, 10) === p.end.substring(0, 10)) {
            dateString = new Date(p.start).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
            });
          } else if (p.start.substring(5, 7) === p.end.substring(5, 7)) {
            dateString =
              new Date(p.start).toLocaleDateString("en-GB", {day: "numeric"}) +
              " – " +
              new Date(p.end).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
              });
          } else {
            dateString =
              new Date(p.start).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
              }) +
              " – " +
              new Date(p.end).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
              });
          }
          return (
            <div key={p.slug} className={"flex flex-col p-3"}>
              <div className="m-3">
                {p.featuredImage?.url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.featuredImage.url}
                    alt={`${p.name} cover image`}
                    className="rounded w-full"
                  />
                )}
              </div>
              <div>
                <StaText className={"font-bold text-xl"}>{p.name}</StaText>
                <StaText>{p.society?.name && p.society.name}</StaText>
                <StaText>{dateString}</StaText>
                <StaLinkButton
                  href={`https://uobtheatre.com/production/${p.slug}`}
                  className={"my-3"}
                >View on UOB Theatre</StaLinkButton>
              </div>
            </div>
          );
        })}
      </StaTextContainer>
    </main>
  );
}