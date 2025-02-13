
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
          description: "面朝大海，春暖花开",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/homepage/cn/blog/";
          },
        },{id: "post-hello-world",
      
        title: "Hello, World",
      
      description: "Hello, World",
      section: "文章",
      handler: () => {
        
          window.location.href = "/homepage/cn/blog/2025/Hello,-World/";
        
      },
    },{id: "post-你好-世界",
      
        title: "你好，世界",
      
      description: "你好，世界",
      section: "文章",
      handler: () => {
        
          window.location.href = "/homepage/cn/blog/2025/%E4%BD%A0%E5%A5%BD-%E4%B8%96%E7%95%8C/";
        
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
