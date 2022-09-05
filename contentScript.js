const removePayWall = () => {
  const unwantedElements = document.querySelectorAll(
    "[data-temptation-position]"
  );
  unwantedElements.forEach((elm) => {
    console.log("Removed: ", elm);
    elm.remove();
  });
};

const unhideAllElements = () => {
  const hiddenItems = document.querySelectorAll("[style]");
  Array.prototype.forEach.call(hiddenItems, (elm) => {
    elm.style.cssText = elm.style.cssText.replace(/display: none;/g, "");
  });
};

removePayWall();
unhideAllElements();
