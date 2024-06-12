function getImageURL(name) {
  return new URL(`../imgs/${name}`, import.meta.url).href;
}

export { getImageURL };
