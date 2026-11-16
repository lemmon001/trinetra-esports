export default async () => {
  const key = Netlify.env.get('OPENAI_API_KEY') || process.env.OPENAI_API_KEY;
  return Response.json({ ok: true, aiConfigured: Boolean(key), model: Netlify.env.get('OPENAI_MODEL') || process.env.OPENAI_MODEL || 'gpt-4.1-mini' });
};
