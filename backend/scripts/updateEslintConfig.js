const fs = require('fs');
const path = require('path');

const eslintConfigPath = path.join(__dirname, '../frontend/eslint.config.js');

const updateEslintRules = async (rule, value) => {
  try {
    if (!fs.existsSync(eslintConfigPath)) {
      console.error('eslint.config.js not found!');
      return;
    }

    let eslintConfig = await fs.promises.readFile(eslintConfigPath, 'utf8');

    // Create a regex to match the rule pattern in the config
    const ruleRegex = new RegExp(`'${rule}':\\s*['"][^'"]*['"]`, 'g');
    if (ruleRegex.test(eslintConfig)) {
      // Replace existing rule value
      eslintConfig = eslintConfig.replace(ruleRegex, `'${rule}': '${value}'`);
      console.log(`Rule "${rule}" updated to "${value}".`);
    } else {
      // Add new rule in the "rules" section
      eslintConfig = eslintConfig.replace(
        /(rules:\s*{)/,
        `$1\n      '${rule}': '${value}',`
      );
      console.log(`Rule "${rule}" added with value "${value}".`);
    }

    await fs.promises.writeFile(eslintConfigPath, eslintConfig, 'utf8');
    console.log('eslint.config.js updated successfully.');
  } catch (error) {
    console.error('Error updating eslint.config.js:', error.message);
  }
};

updateEslintRules('no-console', 'warn');
