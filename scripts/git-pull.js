const { execSync } = require('child_process');

function run(cmd, opts = {}) {
  console.log(`\x1b[36m> ${cmd}\x1b[0m`);
  return execSync(cmd, { stdio: 'inherit', ...opts });
}

function gitPull() {
  try {
    console.log('\x1b[34m========================================\x1b[0m');
    console.log('\x1b[34m📥 Starting Frontend Automated Git Pull\x1b[0m');
    console.log('\x1b[34m========================================\x1b[0m');

    // 1. Check for uncommitted changes
    const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    let stashed = false;

    if (status) {
      console.log('\x1b[33m⚠️ Local uncommitted changes detected. Stashing local changes before pull...\x1b[0m');
      run('git stash save "Auto-stashed before automated pull"');
      stashed = true;
    }

    // 2. Fetch and pull from remote master
    console.log('\x1b[36m🔄 Pulling latest changes from origin master...\x1b[0m');
    run('git pull origin master');

    // 3. Restore stashed changes if any
    if (stashed) {
      console.log('\x1b[36m📦 Restoring stashed local changes...\x1b[0m');
      try {
        run('git stash pop');
      } catch (e) {
        console.log('\x1b[33m⚠️ Stash pop had conflicts or warning. Please check your working files.\x1b[0m');
      }
    }

    console.log('\x1b[32m========================================\x1b[0m');
    console.log('\x1b[32m✅ Frontend Git Pull Completed Successfully!\x1b[0m');
    console.log('\x1b[32m========================================\x1b[0m');
  } catch (err) {
    console.error('\x1b[31m❌ Git pull automation failed:\x1b[0m', err.message);
    process.exit(1);
  }
}

gitPull();
