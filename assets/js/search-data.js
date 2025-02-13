
const currentUrl = window.location.href;
const siteUrl = "https://housefz.github.io"; 
let updatedUrl = currentUrl.replace("https://housefz.github.io/homepage", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "/homepage", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/homepage/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "Facing the sea, with spring blossoms.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/homepage/blog/";
          },
        },{id: "post-hello-world",
      
        title: "Hello, World",
      
      description: "Hello, World",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/homepage/blog/2025/Hello,-World/";
        
      },
    },{id: "post-你好-世界",
      
        title: "你好，世界",
      
      description: "你好，世界",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/homepage/blog/2025/%E4%BD%A0%E5%A5%BD-%E4%B8%96%E7%95%8C/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/homepage/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%6F%75%73%65_%66%7A@%71%71.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/housefz", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/homepage/feed.xml", "_blank");
        },
      },{
          id: 'lang-cn',
          title: 'cn',
          section: 'Languages',
          handler: () => {
            window.location.href = "/homepage/cn" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
