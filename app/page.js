import { generateIdea } from "@/lib/ideaGenerator";

export default async function Home() {
  const idea = await generateIdea({
    businessType: "Restaurante",
    goal: "más ventas",
    city: "Lima"
  });

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>TikTok Ideas MVP 🚀</h1>

      <h2>{idea.hook}</h2>
      <p>{idea.content}</p>

      <strong>CTA:</strong>
      <p>{idea.cta}</p>
    </main>
  );
}
