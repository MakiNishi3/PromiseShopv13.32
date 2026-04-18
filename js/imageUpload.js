// imageUpload.js
export const uploadImage = (file) => {
  return new Promise((resolve) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    img.onload = () => resolve(img);
    reader.readAsDataURL(file);
  });
};

export let image = null;

export const setImage = async (file) => {
  image = await uploadImage(file);
  return image;
};
