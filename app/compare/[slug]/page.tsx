import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/page-components/LandingPage";
import { comparePages } from "@/data/comparePages";
import { landingMetadata, landingJsonLd } from "@/lib/landingSchema";

export function generateStaticParams() {
  return Object.keys(comparePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = comparePages[slug];
  if (!page) return {};
  return landingMetadata(page, `/compare/${slug}`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = comparePages[slug];
  if (!page) notFound();

  const graph = landingJsonLd(page, [
    { name: "Home", path: "" },
    { name: "Compare", path: "/compare" },
    { name: page.h1, path: `/compare/${slug}` },
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
