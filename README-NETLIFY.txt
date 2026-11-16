TRINETRA E-SPORTS — NETLIFY AI DEPLOYMENT

THIS PACKAGE IS BUILT FOR NETLIFY FUNCTIONS.
It contains your updated website, a server-side chat function, and a health-check function.

1) Put the contents of this folder at the ROOT of your Netlify site repository (same folder as index.html).
2) Commit and push the files to the Git provider connected to your Netlify site. Alternatively, deploy with Netlify CLI from this folder using `npx netlify deploy --build` and then `npx netlify deploy --build --prod`.
3) In Netlify, open your site -> Site configuration / Project configuration -> Environment variables.
4) Add OPENAI_API_KEY with your secret OpenAI API key. Set its scope to Functions (or all scopes).
5) Optionally add OPENAI_MODEL. Default is gpt-4.1-mini. Use a model available to your API account.
6) Trigger a NEW production deploy after adding the variables. Netlify applies environment-variable changes on deploy.
7) Test: https://YOUR-SITE.netlify.app/.netlify/functions/health
   Expected: {"ok":true,"aiConfigured":true,"model":"gpt-4.1-mini"}
8) Open the website, click TRINETRA AI and ask: "What is the current tournament prize pool?"

IMPORTANT:
- Do NOT put OPENAI_API_KEY in index.html, frontend JavaScript, or a public Git repository.
- Do NOT upload a .env file containing your key.
- The chat function is read-only and uses the current browser's localStorage tournament snapshot. Your original admin panel stores data per browser; it is not a shared database. For all visitors to see the same teams/schedule, connect a hosted database and authenticated admin login.
- If health returns aiConfigured:false, confirm the key exists in Netlify Environment variables, has Functions scope, and redeploy.
- If chat returns an API error, check the Netlify Function logs and verify the API key has active API billing/credits and the model is available to your API account.
