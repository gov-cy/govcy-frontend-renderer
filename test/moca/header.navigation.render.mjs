import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { govcyFrontendRenderer } from '../../dist/index.mjs';

/**
 * Deep merge utility for plain objects used by test fixtures.
 * Arrays are replaced by the override value.
 *
 * @param {Object} base The base object.
 * @param {Object} override The overriding object.
 * @returns {Object} A merged object.
 */
function deepMerge(base, override) {
    const baseObject = base || {};
    const overrideObject = override || {};
    const merged = { ...baseObject };

    Object.keys(overrideObject).forEach((key) => {
        const baseValue = baseObject[key];
        const overrideValue = overrideObject[key];

        // Replace arrays and primitives directly.
        if (Array.isArray(overrideValue) || typeof overrideValue !== 'object' || overrideValue === null) {
            merged[key] = overrideValue;
            return;
        }

        // Recursively merge plain objects.
        merged[key] = deepMerge(baseValue, overrideValue);
    });

    return merged;
}

/**
 * Resolve fixture paths used by header-navigation tests/routes.
 *
 * @returns {{testRoot:string, fixtureRoot:string}} Resolved fixture directories.
 */
function getFixturePaths() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fixtureRoot = path.join(__dirname, '..');
    return { testRoot: __dirname, fixtureRoot };
}

/**
 * Load and merge data for a header-navigation scenario.
 *
 * @param {string} scenarioName The scenario key from `header-navigation-data.json`.
 * @param {string|null} langOverride Optional language override (for example `el`).
 * @returns {Object} Merged renderer input data with `site` and `pageData`.
 */
function getScenarioData(scenarioName = 'full', langOverride = null) {
    const { fixtureRoot } = getFixturePaths();

    // Reuse existing base data so the header layout renders with full defaults.
    const baseSiteData = JSON.parse(fs.readFileSync(path.join(fixtureRoot, '..', 'site-data.json'), 'utf8'));
    const basePageData = JSON.parse(fs.readFileSync(path.join(fixtureRoot, 'page-data.json'), 'utf8'));
    const scenarioMap = JSON.parse(fs.readFileSync(path.join(fixtureRoot, 'header-navigation-data.json'), 'utf8'));

    const scenario = scenarioMap[scenarioName] || scenarioMap.full;
    const data = deepMerge(deepMerge(baseSiteData, basePageData), scenario);

    // Optionally force a language for localization checks without duplicating fixtures.
    if (langOverride && data.site) {
        data.site.lang = langOverride;
    }

    return data;
}

/**
 * Render the header-navigation fixture using either Nunjucks or JSON mode.
 *
 * @param {'njk'|'json'} inputMode The rendering mode.
 * @param {string} scenarioName The scenario key from `header-navigation-data.json`.
 * @param {string|null} langOverride Optional language override (for example `el`).
 * @returns {string} Rendered HTML output.
 */
function renderHeaderNavigation(inputMode = 'njk', scenarioName = 'full', langOverride = null) {
    const renderer = new govcyFrontendRenderer();
    const { fixtureRoot } = getFixturePaths();
    const data = getScenarioData(scenarioName, langOverride);

    if (inputMode === 'json') {
        const jsonTemplate = JSON.parse(fs.readFileSync(path.join(fixtureRoot, 'header-navigation.json'), 'utf8'));
        return renderer.renderFromJSON(jsonTemplate, data);
    }

    const njkTemplate = fs.readFileSync(path.join(fixtureRoot, 'header-navigation.njk'), 'utf8');
    return renderer.renderFromString(njkTemplate, data);
}

export { renderHeaderNavigation, getScenarioData };
