import "./globals.css";

export const metadata = {
  title: "MyBlog",
  description: "Insights & Stories Powered by WordPress & Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}