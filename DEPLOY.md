# Deploy Dongpai Metal site

Domain: **dongpaimetal.com** · Platform: **Cloudflare Pages** (recommended)

---

## What's ready in this repo

- 63 files committed to `main` branch
- `_headers` — security + cache rules (auto-applied by Cloudflare Pages)
- `_redirects` — `/zh-hans` → `/?lang=zh-hant`, `www` → apex
- `sitemap.xml` — 7 URLs (home + 5 project pages + PDF profile)
- `robots.txt` — pointing at the sitemap

---

## What you need to do (≈ 20 min total)

### 1. Buy the domain

Recommended: **Cloudflare Registrar** (cost-price, ~$9.15/yr, no markup, free WHOIS privacy, auto-connects to Cloudflare DNS).
Fallback: Namecheap (~$10/yr) / Aliyun (¥80/yr, needs ICP filing for mainland hosting).

1. Sign in to https://dash.cloudflare.com → Domain Registration → Register Domains
2. Search `dongpaimetal.com` → confirm available → checkout
3. WHOIS privacy: turn on (free at CF)

### 2. Create the GitHub repo

1. Create a new private/public repo at https://github.com/new — e.g. `dongpai-site`
2. Don't init with README (we already have files)
3. Copy the SSH URL (e.g. `git@github.com:YOUR-USER/dongpai-site.git`)

Then in this folder, run:

```bash
git remote add origin git@github.com:YOUR-USER/dongpai-site.git
git push -u origin main
```

### 3. Create Cloudflare Pages project

1. https://dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
2. Authorise CF to read your GitHub
3. Pick the `dongpai-site` repo
4. Build settings:
   - **Framework preset:** None
   - **Build command:** (empty — pure static)
   - **Build output directory:** `/`
   - **Root directory:** `/`
5. Deploy — done in ~30 sec
6. You get a temp URL like `dongpai-site.pages.dev` — already live

### 4. Connect dongpaimetal.com

1. In the Pages project → Custom domains → Set up custom domain → enter `dongpaimetal.com`
2. CF auto-adds CNAME / A records (if domain is on CF Registrar)
3. SSL provisions automatically in ~2 minutes
4. Repeat for `www.dongpaimetal.com` (optional — `_redirects` already handles www → apex)

### 5. (Optional) Faster updates

Every `git push` to `main` auto-deploys to Cloudflare Pages in ~30 sec.

---

## Local preview (already running)

```
http://127.0.0.1:4321/                          ← home
http://127.0.0.1:4321/?lang=zh-hant             ← traditional Chinese
http://127.0.0.1:4321/work/cullinan-harbour.html ← project page
```

---

## After deployment — verify

1. https://dongpaimetal.com/ → home loads, hero rotates
2. https://dongpaimetal.com/?lang=zh-hant → traditional Chinese
3. https://dongpaimetal.com/work/cullinan-harbour.html → project page
4. https://dongpaimetal.com/assets/pdf/Dongpai-Metal-Group-Profile.pdf → PDF downloads
5. Test mobile / Safari / WeChat in-app browser

## Submit to search engines

- Google Search Console: https://search.google.com/search-console → add property → verify via DNS TXT (CF supports automatic)
- Bing Webmaster: https://www.bing.com/webmasters
- Baidu Webmaster (for mainland traffic, if ICP filing exists): https://ziyuan.baidu.com

Once added, submit `https://dongpaimetal.com/sitemap.xml` in each console.
