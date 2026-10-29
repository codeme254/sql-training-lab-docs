import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SQL Power Hour",
  description: "SQL Power Hour",
  
  head: [["link", { rel: "icon", href: "/sql.png" }]],

  themeConfig: {
    sidebar: [
      {
        items: [
          { text: "Welcome to SQL Power Hour", link: "/" },
          { text: "Introducing Technova", link: "/introducing-technova" },
          { text: "Setup", link: "/setup.md" },
          { text: "Basic Select", link: "/basic-select.md" },
          { text: "Filtering Data", link: "/filtering-data.md" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ggt-dennis-codeme254/sql-training-lab",
      },
    ],
  },
});
