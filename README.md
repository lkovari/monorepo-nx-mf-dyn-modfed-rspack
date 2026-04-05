# monorepo-nx-mf-dyn-modfed-rspack
monorepo-nx-mf-dyn-modfed with rspack

## Create from the scratch

1. pnpm dlx create-nx-workspace@latest nx-mf-df --preset=apps
2. cd nx-mf-df
3. pnpm add -D @nx/angular
4. pnpm exec nx g @nx/angular:application \
  --directory=apps/main-host \
  --prefix=nxmfdf \
  --bundler=rspack \
  --port=4200 \
  --standalone \
  --routing
5. pnpm exec nx g @nx/angular:application apps/mf_remote_a --prefix=nxmfdf --bundler=rspack --port=4201 --standalone --routing --style=css --unitTestRunner=vitest-analog --e2eTestRunner=playwright --interactive=false
6. pnpm exec nx g @nx/angular:application apps/mf_remote_b --prefix=nxmfdf --bundler=rspack --port=4202 --standalone --routing --style=css --unitTestRunner=vitest-analog --e2eTestRunner=playwright --interactive=false
7. pnpm exec nx g @nx/angular:application apps/mf_remote_c --prefix=nxmfdf --bundler=rspack --port=4203 --standalone --routing --style=css --unitTestRunner=vitest-analog --e2eTestRunner=playwright --interactive=false
8. pnpm exec nx g @nx/angular:library libs/common-ui-lib \
  --buildable \
  --standalone \
  --prefix=nxmfdf \
  --style=css \
  --unitTestRunner=vitest-angular \
  --interactive=false
9. delete common-ui-lib component
10. npx nx g @nx/angular:component libs/common-ui-lib/src/lib/angular-version/angular-version.ts --standalone --export --no-interactive
11. npx nx g @nx/angular:component libs/common-ui-lib/src/lib/nx-version/nx-version.ts --standalone --export --no-interactive
12. Implement the content of nx-version and angular-version components
13. npx nx generate @nx/angular:component --path=apps/main-host/src/app/shared/components/header/header --standalone
14. npx nx generate @nx/angular:component --path=apps/main-host/src/app/shared/components/main/main --standalone
15. npx nx generate @nx/angular:component --path=apps/main-host/src/app/shared/components/footer/footer --standalone
16. npx nx generate @nx/angular:component --path=apps/main-host/src/app/shared/components/layout/layout --standalone
17. Implement header, main, footer, layout logic
, delete nx-welcome, tight in the Layout into app component