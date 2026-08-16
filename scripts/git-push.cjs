const { execSync } = require('child_process');

function run(cmd, opts = {}) {
  console.log(`\x1b[36m> ${cmd}\x1b[0m`);
  return execSync(cmd, { stdio: 'inherit', ...opts });
}

function generateCommitMessage() {
  try {
    const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    if (!statusOutput) return 'chore(frontend): minor maintenance updates';

    const lines = statusOutput.split('\n').filter(Boolean);
    const files = lines.map(line => line.substring(3).trim());

    const hasSrc = files.some(f => f.includes('src/'));
    const hasPackage = files.some(f => f.includes('package.json') || f.includes('package-lock.json'));
    const hasDocs = files.some(f => f.endsWith('.md') || f.includes('README'));
    const hasConfig = files.some(f => f.includes('.gitignore') || f.includes('vite.config') || f.includes('scripts/'));

    let prefix = 'chore(frontend)';
    if (hasSrc) {
      const isNew = lines.some(l => l.trim().startsWith('??') || l.trim().startsWith('A'));
      prefix = isNew ? 'feat(frontend)' : 'refactor(frontend)';
    } else if (hasDocs) {
      prefix = 'docs(frontend)';
    } else if (hasConfig || hasPackage) {
      prefix = 'chore(frontend)';
    }

    const summaries = [];
    if (hasSrc) {
      const srcFiles = files.filter(f => f.includes('src/'));
      const fileBasenames = srcFiles.map(f => {
        const parts = f.split(/[\/\\]/);
        return parts[parts.length - 1];
      }).filter(Boolean);
      const uniqueNames = [...new Set(fileBasenames)].slice(0, 3);
      summaries.push(`update ${uniqueNames.join(', ')}`);
    }
    if (hasPackage) summaries.push('update package configuration');
    if (hasConfig) summaries.push('update build and environment settings');
    if (hasDocs) summaries.push('update documentation');

    if (summaries.length === 0) {
      const basenames = files.map(f => f.split(/[\/\\]/).pop()).slice(0, 3);
      summaries.push(`update ${basenames.join(', ')}`);
    }

    return `${prefix}: ${summaries.join(' & ')}`;
  } catch (e) {
    return `chore(frontend): update project files (${new Date().toISOString().substring(0, 10)})`;
  }
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

    // 3. Determine commit message automatically in professional format if not provided
    const customMsg = process.argv.slice(2).join(' ').trim();
    const commitMsg = customMsg || generateCommitMessage();

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
