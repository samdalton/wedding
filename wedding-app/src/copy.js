import LocalizedStrings from 'react-localization';
 
export const copy = new LocalizedStrings({
 'en-us': {
   attireLabel: 'Attire & Color',
 },
 'en-nz': {
   attireLabel: 'Attire & Colour',
 },
});

export const setLanguage = copy.setLanguage.bind(copy);
