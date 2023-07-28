import "../globals.css";
// import Context from '../../components/Context'

export const metadata = {
  title: "Locol App",
  description: "Freelancing platform for students",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-montserrat flex justify-center items-center my-[2em]">
        {children /* <Context>{children}</Context> */}
      </body>
    </html>
  );
}
