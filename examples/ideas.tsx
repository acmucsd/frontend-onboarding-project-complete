import React from 'react';

const doConversion = (_currency: any, value: number): number => {
  return value;
};

interface UnitDisplayProps {
  currency: 'usd' | 'inr';
  value: number;
}
const UnitDisplay: React.FC<UnitDisplayProps> = ({ currency, value }) => {
  const converted = /* conversion logic */
  return <p>{converted}</p>;
};

export default UnitDisplay;


// parentheses let you type multiline tsx
const html = (
	<h1>tsx is jsx but with types!</h1>
 );
 // import {thing} from 'file
 export const thing = (
	<span className='special'>wow!</span>
 );
 // import html from 'file'
 export default html; 
 
 
 
 