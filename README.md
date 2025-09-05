# Mate — AI Chatbot

A minimal, modern AI chatbot built with Next.js (App Router) and a simple serverless API. Mate is designed as a stylish starter for conversational assistants — fast to run locally, easy to deploy, and simple to extend.

---

## Key highlights

- Modern Next.js (app/ directory) architecture
- Lightweight serverless chat API at `app/api/chat/route.js`
- Simple, privacy-friendly design: you control the API keys and deployment
- Clean, minimal UI assets are available in `public/`

---

## Preview

Open `app/page.js` in your browser after running the app to see the chat UI.

![banner](public/window.svg)

---

## Quickstart (Windows - cmd.exe)

1. Install dependencies

```bat
npm install
```

2. Create environment variables (example)

Create a `.env.local` file in the project root and add any keys your chat API requires (for example, OpenAI):

```
OPENAI_API_KEY=sk-...your-key-here
```

3. Run the dev server

```bat
npm run dev
```

The app will be available at http://localhost:3000

---

## API — Chat endpoint

Mate exposes a simple JSON POST endpoint at `/api/chat` which accepts a body like:

```json
{ "message": "Hello, Mate!" }
```

Example (Windows cmd):

```bat
curl -X POST "http://localhost:3000/api/chat" -H "Content-Type: application/json" -d "{\"message\":\"Hello Mate\"}"
```

Response: a JSON object from the backend assistant. The exact shape depends on the API implemented in `app/api/chat/route.js`.

---

## Architecture / Contract

- Input: JSON POST with { message: string } to `/api/chat`
- Output: JSON response (typically { reply: string } or a richer object depending on the adapter)
- Errors: 4xx for client issues, 5xx for server issues. The API should return helpful error messages for troubleshooting.

Edge cases to consider:
- Empty message payloads
- Downstream API rate limits or timeouts
- Malformed JSON
- Large payload sizes

---

## Development notes & tips

- The serverless API lives at `app/api/chat/route.js`. Edit that file to adapt the assistant behavior or swap the backend provider.
- To test locally without a third-party provider, implement a small mock response in the route that echoes or simulates responses.
- Keep secrets out of source control: use `.env.local` and Vercel/hosting environment variables.

Quick mock example (for local testing only) — inside `route.js` return `{ reply: 'mock reply' }` for any request.

---

## Deploying

This project is ready for Vercel deployment (recommended for Next.js App Router).

1. Push the repo to GitHub
2. Import the project in Vercel
3. Set environment variables in the Vercel dashboard (e.g., `OPENAI_API_KEY`)
4. Deploy and visit the deployed URL — the API path remains `/api/chat`

Other platforms (Netlify, Cloudflare Pages with Workers, etc.) can work but may need adaptions.

---

## Troubleshooting

- 500 from `/api/chat`: check server logs and ensure your API key and provider config are correct.
- CORS or missing assets: confirm you're hitting the correct origin and that public assets exist under `public/`.

---

## Contributing

Small, focused PRs welcome. When contributing, please:

1. Fork and create a feature branch
2. Add/adjust tests (if applicable)
3. Open a PR with a clear description of changes

---

## Credits & License

Built with ❤️ and Next.js. This repo is provided under the MIT License — see `LICENSE` (add one if needed).

---

## Requirements coverage

- Create a modern `README.md` for the AI chatbot — Done
- Make it visually modern and practical (usage, API, deploy, tips) — Done

If you'd like, I can:
- Add custom badges (CI, license, npm version)
- Create a screenshot or GIF of the UI and embed it in the README
- Expand API docs with exact request/response shapes after you confirm `route.js` behavior

---

Thank you — tell me if you want a lighter or more technical variant and I’ll update it.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
