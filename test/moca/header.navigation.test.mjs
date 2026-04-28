import { expect } from 'chai';
import { renderHeaderNavigation } from './header.navigation.render.mjs';

/**
 * Execute the same header-navigation assertions for the given rendering mode.
 *
 * @param {'njk'|'json'} mode Rendering mode.
 */
function runHeaderNavigationChecks(mode) {
    describe(`Header navigation (${mode})`, () => {
        it('renders full scenario with 3-level nav, active/current and expanded parents', () => {
            const renderedHTML = renderHeaderNavigation(mode, 'full');

            // Menu label should use `site.menu` override for backward compatibility.
            expect(renderedHTML).to.match(/class="govcy-menu-item govcy-expand-btn">\s*Menu override\s*<\/a>/);

            // Main menu aria label should come from govcyGetContent.
            expect(renderedHTML).to.match(/<ul class="govcy-menu-items" aria-label="Main menu">/);

            // Level-2 dropdown container for 3rd level support.
            expect(renderedHTML).to.match(/<li class="govcy-dropdown govcy-dropdown-right">/);

            // Current grandchild item should have active + aria-current.
            expect(renderedHTML).to.match(/<a href="\/en\/services\/birth-certificate" class="govcy-menu-item active" aria-current="true">\s*Birth certificate\s*<\/a>/);

            // Parent dropdown toggles should be active and initially collapsed.
            expect(renderedHTML).to.match(/Services<i><\/i><\/a>\s*<ul class="govcy-dropdown-menu govcy-expandable">/);
            expect(renderedHTML).to.match(/>Services<i><\/i><\/a>/);
            expect(renderedHTML).to.match(/>Certificates<i><\/i><\/a>/);
            expect(renderedHTML).to.match(/Services<i><\/i><\/a>[\s\S]*?govcy-dropdown-menu govcy-expandable/);
            expect(renderedHTML).to.match(/<a href="#" class="govcy-menu-item govcy-expand-btn active" aria-haspopup="true" aria-expanded="false">Services<i><\/i><\/a>/);
            expect(renderedHTML).to.match(/<a href="#" class="govcy-menu-item govcy-expand-btn active" aria-haspopup="true" aria-expanded="false">Certificates<i><\/i><\/a>/);
        });

        it('renders nav-only scenario without language menu blocks', () => {
            const renderedHTML = renderHeaderNavigation(mode, 'navOnly');

            // Main menu exists.
            expect(renderedHTML).to.match(/<ul class="govcy-menu-items" aria-label="Main menu">/);
            expect(renderedHTML).to.match(/>\s*Home\s*<\/a>/);

            // Language-specific menu blocks should not render.
            expect(renderedHTML).to.not.match(/govcy-header-language-area/);
            expect(renderedHTML).to.not.match(/govcy-desktop-menu-only/);
        });

        it('renders languages-only scenario without main navigation list', () => {
            const renderedHTML = renderHeaderNavigation(mode, 'languagesOnly');

            // Language controls should still render.
            expect(renderedHTML).to.match(/govcy-desktop-menu-only/);
            expect(renderedHTML).to.match(/govcy-header-language-area/);

            // Main navigation list should not render when there are no navigation items.
            expect(renderedHTML).to.not.match(/<ul class="govcy-menu-items" aria-label="Main menu">/);
        });

        it('renders dropdown2Levels scenario with second-level dropdown and no third-level menu', () => {
            const renderedHTML = renderHeaderNavigation(mode, 'dropdown2Levels');

            // Second-level dropdown structure should exist.
            expect(renderedHTML).to.match(/<li class="govcy-dropdown">/);
            expect(renderedHTML).to.match(/>Page 1<i><\/i><\/a>\s*<ul class="govcy-dropdown-menu govcy-expandable">/);
            expect(renderedHTML).to.match(/Subpage 1/);
            expect(renderedHTML).to.match(/Subpage 2/);

            // Third-level specific classes should not exist for this scenario.
            expect(renderedHTML).to.not.match(/govcy-dropdown-right/);
            expect(renderedHTML).to.not.match(/govcy-right-menu/);
        });

        it('renders plainHeader scenario without language or navigation menus', () => {
            const renderedHTML = renderHeaderNavigation(mode, 'plainHeader');

            // Header shell should still render with service identity.
            expect(renderedHTML).to.match(/<header class="govcy-header govcy-d-print-none" id="headerContainer">/);
            expect(renderedHTML).to.match(/<div class="govcy-service-container">/);

            // No top-right menu list and no expanded header menu area should render.
            expect(renderedHTML).to.not.match(/<ul class="govcy-menu-items">/);
            expect(renderedHTML).to.not.match(/govcy-header-menu-area/);
            expect(renderedHTML).to.not.match(/govcy-header-language-area/);
        });

        it('ignores malformed navigation entries safely', () => {
            const renderedHTML = renderHeaderNavigation(mode, 'malformed');

            // Item without localized label should be skipped completely.
            expect(renderedHTML).to.not.match(/\/en\/invalid/);

            // Valid item should still render and keep current state.
            expect(renderedHTML).to.match(/<a href="\/en\/valid" class="govcy-menu-item active" aria-current="true">\s*Valid page\s*<\/a>/);
        });

        it('renders full scenario in greek using language override', () => {
            const renderedHTML = renderHeaderNavigation(mode, 'full', 'el');

            // Menu label and main menu labels should be localized.
            expect(renderedHTML).to.match(/class="govcy-menu-item govcy-expand-btn">\s*Μενού override\s*<\/a>/);
            expect(renderedHTML).to.match(/>\s*Υπηρεσίες<i><\/i><\/a>/);
            expect(renderedHTML).to.match(/>\s*Πιστοποιητικά<i><\/i><\/a>/);
            expect(renderedHTML).to.match(/>\s*Πιστοποιητικό γέννησης\s*<\/a>/);

            // Href should come from the greek localized value.
            expect(renderedHTML).to.match(/href="\/el\/services\/birth-certificate"/);
        });
    });
}

describe('8. Header navigation rendering tests', () => {
    runHeaderNavigationChecks('njk');
    runHeaderNavigationChecks('json');
});
