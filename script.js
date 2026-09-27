``javascript
// =========================================================
// ARGOSS — PROJECT CMS
// =========================================================

const PROJECTS_REPO =
    "https://raw.githubusercontent.com/radjamkhadmicreator/ARGOSS/main/content/projects/";

const GITHUB_PROJECTS_API =
    "https://api.github.com/repos/radjamkhadmicreator/ARGOSS/contents/content/projects";

const GITHUB_RAW_ROOT =
    "https://raw.githubusercontent.com/radjamkhadmicreator/ARGOSS/main/";


// =========================================================
// HELPERS
// =========================================================

function cleanValue(value) {
    if (value === undefined || value === null) {
        return "";
    }

    return String(value).trim().replace(/^["']|["']$/g, "");
}


// =========================================================
// FRONT MATTER PARSER
// =========================================================

function parseFrontMatter(markdown) {

    const result = {};

    if (!markdown) {
        return result;
    }

    const match = markdown.match(
        /^---\s*([\s\S]*?)\s*---/
    );

    if (!match) {
        return result;
    }

    const frontMatter = match[1];

    const lines = frontMatter.split(/\r?\n/);

    let currentArray = null;
    let currentObject = null;

    lines.forEach(function (line) {

        if (!line.trim()) {
            return;
        }

        // -----------------------------------------
        // Array item
        // -----------------------------------------

        const arrayItemMatch = line.match(
            /^\s*-\s+([a-zA-Z0-9_]+):\s*(.*)$/
```
