import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/ishow-excellence";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "i-ShowExcellence | Student Success Coaching" },
      { name: "description", content: "Benedicta Otoibhi helps Nigerian university students build the strategies, confidence and systems for academic excellence." },
      { property: "og:title", content: "i-ShowExcellence | Student Success Coaching" },
      { property: "og:description", content: "Move from academic struggle to consistent excellence with coaching, mentorship and practical strategies." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});