const method = 2;

if (method === 1) {
  const rem = () => {
    const unwantedElements = document.querySelectorAll(
      "[data-temptation-position]"
    );
    unwantedElements.forEach((elm) => {
      console.debug("Removed: ", elm);
      elm.remove();
    });
  };

  const unhideAllElements = () => {
    const hiddenItems = document.querySelectorAll("[style]");
    Array.prototype.forEach.call(hiddenItems, (elm) => {
      elm.style.cssText = elm.style.cssText.replace(/display: none;/g, "");
    });
  };

  const run = () => {
    chrome.action.setIcon({ path: "icon.png" });
    rem();
    unhideAllElements();
  };

  while (true) {
    setTimeout(() => {
      run();
    }, 1000);
  }
}

if (method === 2) {
  var s = document.createElement("script");
  s.src = chrome.runtime.getURL("script.js");
  s.onload = function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(s);
}
