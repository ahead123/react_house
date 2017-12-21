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
    'bed': 'https://www.svgrepo.com/show/115528/bed.svg',
    'table': 'https://png.icons8.com/windows/540/table.png',
    'desk': 'https://image.flaticon.com/icons/png/512/10/10910.png',
    'tv': 'https://vignette.wikia.nocookie.net/expanse/images/3/3b/Tv_icon.png/revision/latest?cb=20170225173256',
    'fridge': 'https://cdn2.iconfinder.com/data/icons/kitchen-line-icons-1/48/30-512.png',
    'microwave': 'https://image.flaticon.com/icons/png/512/47/47544.png'
  };
  return furnitureStore[item];
};

export const colorSelectDropDownValues = [
  {
    "value":"Select a color",
    "name":"Select a color"
  },
  {
    "value":"warning",
    "name":"Yellow"
  },
  {
    "value":"primary",
    "name":"Blue"
  },
  {
    "value":"success",
    "name":"Green"
  },
  {
    "value":"danger",
    "name":"Red"
  }
];


