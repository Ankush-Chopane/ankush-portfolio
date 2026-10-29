# Portfolio Engineering & Maintenance Guidelines

Always adhere to these guidelines for all future tasks in this repository:

1. **Inspect First**: Always inspect the existing implementation before proposing or making changes.
2. **Reuse Existing Assets**: Reuse existing components, hooks (`useReveal`), and CSS utility classes (`hover-lift`, `arrow-slide`, `bg-grid-subtle`, `bg-dots-subtle`).
3. **No Unnecessary Rewrites**: Do not rewrite working sections unnecessarily.
4. **Preserve Framework & Architecture**: Do not change the framework (Next.js 16 App Router + React 19 + Tailwind CSS v4).
5. **Zero Unnecessary Dependencies**: Do not install packages unless explicitly requested or genuinely required.
6. **Preserve Working Functionality**: Preserve all functional routes, contact forms, navigation states, and downloads.
7. **No Placeholders**: Never replace real portfolio data with placeholder/dummy text.
8. **No Fabricated Content**: Never invent achievements, metrics, companies, statistics, or users not already present in the portfolio or resume.
9. **Maintain Responsiveness**: Ensure flawless display across mobile (320px+), tablet, desktop, and ultrawide viewports.
10. **Consistent Visual Language**: Maintain the established editorial aesthetic (Fraunces serif, IBM Plex Sans, subtle amber accents, technical coordinate markers).
11. **Type & React Safety**: Ensure clean TypeScript types and zero React console/hydration warnings.
12. **Build Verification**: Run `npm run build` after changes to verify Turbopack and TypeScript pass without errors.
13. **Regression Prevention**: Immediately resolve any introduced regressions before completing a task.
14. **Performant & Accessible Motion**: Keep animations hardware-accelerated (`transform`, `opacity`), respect `prefers-reduced-motion: reduce`, and maintain visible focus outlines (`:focus-visible`).
15. **Incremental Evolution**: Favor small, maintainable, iterative improvements over large architectural changes.
