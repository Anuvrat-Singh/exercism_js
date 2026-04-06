//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  // throw new Error('Remove this line and implement the function');
  var last2 = number % 100
  var last1 = number % 10
  var suffix;
  if(last2 == 11 || last2 ==12 || last2 ==13)
    suffix = 'th';
  else if(last2 == 1 || last1 ==1)
    suffix= 'st';
  else if(last2 == 2 || last1 ==2)
    suffix = 'nd';
  else if(last2 ==3 || last1 ==3)
    suffix ='rd';
  else suffix='th';

  return ("" +name+ ", you are the " + number +suffix + " customer we serve today. Thank you!")
};
