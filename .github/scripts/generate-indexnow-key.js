#!/usr/bin/env node
/**
 * generate-indexnow-key.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Generates a random IndexNow key and creates the required verification file
 * in the public directory. Run this once to set up IndexNow.
 *
 * Usage: node .github/scripts/generate-indexnow-key.js
 * ─────────────────────────────────────────────────────────────────────────────
 */

const crypto = require('crypto');
const fs     = require('fs');
const path   = require('path');

// Generate a random 32-character hex key
const key = crypto.randomBytes(16).toString('hex');

// Create the verification file in public/
const publicDir  = path.join(__dirname, '../../public');
const keyFile    = path.join(publicDir, `${key}.txt`);

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(keyFile, key, 'utf8');

console.log('\n✅ IndexNow key generated!\n');
console.log(`   Key:  ${key}`);
console.log(`   File: public/${key}.txt\n`);
console.log('Next steps:');
console.log('  1. Commit and push the key file to your repository.');
console.log('  2. Add the key as a GitHub secret named INDEXNOW_KEY:');
console.log(`     Value: ${key}`);
console.log('  3. The SEO workflow will automatically use this key.\n');
