export const colorPicker = (color) => {
	let colorPalette = {
    'success': '#27ae60',
    'primary': '#2980b9',
    'warning': '#f1c40f',
    'danger': '#c0392b'
  };
  return colorPalette[color];
};

export const furniturePicker = (item) => {
	let furnitureStore = {
    'couch': 'https://i.pinimg.com/originals/cb/65/fb/cb65fb3931a2b1e3cb6b1a8dfbfceb82.jpg',
    'chair': 'https://png.icons8.com/small/540/sofa.png',
    'bed': 'http://www.ljubljanaidea.com/images/content/images/menu/acc.png',
    'table': 'https://png.icons8.com/windows/540/table.png'
  };
  return furnitureStore[item];
};