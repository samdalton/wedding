import LocalizedStrings from 'react-localization';
 
export const copy = new LocalizedStrings({
 'en-us': {
   attireLabel: 'Attire & Color',
   color: 'color',
 },
 'en-nz': {
   attireLabel: 'Attire & Colour',
   color: 'colour',
 },
});

export const setLanguage = copy.setLanguage.bind(copy);
