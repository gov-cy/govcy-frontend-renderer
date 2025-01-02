# Changelog
 
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.0] - 2025-01-01
### Added
- Browser version of the renderer and compiled templates.  Distribution files are `dist/govcyCompiledTemplates.browser.js`, `dist#govcyFrontendRenderer.browser.js`
- Test page for browser version on `client\testclientjson.html`
- Test script that checks browser it renders on `test\moca\render.client.test.mjs` 

### Changed
- Rollup build script to create the browser version
- Test scripts 
- `unit-test.yml` workflow to start the express server

## [v1.0.2] - 2024-12-21
### Added
- Added markdown component

## [v1.0.1] - 2024-11-28
### Changed
- Updated reademe
- Updated version workflow to publish on NPM

## [v1.0.0] - 2024-11-28
### Added
- Added complex summary list

## [v0.0.19] - 2024-11-26
### Added
- Version control workflow

## [v0.0.15] - 2024-11-26
### Added
- Text Area component

## [v0.0.14] - 2024-11-19
### Added
- Conditional radios
### Changed
- Added `params.hideFormControlError` in elements `checkboxes`, `fileInput`, `radios`, `select`, `textInput` to hide the form control error (red line on the left). Mostly used in conditional radio elements.

## [v0.0.13] - 2024-11-05
### Added
- Summary list component
- `govcyUtilities.govcyElementsFromArray` to render govcy elements from an array

## [v0.0.12] - 2024-09-16
### Added
- Table component
- Precompile nunjucks script (experimental)

### Changed
- Use `merge` filter in nunjucks

## [v0.0.11] - 2024-09-05
### Added
- Tag component

## [v0.0.10] - 2024-09-05
### Added
- Back link component

## [v0.0.9] - 2024-09-04
### Added
- `"isTesting" : true,` option for site data

### Changed
- Site and page data are now multilingual
- Changed the structure of data passed when rendering with nunjucks

## [v0.0.8] - 2024-09-04
### Added
- Rollup and `built` script

### Changed
- Using rollup, `govcyFrontendRenderer` is available as an ES module and CommonJS
- The built versions are now available in the `dist` folder
- Unit tests are made on the ES module version in the `dist` folder

## [v0.0.7] - 2024-08-30
### Added
- File input component
- File view component

## [v0.0.6] - 2024-08-29
### Added
- Checkboxes component

## [v0.0.5] - 2024-08-28
### Added
- Fieldset component
- Radios component 

### Changed
- Form control to have `lang='{{ params.lang }}'`attribute 

## [v0.0.4] - 2024-08-28
### Added
- Text input component

## [v0.0.3] - 2024-08-25
### Changed
- govcyFrontendRenderer to pass site data as global valiables in nunjucks templates
- Handle localized content in a page or site level
    - pass global lang parameter 
    - set priotity on lang in `govcyUtilities.govcyLocalizeContent`
    - add a unit test with no lang in site global data
    - add `lang='{{ params.lang }}'` in components

## [v0.0.2] - 2024-08-21
### Added
- Unit test on push automation

## [v0.0.1] - 2024-08-21
### Added
- Initial release