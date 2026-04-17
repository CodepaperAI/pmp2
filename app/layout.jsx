import "./globals.css";

export const metadata = {
  title: "PMP Exam Changes July 9 - Get Certified Before It Does | Education Edge",
  description:
    "The PMP exam is changing on July 9, 2026. New domains, AI content, and harder question types. Pass on the current format with Education Edge's 100% pass guarantee.",
  icons: {
    icon: "https://www.educationedge.ca/wp-content/uploads/2022/10/edu_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0d2744" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Roboto+Mono:wght@500;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
