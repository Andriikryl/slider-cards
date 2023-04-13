let progress = 50;
let startx = 0;
let active = 0;
let is_down = false;

const speed_whell = 0.02;
const speed_drag = -0.1;

const getZindex = (array, index) =>
  array.map((idx, i) =>
    index === i ? array.length : array.length - Math.abs(index - i)
  );

const items = document.querySelectorAll(".sliderItem");

const showItem = (item, index, active) => {
  const zIndex = getZindex([...items], active)[index];
  item.style.setProperty("--zIndex", zIndex);
  item.style.setProperty("--active", (index - active) / items.length);
};
