
const currentUrl = window.location.href;
const siteUrl = "https://housefz.github.io"; 
let updatedUrl = currentUrl.replace("https://housefz.github.io/homepage", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "/homepage", "");
}
if ("cn".length > 0) {
  updatedUrl = updatedUrl.replace("/cn", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-关于",
    title: "关于",
    section: "导航菜单",
    handler: () => {
      window.location.href = "/homepage/cn/";
    },
  },{id: "nav-博客",
          title: "博客",
          description: "一个简单的学术主题",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/homepage/cn/blog/";
          },
        },{id: "nav-简历",
          title: "简历",
          description: "这是一个页面描述。你可以在 &#39;_pages/cv.md&#39; 中修改它。你也可以更改或移除顶部的 PDF 下载按钮。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/homepage/cn/cv/";
          },
        },{id: "dropdown-出版物",
              title: "出版物",
              description: "",
              section: "下拉菜单",
              handler: () => {
                window.location.href = "/homepage/cn";
              },
            },{id: "dropdown-分隔线",
              title: "分隔线",
              description: "",
              section: "下拉菜单",
              handler: () => {
                window.location.href = "/homepage/cn";
              },
            },{id: "dropdown-项目",
              title: "项目",
              description: "",
              section: "下拉菜单",
              handler: () => {
                window.location.href = "/homepage/cn";
              },
            },{id: "dropdown-分隔线",
              title: "分隔线",
              description: "",
              section: "下拉菜单",
              handler: () => {
                window.location.href = "/homepage/cn";
              },
            },{id: "dropdown-博客",
              title: "博客",
              description: "",
              section: "下拉菜单",
              handler: () => {
                window.location.href = "/homepage/cn/blog/";
              },
            },{id: "news-一个简单的一行公告",
          title: '一个简单的一行公告。',
          description: "",
          section: "新闻",},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "新闻",handler: () => {
              window.location.href = "/homepage/cn/news/announcement_2/";
            },},{id: "news-一个简单的公告-用markdown表情符号表示-sparkles-smile",
          title: '一个简单的公告，用Markdown表情符号表示！ :sparkles: :smile:',
          description: "",
          section: "新闻",},{
        id: 'social-email',
        title: '发送邮件',
        section: '社交网络',
        handler: () => {
          window.open("mailto:%68%6F%75%73%65_%66%7A@%71%71.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: '社交网络',
        handler: () => {
          window.open("https://github.com/housefz", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '社交网络',
        handler: () => {
          window.open("/homepage/feed.xml", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: '社交网络',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: '语言',
          handler: () => {
            window.location.href = "/homepage" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '切换到浅色主题',
      description: '切换到浅色主题',
      section: '主题',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '切换到深色主题',
      description: '切换到深色主题',
      section: '主题',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '使用系统默认主题',
      description: '根据系统默认主题切换',
      section: '主题',
      handler: () => {
        setThemeSetting("system");
      },
    },];
