import '../globals.css'
import NavBar from '../../components/NavBar'
import Context from '../../components/Context'

export const metadata = {
  title: 'Locol App',
  description: 'Freelancing platform for students',
} 

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-montserrat">
        <Context>
          <header>
            <NavBar />
          </header>
          <main>{children}</main>
        </Context>
      </body>
    </html>
  )
}