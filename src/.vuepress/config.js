const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "旭哥带你上王者",
  theme: "reco",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,

    // 导航栏
    nav: [
      {
        text: "Frontend",
        icon: "reco-category",
        items: [
          { text: "HTML", link: "/Frontend/HTML/html" },
          { text: "新手指南", link: "/guide/vue" },
        ],
      },
      {
        text: "前端",
        link: "/config/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    // 侧边栏
    sidebar: {
      "/Frontend/": [
        {
          title: "HTML",
          collapsable: true,
          children: ["HTML/html"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
