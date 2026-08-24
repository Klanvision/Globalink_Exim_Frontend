---
name: push
description: Automatically check status, generate a meaningful commit message, and push code to GitHub for Frontend or Backend. Usage: /push frontend or /push backend
---

# Automatic Git Push Skill

When the user invokes this skill (e.g., by typing `/push frontend` or `/push backend`), you must follow these steps in order:

1. **Identify the Target Directory**:
   - If the user says `frontend`, use: `c:/Users/Admin/Pictures/Kiran_personal_laptop/Desktop/KlanVision_Company_Website_Deployment/Frontend`
   - If the user says `backend`, use: `c:/Users/Admin/Pictures/Kiran_personal_laptop/Desktop/KlanVision_Company_Website_Deployment/Klanvision_backend_node`

2. **Check Changes**:
   - Use the `run_command` tool to run `git status` and `git diff` in the target directory to understand exactly what code was changed.

3. **Generate a Meaningful Commit Message**:
   - Analyze the diff and create a clear, concise, and meaningful commit message summarizing the changes (e.g., "Fix AI voice logic in VerificationPortal"). 

4. **Commit and Push**:
   - Use the `run_command` tool to run:
     ```bash
     git add .
     git commit -m "<your_generated_commit_message>"
     git push origin master
     ```

5. **Report to User**:
   - Tell the user that the code was successfully pushed.
   - Show them the commit message you generated.
   - Remind them that Cloudflare will handle the deployment automatically (for both frontend and backend).
