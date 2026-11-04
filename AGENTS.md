# Agent Behavior & Workflow Rules

## Mandatory 6-Step Workflow
Whenever you receive a task or prompt, you must strictly follow these 6 steps in order:

1. **Exploring project (`Investigation`)**:
   - Inspect folders, project configuration, components, routes, and dependencies.
2. **Analyzing source code (`Deep analysis`)**:
   - Open relevant files, understand logic, trace component relationships, and identify the full scope of impact.
3. **Preparing implementation plan (`Planning`)**:
   - Explain the existing implementation, required changes, and planned modifications clearly before editing.
4. **Implementing changes (`Development`)**:
   - Modify the correct files while preserving existing architecture, responsive design, and functionality.
5. **Reviewing changes**:
   - Inspect diffs, verify imports, check dependencies, validate styling consistency and integration.
6. **Testing and reporting (`Completion`)**:
   - Run available checks (e.g., `npm run build`), verify server status, and provide a detailed implementation report.

## Strict Git Operations Guideline
- NEVER execute `git push` or `git pull` without explicit user permission and approval.
