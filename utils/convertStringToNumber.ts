// This function converts a string to a number. If the value is not a string, it returns the default value.

export const convertStringToNumber = (value: string | number, defaultValue: number) => {
  if (typeof value === "string") {
    // Convert the string value to a number
    const convertedValue = Number(value);

    // Check if the converted value is NaN, then return the defaultValue
    if (isNaN(convertedValue)) {
      return defaultValue;
    } else {
      return convertedValue;
    }
  }

  // If the value is not a string, return the defaultValue
  return defaultValue;
};
