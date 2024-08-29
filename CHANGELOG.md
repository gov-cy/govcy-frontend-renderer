# Changelog
 
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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