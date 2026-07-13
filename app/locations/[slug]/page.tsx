import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/page-components/LandingPage";
import { localGovernancePages } from "@/data/localGovernancePages";
import { landingMetadata, landingJsonLd } from "@/lib/landingSchema";

export function generateStaticParams() {
  return Object.keys(localGovernancePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = localGovernancePages[slug];
  if (!page) return {};
  return landingMetadata(page, `/locations/${slug}`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = localGovernancePages[slug];
  if (!page) notFound();

  const graph = landingJsonLd(page, [
    { name: "Home", path: "" },
    { name: "Locations", path: "/locations" },
    { name: page.h1, path: `/locations/${slug}` },
  ]);

  return (
    <>
      {graph.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
      <LandingPage content={page} />
    </>
  );
}
