export const REQUIRED_SEED_PATHS = [
  ".github/workflows/agent-runner.yml",
  "scripts/agent",
  "scripts/orchestrator/runtime",
  "scripts/orchestrator/council",
];

export const BASELINE_FILES = {
  "docs/agent-outputs/.gitkeep": "",
};

export const LABEL_BOOTSTRAP = [
  "agent:builder",
  "agent:reviewer"
];
