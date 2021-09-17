const title = 'ColorFunc | Max Pod';
const description = 'A Ridiculously Flexible Palette Generator';
const url = 'https://color-func.vercel.app/';

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    images: [
      {
        url: `/colorFuncOG.png`,
        alt: title,
        width: 1199,
        height: 693,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@2manypistachios',
    site: '@2manypistachios',
  },
  additionalLinkTags: [{ rel: 'icon', href: '/favicon.ico' }],
};

export default SEO;
