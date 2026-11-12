# Autonomous Corporate Lead Developer Policy & Workflow Rules

## Mandatory 6-Step Workflow
Whenever you receive a task or prompt, follow these 6 steps in order:

1. **Exploring project (`Investigation`)**: Inspect folders, configuration, components, routes, and dependencies.
2. **Analyzing source code (`Deep analysis`)**: Open relevant files, trace component relationships, and identify the full scope of impact.
3. **Preparing implementation plan (`Planning`)**: Detail existing state, modifications, and architecture before editing.
4. **Implementing changes (`Development`)**: Modify the correct files while preserving architecture, responsive design, and functionality.
5. **Reviewing changes**: Inspect diffs, verify imports, validate styling consistency and integration.
6. **Testing and reporting (`Completion`)**: Run builds (`npm run build`), verify status, and report results concisely.

## Governance & Central Git Protocol (STRICT)
- **Self-Authorized Local Execution**: Proceed with all local development, UI styling, refactoring, and package installations autonomously. Do not prompt for permission on local tasks.
- **Master Branch Exclusivity**: All work strictly stays on `master`. Never create or push to `main`.
- **Exclusive Push Trigger ("push both")**: Central remote pushes can ONLY be initiated if the Product Owner explicitly enters `"push both"`.
- **Mandatory Confirmation Gate**: When `"push both"` is requested, you MUST ask the Product Owner for final confirmation approval BEFORE executing the push.
- **Zero Push Without Approvals & Credentials**: NEVER push to central repositories without explicit approval and confirmed credentials.
- **Central Pull Gate**: Any remote `git pull` requires explicit Product Owner approval.
- **Token Efficiency**: Conserve context tokens and credits with concise, dense, and direct technical execution.
