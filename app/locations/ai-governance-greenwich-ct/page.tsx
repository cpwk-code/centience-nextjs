import type { Metadata } from 'next';
import RegionalGovernancePage from '@/components/locations/RegionalGovernancePage';
import { getRegion } from '@/data/regions';

const region = getRegion('ai-governance-greenwich-ct')!;
const url = `https://centience.ai/locations/${region.slug}`;

export const metadata: Metadata = {
  title: region.metaTitle,
  description: region.metaDescription,
  keywords: region.keywords,
  alternates: { canonical: url },
  openGraph: {
    title: region.metaTitle,
    description: region.metaDescription,
    url,
    type: 'website',
    siteName: 'Centience',
    images: [{ url: 'https://centience.ai/og-image.png', width: 1200, height: 630, alt: region.metaTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: region.metaTitle,
    description: region.metaDescription,
    images: ['https://centience.ai/og-image.png'],
  },
};

export default function Page() {
  return <RegionalGovernancePage region={region} />;
}
