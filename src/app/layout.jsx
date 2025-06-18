import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'King Alliance FC',
  description: 'Official website of King Alliance Football Club',
}

export default function RootLayout({ children }) {
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/gemini-canvas-prod.appspot.com/o/files%2Fuploaded%3Aking%20fc%20logo.jpg-fe847212-d811-461f-bb8d-91f7269208cb?alt=media&token=425d6b46-0b8d-4c74-8ac7-e6f77cc728e7";

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
