export default function numPad(
  number: number,
  screenValue: number,
  setScreenValue: React.Dispatch<React.SetStateAction<number>>
) {
  /* Do nothing if screen value if higher than 15*/
  if (screenValue.toString().length > 15) {
    console.log("num higher than 15");
    return;
  }

  /*if screen value is 0 then replace the 0 with the number pressed
  if it is not 0 then treat numbers as string and concat them*/
  if (screenValue === 0) {
    setScreenValue(number);
    return;
  }
  const strNumber = number.toString();
  const strScreenValue = screenValue.toString();
  const newStrNumber = strScreenValue + strNumber;
  setScreenValue(parseInt(newStrNumber));
}
