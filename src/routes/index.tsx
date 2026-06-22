import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/presentation/Deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iMissive × stc — Strategic Partnership Discussion" },
      { name: "description", content: "Executive presentation: Growing Enterprise Messaging Together." },
      { property: "og:title", content: "iMissive × stc — Strategic Partnership Discussion" },
      { property: "og:description", content: "Growing Enterprise Messaging Together." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Deck />;
}
