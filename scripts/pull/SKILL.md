---
name: pull
description: Fetch the latest code from GitHub, show the incoming changes for user review, and wait for approval before pulling. Usage: /pull frontend or /pull backend
---

# Secure Git Pull Skill

When the user invokes this skill (e.g., by typing `/pull frontend` or `/pull backend`), you must follow these exact steps to ensure they have full control over what gets downloaded to their computer:

1. **Identify the Target Directory**:
   - For `frontend`: `c:/Users/Admin/Pictures/Kiran_personal_laptop/Desktop/KlanVision_Company_Website_Deployment/Frontend`
   - For `backend`: `c:/Users/Admin/Pictures/Kiran_personal_laptop/Desktop/KlanVision_Company_Website_Deployment/Klanvision_backend_node`

2. **Fetch and Compare**:
   - Use the `run_command` tool to run:
     ```bash
     git fetch origin
     git log HEAD..origin/master --oneline
     git diff HEAD..origin/master --name-only
     ```
   - *Do not run `git pull` yet!*

3. **Present Changes for Review**:
   - If there are no new changes on GitHub, tell the user their local code is already up-to-date and STOP.
   - If there are changes, present them clearly to the user in a Markdown list (who made the changes, what files changed).
   - **CRITICAL**: Explicitly ask the user: "Do you approve pulling these changes into your local code? (Yes/No)"

4. **Wait for User Approval**:
   - STOP executing tools and wait for the user to reply to your question.

5. **Execute Pull on Approval**:
   - If the user replies with approval (e.g., "yes", "approved"), use the `run_command` tool to run:
     ```bash
     git pull origin master
     ```
   - Report that the code was successfully merged into their local machine.
   - If the user declines, abort the process and make no changes.
