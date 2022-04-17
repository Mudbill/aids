export function getImageSize(ref: HTMLImageElement) {
  return {
    x: ref.naturalWidth / 2,
    y: ref.naturalHeight / 2,
  };
}
