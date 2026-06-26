import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageLoader from '../components/PageLoader'

export const metadata = {
  title: {
    default: 'King Alliance FC',
    template: '%s | King Alliance FC',
  },
  description: 'Official website of King Alliance Football Club — a community club founded in 2016 in Kompong Popil, Cambodia. Follow fixtures, meet the squad, and explore our history.',
  keywords: ['King Alliance FC', 'football', 'Cambodia', 'Kompong Popil', 'Prey Veng'],
  openGraph: {
    type: 'website',
    siteName: 'King Alliance FC',
    title: 'King Alliance FC',
    description: 'Official website of King Alliance FC — founded 2016, Kompong Popil, Cambodia.',
    images: [{ url: '/images/team/2025_team.png', width: 1200, height: 630, alt: 'King Alliance FC 2025 Squad' }],
  },
  icons: {
    icon: '/images/logo/logo.png',
    apple: '/images/logo/logo.png',
  },
}

export default function RootLayout({ children }) {
  const logoUrl = "/images/logo/logo.png";

  return (
    <html lang="en">
      <body className="bg-[#f3f2e9] min-h-screen font-sans">
        <PageLoader>
          <Navbar logoUrl={logoUrl} />
          <div className="page-content">
            {children}
          </div>
          <Footer logoUrl={logoUrl} />
        </PageLoader>
      </body>
    </html>
  )
}
