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
  rem();
  unhideAllElements();
};

run();

function sendIt() {
  run();
  setTimeout(sendIt, 1000);
}

setTimeout(sendIt, 1000);
