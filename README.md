<p align="center">
  <img src="web/public/icon.svg" width="96" alt="Tracelight logo" />
</p>

<h1 align="center">Tracelight</h1>

<p align="center">
  LLM observability and evals. Trace every call, score the results, and
  ship prompts with confidence.
</p>

<p align="center">
  <img src="docs/demo.gif" alt="Tracelight demo" width="860">
</p>

<p align="center"><a href="docs/demo.mp4">Watch the full demo video (2 minutes)</a></p>

## Features

- **Tracing**: capture LLM calls, agent steps, tool use, latency, and cost as nested traces, sessions, and per-user views.
- **Evals**: run LLM-as-a-judge evaluators, collect human review in queues, and track scores over time.
- **Prompts**: version, label, and test prompts in a playground, then fetch them from your app.
- **Datasets and experiments**: build test sets from production traces and compare runs side by side.
- **Dashboards**: cost, latency, and quality charts, with a fresh indigo and teal theme in light and dark.
- **Open API and SDKs**: OpenTelemetry ingestion and a public REST API.

## Screenshots

| Tracing | Trace detail |
| --- | --- |
| ![Tracing](docs/screenshots/tracing.png) | ![Trace detail](docs/screenshots/trace-detail.png) |

| Dashboards | Sessions |
| --- | --- |
| ![Dashboards](docs/screenshots/dashboards.png) | ![Sessions](docs/screenshots/sessions.png) |

| Evals | Datasets |
| --- | --- |
| ![Evals](docs/screenshots/evals.png) | ![Datasets](docs/screenshots/datasets.png) |

| Prompts | Playground |
| --- | --- |
| ![Prompts](docs/screenshots/prompts.png) | ![Playground](docs/screenshots/playground.png) |

## Run it locally

```bash
git clone <your fork url> tracelight
cd tracelight
docker compose up
```

Then open http://localhost:3000. For development, use `pnpm install` followed by
`pnpm run dev:web`. See `CONTRIBUTING.md` for the full setup.

Internal identifiers are unchanged from upstream so everything keeps working:
environment variables still start with `LANGFUSE_`, workspace packages are still
scoped `@langfuse/*`, and the official Langfuse SDKs connect to a Tracelight
server as before.

## What is different from upstream

- New name, logo, and favicon set.
- New indigo-violet and teal palette (`web/src/styles/globals.css`).
- Reorganised sidebar (Trace, Evals, Build groups), renamed nav labels, a wider and rounder sidebar.
- Selecting a project now opens the traces view instead of the home dashboard.

## Origin and licence

Tracelight is a modified fork of [Langfuse](https://github.com/langfuse/langfuse),
which is open source under the MIT licence. The original copyright notice
(Copyright (c) 2023-2026 ClickHouse, Inc.) is kept in [LICENSE](LICENSE), and
the fork is described in [NOTICE.md](NOTICE.md). Tracelight is not affiliated
with or endorsed by Langfuse or ClickHouse.

The directories `ee/`, `web/src/ee/`, and `worker/src/ee/` are covered by a
separate commercial licence (see `ee/LICENSE`) and are included unmodified from
upstream. Check that licence before using them.
