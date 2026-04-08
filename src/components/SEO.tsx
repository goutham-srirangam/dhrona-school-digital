import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: string;
}

const BASE_URL = "https://asr-dhrona-school.lovable.app";
const SITE_NAME = "A.S.R Dhrona School";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dd515cab-bfeb-4dbc-a85a-ab21cdb19c3b/id-preview-ccce57c0--503c9a22-38ed-42f8-ba52-6ea5b99d0a57.lovable.app-1775657240387.png";

export default function SEO({ title, description, path = "/", type = "website" }: SEOProps) {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
}
