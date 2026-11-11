# PK Hosting Pricing Page

Responsive pricing landing page built using **HTML5, CSS3 and vanilla JavaScript**.

## Included
- Monthly / annual billing toggle
- Promo code input (`WELCOME10` is a front-end demo code)
- Responsive pricing cards
- Plan comparison table
- One JavaScript data source (`PLANS` in `script.js`) powers both the cards and table
- Mobile navigation, FAQ accordion, and responsive layouts

## Run in VS Code
1. Extract `PKHosting_Pricing_Page_VSCode.zip`.
2. Open the extracted `pkhosting-pricing-page` folder in VS Code.
3. Open `index.html` in your browser, or install the VS Code **Live Server** extension and choose **Open with Live Server**.

No npm install or build step is required.

## Source data
The three shared hosting plan names, monthly and annual prices, and plan features were taken from PK Hosting's public hosting/pricing pages at the time this starter was prepared:
- https://www.pkhosting.com/hosting/
- https://www.pkhosting.com/pricing/

Always re-check current pricing and checkout terms before publishing because offers and prices can change.

## Promo code limitation
`WELCOME10` is a client-side demonstration only. It is not connected to the live PK Hosting billing platform, does not verify customer eligibility and does not apply a discount at checkout. For production, connect promo validation to the real billing/checkout backend and never rely on browser-only discount validation.

## Deploy the site
This is a static site. Deploy the project folder to Netlify, Vercel, GitHub Pages, or PK Hosting's own web hosting account.

### Netlify (quickest)
1. Sign in to Netlify.
2. Select **Add new site → Deploy manually**.
3. Drag the extracted `pkhosting-pricing-page` folder into the upload area.
4. Wait for deployment. Netlify will display the public URL.

### GitHub Pages
1. Create a GitHub repository and upload the files in this folder.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. Wait for the deployment to finish. Copy the public URL shown in Pages settings.

A live deployment has not been created by this ZIP generator. Publishing requires access to an authorized hosting account.
