# CSV to Qualtrics

This project converts internal CSV data into a format for [Qualtrics "Texascale Magazine Subscription" contact list][ts-qualtrics-contacts].

[ts-qualtrics-contacts]: https://utexas.ca1.qualtrics.com/Q/PanelsSection?ContextLibraryID=GR_0iGxpsbtndfkf8V

## Usage

1. Edit templates and data in:
    - `templates/`
    - `assets/`
2. (If not already done) Install dependencies:
    - `npm ci` (a.k.a. `rm -rf node_modules && npm install`)
3. Run build script:
    - `npm run build`
4. Confirm output in:
    - `dist/`
5. Use output.
