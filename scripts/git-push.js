const { execSync } = require('child_process');

function run(cmd, opts = {}) {
  console.log(`\x1b[36m> ${cmd}\x1b[0m`);
  return execSync(cmd, { stdio: 'inherit', ...opts });
}

function gitPush() {
  try {
    console.log('\x1b[34m========================================\x1b[0m');
    console.log('\x1b[34m🚀 Starting Frontend Automated Git Push\x1b[0m');
    console.log('\x1b[34m========================================\x1b[0m');

    // 1. Check status
    const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    if (!status) {
      console.log('\x1b[33mℹ️ No changes detected in working directory. Working tree clean.\x1b[0m');
      // Still push if ahead of remote
      const unpushed = execSync('git cherry -v', { encoding: 'utf8' }).trim();
      if (!unpushed) {
        console.log('\x1b[32m✅ Everything is up to date with origin/master.\x1b[0m');
        return;
      }
      console.log('\x1b[36m📌 Pushing unpushed commits to origin master...\x1b[0m');
      run('git push -u origin master');
      console.log('\x1b[32m🎉 Push completed successfully!\x1b[0m');
      return;
    }

    // 2. Stage all changes (node_modules is ignored via .gitignore)
    console.log('\x1b[36m📦 Staging files (node_modules strictly ignored)... \x1b[0m');
    run('git add .');

    // 3. Determine commit message
    const customMsg = process.argv.slice(2).join(' ').trim();
    const dateStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const commitMsg = customMsg || `Frontend Update: ${dateStr}`;

    console.log(`\x1b[36m📝 Committing with message: "${commitMsg}"\x1b[0m`);
    run(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`);

    // 4. Push to remote master
    console.log('\x1b[36m📤 Pushing to origin master...\x1b[0m');
    run('git push -u origin master');

    console.log('\x1b[32m========================================\x1b[0m');
    console.log('\x1b[32m✅ Frontend Git Push Completed Successfully!\x1b[0m');
    console.log('\x1b[32m========================================\x1b[0m');
  } catch (err) {
    console.error('\x1b[31m❌ Git push automation failed:\x1b[0m', err.message);
    process.exit(1);
  }
}

gitPush();
