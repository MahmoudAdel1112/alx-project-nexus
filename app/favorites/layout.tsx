import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Favorites",
  description: "Browse your saved favorite movies.",
};

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
