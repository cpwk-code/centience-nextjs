import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/page-components/LandingPage";
import { complianceContent } from "@/data/complianceContent";
import { landingMetadata, landingJsonLd } from "@/lib/landingSchema";

export function generateStaticParams() {
  return Object.keys(complianceContent).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = complianceContent[slug];
  if (!page) return {};
  return landingMetadata(page, `/compliance/${slug}`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = complianceContent[slug];
  if (!page) notFound();

  const graph = landingJsonLd(page, [
    { name: "Home", path: "" },
    { name: "Compliance", path: "/compliance" },
    { name: page.eyebrow, path: `/compliance/${slug}` },
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
