export default function validateIncrement(incrementNumber) {
  incrementNumber = incrementNumber || 1;
  return (key, newValue, oldValue, changes) => {
    let isValid = oldValue == newValue || oldValue == newValue - incrementNumber
    return isValid || `Must increment by ${incrementNumber}`;
  };
}
