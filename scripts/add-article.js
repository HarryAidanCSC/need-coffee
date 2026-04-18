import fs from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'enquirer';
const { prompt } = pkg;
import sanitize from 'sanitize-filename';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ARTICLES_DIR = path.resolve(__dirname, '../src/data/Articles');

// Helper to escape simple HTML to prevent XSS
const escapeHTML = (str) => {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
};

// Date validation regex
const isValidDate = (dateString) => {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;  // Invalid format
    const d = new Date(dateString);
    const dNum = d.getTime();
    if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0,10) === dateString;
};

// Simple helper to check if file exists
const fileExists = async (filePath) => !!(await fs.stat(filePath).catch(e => false));

const scaffoldArticle = async () => {
    console.log('\n☕ Welcome to the Need-Coffee Article Scaffolder\n');

    try {
        const responses = await prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Full Article Title:',
                validate: (v) => v.trim().length > 0 || 'Title is required.'
            },
            {
                type: 'input',
                name: 'quick_title',
                message: 'Short Title (for preview cards):',
                validate: (v) => v.trim().length > 0 || 'Short title is required.'
            },
            {
                type: 'input',
                name: 'text',
                message: 'Brief Summary / Excerpt:',
                validate: (v) => v.trim().length > 0 || 'Summary is required.'
            },
            {
                type: 'select',
                name: 'type',
                message: 'Category Type:',
                choices: ['coffee shop', 'beans', 'brewing']
            },
            {
                type: 'input',
                name: 'location',
                message: 'Location (e.g. London, UK - or N/A):',
                initial: 'N/A'
            },
            {
                type: 'numeral',
                name: 'ranking',
                message: 'Rating (1 to 5):',
                validate: (v) => (v >= 1 && v <= 5) || 'Rating must be between 1 and 5.'
            },
            {
                type: 'input',
                name: 'date',
                message: 'Date (YYYY-MM-DD):',
                initial: new Date().toISOString().slice(0, 10),
                validate: (v) => isValidDate(v) || 'Date must be a valid YYYY-MM-DD format.'
            },
            {
                type: 'input',
                name: 'imagePath',
                message: 'Path to Feature Image (can be relative or absolute):',
                validate: async (v) => {
                    const resolved = path.resolve(process.cwd(), v.trim());
                    if (await fileExists(resolved)) return true;
                    return 'Could not find file at that path. Please check and try again.';
                }
            }
        ]);

        console.log('\nGenerating secure folder structure...');
        
        // 1. Sanitize and generate folder name
        const rawFolderName = `${sanitize(responses.title).toLowerCase().replace(/\s+/g, '_')}`;
        // Ensure folder is unique
        let folderName = rawFolderName;
        let counter = 1;
        while (existsSync(path.join(ARTICLES_DIR, folderName))) {
            folderName = `${rawFolderName}_${counter}`;
            counter++;
        }

        const targetDir = path.join(ARTICLES_DIR, folderName);
        await fs.mkdir(targetDir, { recursive: true });

        // 2. Handle Image
        const sourceImagePath = path.resolve(process.cwd(), responses.imagePath.trim());
        const ext = path.extname(sourceImagePath);
        const targetImageName = `${folderName}${ext}`;
        const targetImagePath = path.join(targetDir, targetImageName);
        await fs.copyFile(sourceImagePath, targetImagePath);

        // 3. Create JSON payload securely
        const jsonPayload = {
            alt: escapeHTML(responses.quick_title) + " thumbnail",
            date: responses.date,
            quick_title: escapeHTML(responses.quick_title),
            text: escapeHTML(responses.text),
            location: escapeHTML(responses.location),
            type: responses.type,
            ranking: parseFloat(responses.ranking),
            title: escapeHTML(responses.title)
        };

        const jsonFile = path.join(targetDir, `${folderName}.json`);
        await fs.writeFile(jsonFile, JSON.stringify(jsonPayload, null, 4), 'utf-8');

        // 4. Scaffold MD template
        const mdContent = `# ${responses.title}\n\nWrite your review and notes here...\n\n## Summary\n\n- Thoughts...\n- Profile...\n`;
        const mdFile = path.join(targetDir, `${folderName}.md`);
        await fs.writeFile(mdFile, mdContent, 'utf-8');

        console.log('\n✅ Article successfully scaffolded at:');
        console.log(`   ${targetDir}`);
        console.log(`\nYou can now edit the markdown file: src/data/Articles/${folderName}/${folderName}.md\n`);
    } catch (e) {
        if (e.message !== '') {
            console.error('\n❌ Scaffolding Failed:', e.message);
        } else {
            console.log('\nAborted.');
        }
    }
};

scaffoldArticle();
