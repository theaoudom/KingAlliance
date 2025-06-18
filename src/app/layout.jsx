import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'King Alliance FC',
  description: 'Official website of King Alliance Football Club',
}

export default function RootLayout({ children }) {
  const logoUrl = "/images/logo/logo.png";

  return (
    <html lang="en">
      <body className="bg-[#f3f2e9] min-h-screen font-sans">
        <Navbar logoUrl={logoUrl} />
        <div className="page-content">
          {children}
        </div>
        <Footer logoUrl={logoUrl} />
      </body>
    </html>
  )
}
