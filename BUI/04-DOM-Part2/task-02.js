function clearLinksPage() {
  const anchors = document.querySelectorAll("a");
  anchors.forEach((a) => {
    if (!a.getAttribute("href")) {
      a.remove();
    }
  });
}
