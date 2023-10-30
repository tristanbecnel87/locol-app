import "../globals.css";
import NavBar from "@/components/NavBar";
import { UserContextProvider } from "@/components/Context";
// import Context from '../../components/Context'

export const metadata = {
  title: "Locol App",
  description: "Freelancing platform for students",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-montserrat">
        <UserContextProvider>
          <header className="sticky top-0 z-30">
            <NavBar />
          </header>
          <main>{children}</main>
        </UserContextProvider>
      </body>
    </html>
  );
}
