// Global Variables
let userData;

// Docsify Configurations
window.$docsify = {
  name: "Journey Book",
  repo: "collab-community/journey-book",
  themeColor: "#FF6863",
  loadSidebar: "_layouts/sidebar.md",
  loadNavbar: "_layouts/navbar.md",
  homepage: "index.md",
  relativePath: true,
  executeScript: true,
  search: "auto",
  search: {
    maxAge: 86400000,
    paths: "auto",
    placeholder: "Search",
    noData: "No Results found!",
    depth: 6,
    hideOtherSidebarContent: false,
  },
  vueGlobalOptions: {
    data() {
      return {
        users: null,
      };
    },
    created() {
      fetch("Data.json")
        .then((response) => response.json())
        .then((data) => {
          this.users = sortUsers(data);
          userData = sortUsers(data);
        })
        .catch((err) => console.log(err));
    },
  },
  darklightTheme: {
    siteFont: "PT Sans",
    defaultTheme: "dark",
    codeFontFamily: "Roboto Mono, Monaco, courier, monospace",
    bodyFontSize: "17px",
    dark: {
      accent: "#42b983",
      toogleBackground: "#ffffff",
      background: "#171717",
      textColor: "#b4b4b4",
      codeTextColor: "#ffffff",
      codeBackgroundColor: "#171717",
      borderColor: "#0d2538",
      blockQuoteColor: "#858585",
      highlightColor: "#d22778",
      sidebarSublink: "#b4b4b4",
      codeTypeColor: "#ffffff",
      coverBackground:
        "linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)",
      toogleImage:
        "url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)",
    },
    light: {
      accent: "#42b983",
      toogleBackground: "#ffffff",
      background: "##ffffff",
      textColor: "#000000",
    },
  },
};
// Function to sort the users alphabetically
const sortUsers = (users) => {
  const sortedUsers = users.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sortedUsers;
};

// Update Favicon
window.addEventListener("hashchange", function () {
  if (!location.hash.startsWith("#/journeys")) {
    document
      .getElementById("favicon")
      .setAttribute("href", "./assets/favicon.ico");
  } else {
    const username = location.hash.split("/")[2];
    const user = userData.find((user) => user.username === username);
    const userAvatar = `https://github.com/${user.username}.png`
    const favicon = `https://images.weserv.nl/?url=${userAvatar}&mask=circle&mtrim`;
    document.getElementById("favicon").setAttribute("href", favicon);
  }
});
