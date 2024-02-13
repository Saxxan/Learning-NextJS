import "./globals.css";

// Components
import Header from "@/components/header/Header";

export const metadata = {
  title: "Food Lover App",
  description:
    "Food Lover App is the best way to find and share your favorite recipes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
