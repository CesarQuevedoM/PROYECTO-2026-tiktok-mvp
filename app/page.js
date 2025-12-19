import { generateIdea } from '../lib/ideaGenerator';

export default async function Home() {
  const idea = await generateIdea({
    businessType: 'Negocio local',
    goal: 'Vender más',
    city: 'Lima',
  });

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Ideas de TikTok</h1>
      <p><strong>Hook:</strong> {idea.hook}</p>
      <p><strong>Contenido:</strong></p>
      <pre>{idea.content}</pre>
      <p><strong>CTA:</strong> {idea.cta}</p>
    </main>
  );
}
}
