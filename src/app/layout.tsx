import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Our Coffee",
  description: "Our Coffee project written with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light mx-auto">{children}</body>
    </html>
  );
}
