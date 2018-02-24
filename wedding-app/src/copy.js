import LocalizedStrings from 'react-localization';

const defaultCopy = {
  attireLabel: 'Attire & Colour',
  color: 'colour',
  ambientTemp: 'mid to high 20s',
  favourite: 'favourite',
  vest: 'waistcoat',
};
 
export const copy = new LocalizedStrings({
 'en-us': {
   ...defaultCopy,
   attireLabel: 'Attire & Color',
   color: 'color',
   ambientTemp: 'mid to high 70s',
  favourite: 'favorite',
  vest: 'vest',
 },
 'en-nz': {
   ...defaultCopy,
 },
});

export const setLanguage = copy.setLanguage.bind(copy);
