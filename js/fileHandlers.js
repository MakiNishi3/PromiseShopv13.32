// fileHandlers.js
export const supportedfonts = [".ttf", ".otf"];
export const supportedimg = [".png", ".jpg", ".jpeg", ".svg"];

export const loadfilter = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(JSON.parse(reader.result));
    reader.readAsText(file);
  });
};

export const createfilter = (config) => {
  return JSON.stringify(config);
};

export const savefilterasdotpsf = (config, name = "filter.psf") => {
  const blob = new Blob([JSON.stringify(config)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
};
