# Pipeline Starter (SDEV 3320 Week 9)

A small JavaScript tip calculator with Jest unit tests, used to practice building a GitHub Actions pipeline.

The instructor's JavaScript starter repo was not posted, so this repo was set up to match the activity's description: a tiny sample app with a handful of passing unit tests.

## Run the tests locally

```bash
npm install
npm test
```

The workflow file is at `.github/workflows/ci.yml`. It runs the tests on every push and pull request to `main`.
