import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: {
    default: 'Best MBBS Abroad Consultancy | 500+ Students Placed | NMC Approved Universities - Med Pathway',
    template: '%s | Med Pathway'
  },
  description: 'Top MBBS abroad consultants for Indian students. Get admission in Russia, Georgia, Kazakhstan, Uzbekistan with 100% visa success. NEET qualified students welcomed. Free counseling available.',
  keywords: [
    'MBBS abroad',
    'MBBS abroad for Indian students', 
    'study MBBS abroad',
    'MBBS abroad consultancy',
    'medical universities abroad',
    'MBBS in Russia',
    'MBBS in Georgia',
    'MBBS abroad fees',
    'NMC approved universities',
    'study medicine abroad',
    'medical education consultants'
  ],
  authors: [{ name: 'Med Pathway' }],
  creator: 'Med Pathway',
  publisher: 'Med Pathway',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.medpathway.in',
    siteName: 'Med Pathway',
    title: 'Best MBBS Abroad Consultancy | 500+ Students Placed | Med Pathway',
    description: 'Leading MBBS abroad consultants helping Indian students secure admissions in top medical universities. 100% visa success rate.',
    images: [
      {
        url: '/medpathway/images/medpathway-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Med Pathway - MBBS Abroad Consultancy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best MBBS Abroad Consultancy | Med Pathway',
    description: 'Top MBBS abroad consultants for Indian students. Get admission with 100% visa success rate.',
    images: ['/medpathway/images/medpathway-twitter-card.jpg'],
    creator: '@medpathway'
  },
  icons: {
    icon: '/medpathway/favicon.ico',
    apple: '/medpathway/apple-touch-icon.png',
  },
  manifest: '/medpathway/manifest.json',
  alternates: {
    canonical: 'https://www.medpathway.in'
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  }
};

// ADD STRUCTURED DATA SCRIPT TO LAYOUT
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Med Pathway',
    alternateName: 'MedPathway MBBS Abroad Consultancy',
    description: 'Leading MBBS abroad consultancy helping Indian students secure admissions in top medical universities worldwide',
    url: 'https://www.medpathway.in',
    logo: 'https://www.medpathway.in/medpathway/logo.png',
    telephone: '+91-XXXXXXXXXX',
    email: 'info@medpathway.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: 'Your PIN Code',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://www.facebook.com/medpathway',
      'https://www.linkedin.com/company/medpathway',
      'https://www.instagram.com/medpathway'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1'
    },
    offers: {
      '@type': 'Offer',
      description: 'MBBS Abroad Consultancy Services',
      category: 'Educational Consulting'
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}