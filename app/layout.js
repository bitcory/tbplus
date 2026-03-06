import localFont from "next/font/local";
import "./globals.css";
import CherryBlossom from "./components/CherryBlossom";
import ClerkWrapper from "./components/ClerkWrapper";

const paperlogy = localFont({
  src: [
    { path: "./fonts/Paperlogy-1Thin.woff", weight: "100", style: "normal" },
    { path: "./fonts/Paperlogy-2ExtraLight.woff", weight: "200", style: "normal" },
    { path: "./fonts/Paperlogy-3Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/Paperlogy-4Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Paperlogy-5Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/Paperlogy-6SemiBold.woff", weight: "600", style: "normal" },
    { path: "./fonts/Paperlogy-7Bold.woff", weight: "700", style: "normal" },
    { path: "./fonts/Paperlogy-8ExtraBold.woff", weight: "800", style: "normal" },
    { path: "./fonts/Paperlogy-9Black.woff", weight: "900", style: "normal" },
  ],
  variable: "--font-paperlogy",
});

export const metadata = {
  title: "AI TOOLBEE GUIDE",
  description: "AI 창작의 기술을 더하다 - 카메라, 조명, 스타일, 매체 가이드",
  icons: {
    icon: [
      { url: '/images/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon_io/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/images/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkWrapper>
      <html lang="ko">
        <body className={`${paperlogy.variable} font-sans antialiased`}>
          <CherryBlossom />
          <div className="relative z-10">
            {children}
          </div>
        </body>
      </html>
    </ClerkWrapper>
  );
}
