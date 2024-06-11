import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/header";
import { Providers } from "@/components/Providers/Providers";



const notoSans = Noto_Sans({ subsets: ["latin", "cyrillic"] });

// export const metadata = {
//   title: "TeachPro",
//   description: "Platform for the education",
// };

export default function RootLayout({ children }) {

  return (
    <html lang="ru">      
      <body className={notoSans.className}>
        <Providers>
          <Header/>
          {children}                      
        </Providers>        
      </body>
    </html>
  );
}
