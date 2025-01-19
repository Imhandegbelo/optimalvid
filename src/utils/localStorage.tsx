export const addItem = (item:number) => {
  const likes = JSON.parse(localStorage.getItem("likes"));
  likes.push(item);
  localStorage.setItem("likes", JSON.stringify(likes));
};

export const removeItem = (id) => {
  const likes = JSON.parse(localStorage.getItem("likes"));
  likes.filter((it) => it.id !== id);
  localStorage.setItem("likes", JSON.stringify(likes));
};

export const getItem = () => {
  const likes = JSON.parse(localStorage.getItem("likes"));
  return likes;
};
