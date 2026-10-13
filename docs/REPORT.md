# Project Report: Cloud-Based Static Website Deployment

| | |
|---|---|
| Name | YOUR NAME |
| Organisation | Cognevance Technologies |
| Domain / Level | Cloud Computing & DevOps, Level 1 (Easy) |
| Date | DD Month 2026 |
| Live URL | https://YOUR_DOMAIN |
| Repository | https://github.com/USERNAME/cognevance_static-website-deployment |

## 1. Introduction
This project deploys a responsive static website to a cloud platform with HTTPS, a custom domain, an automated deployment pipeline and continuous monitoring. It demonstrates the basic DevOps cycle: code, version control, automated delivery, and observation.

## 2. Objectives
1. Build a responsive website using HTML, CSS and JavaScript.
2. Host it on a cloud platform (GitHub Pages).
3. Configure a custom domain and basic security.
4. Use Git and GitHub for version control.
5. Monitor uptime and performance.
6. Document the process.

## 3. Tools and technologies
HTML5, CSS3, JavaScript (ES5-compatible), Git, GitHub, GitHub Pages, GitHub Actions, HTMLHint, Lighthouse CI, UptimeRobot, curl.

## 4. Design and implementation
### 4.1 Website
(Describe sections, responsive approach, dark mode, form validation, accessibility. See README section 5.)

### 4.2 Hosting
GitHub Pages was selected because it is free, provides a CDN and managed TLS certificates, and integrates natively with GitHub Actions. Netlify and AWS S3 + CloudFront configurations are also provided in `deploy/`.

### 4.3 CI/CD pipeline
On each push to `main`, the pipeline lints HTML, checks required files, checks JavaScript syntax, then publishes `site/` to GitHub Pages. Pull requests run validation only.

### 4.4 Custom domain and security
(State the domain used, DNS records added, and the date HTTPS was enforced. Summarise the security table from README section 9.)

### 4.5 Version control
(State branching strategy, number of commits, pull requests, and the release tag.)

### 4.6 Monitoring
Three layers: GitHub Actions uptime check every 15 minutes (status, TLS, latency threshold), UptimeRobot external monitor, and Lighthouse CI for performance, accessibility, best practices and SEO.

## 5. Results
| Metric | Result |
|---|---|
| Deployment time (push to live) | _ |
| Uptime over monitoring period | _ |
| Average response time | _ |
| Lighthouse (Perf / A11y / BP / SEO) | _ / _ / _ / _ |
| SecurityHeaders.com grade | _ |
| SSL Labs grade | _ |

Screenshots: see `docs/screenshots/` and README section 16.

## 6. Challenges and solutions
| Challenge | Solution |
|---|---|
| (e.g. DNS propagation delay) | (e.g. waited and verified with `dig`) |
| (e.g. Enforce HTTPS unavailable) | (e.g. waited for certificate issuance) |

## 7. Conclusion
(2-4 sentences on what was achieved and learned.)

## 8. Future improvements
CloudFront CDN with Terraform, automated link checks, alert integration with Slack/Telegram, preview deployments.

## 9. Experience, review and suggestions
(Short honest paragraph for Cognevance: what you found useful or difficult and suggestions for the programme.)
