import { generateIdea } from '../lib/ideaGenerator';

export default async function Home() {
  const idea = await generateIdea({
    businessType: 'Restaurante',
    goal: 'más clientes',
    city: 'Lima',
  });

  return (
    <main style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>🎯 TikTok Ideas MVP</h1>

      <h2>Hook</h2>
      <p>{idea.hook}</p>

      <h2>Contenido</h2>
      <pre>{idea.content}</pre>

      <h2>CTA</h2>
      <p>{idea.cta}</p>
    </main>
  );
}
