"use client";

import StaText from "@/components/sta-text";
import StaTextContainer from "@/components/sta-text-container";
import { JSX, useEffect, useState } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import ProductionTile from "@/app/whats-on/production-tile";
import StaLinkButton from "@/components/sta-link-button";
import gql from "graphql-tag";

export type ProductionNode = {
  name: string,
  start: string,
  end: string,
  slug: string,
  society?: { name?: string },
  featuredImage?: { url?: string | null } | null,
};

const currentProductionsQuery = gql`
    query {
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

export default function UOBTheatreProductions(): JSX.Element {
  const endpoint = process.env.NEXT_PUBLIC_UOBTHEATRE_GRAPHQL_ENDPOINT;
  const [edges, setEdges] = useState<{ node: ProductionNode }[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = new ApolloClient({
      link: new HttpLink({ uri: endpoint, fetch }),
      cache: new InMemoryCache()
    });

    (async () => {
      if (loading) {
        try {
          const result = await client.query({ query: currentProductionsQuery });
          setEdges(result.data?.productions?.edges ?? []);
        } catch (error) {
          console.log(error);
          setError(error.message ?? "Failed to load productions.");
        } finally {
          setLoading(false);
        }
      }
    })();
  });
  if (loading) {
    return (
      <StaTextContainer>
        <StaText>Loading Productions...</StaText>
      </StaTextContainer>
    );
  }

  if (error) {
    return (
      <StaTextContainer>
        <StaText>Sorry, there was a problem loading current productions. Please visit the UOB Theatre website to see our
          current shows.</StaText>
        <StaLinkButton href="https://uobtheatre.com" className="yellow-btn">UOB Theatre</StaLinkButton>
      </StaTextContainer>
    );
  }

  if (edges.length === 0 && !loading) {
    return (
      <StaTextContainer>
        <StaText>Things are a bit quiet right now... If you have a production you want to work with us on, please get in
          touch, we'd love to help! Otherwise, we're working on things behind the scenes so keep an eye out for tickets
          becoming available soon.</StaText>
        <StaLinkButton href="/contact-us" className="teal-btn">Contact us</StaLinkButton>
      </StaTextContainer>
    );
  }

  return (
    <StaTextContainer className={"grid grid-cols-1 sm:grid-cols-2 grid-flow-row"}>
      {edges.map((edge) => (
        <ProductionTile key={edge.node.slug} production={edge.node} />
      ))}
    </StaTextContainer>
  );
}