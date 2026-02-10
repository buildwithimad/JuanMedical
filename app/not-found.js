import NotFound from "@/components/NotFound";

export const metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist or has been moved. Return to Juan Medical's homepage.",
  keywords: ["404", "page not found", "error", "broken link"],
  openGraph: {
    title: "Page Not Found - Juan Medical",
    description:
      "The page you're looking for doesn't exist or has been moved.",
    locale: "en_US",
    images: ["/Logo.png"],
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}
