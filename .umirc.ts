import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "blog/index" },
    { path: "/docs", component: "docs" },
    { path: '/blog', component: 'blog/index'},
    { path: '/detail', component: 'blog/detail'},
    { path: '/add', component: 'blog/add'},
    { path: '/edit', component: 'blog/edit'},
  ],

  npmClient: "pnpm",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss", "@umijs/plugins/dist/dva"],
  dva: {},
});
