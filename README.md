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
8. 