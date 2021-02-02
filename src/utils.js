  export const valueToBoolean = (value) => {
    if (value !== 'false') {
      return !!value;
    }
    return false
  }