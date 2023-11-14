const formatNumber = (value: string): string => {
  const num = parseInt(value);
  if (num > 1000000) {
    return (num / 1000000).toFixed(1) + " million";
  } else if (num > 1000) {
    return (num / 1000).toFixed(1) + " k";
  } else {
    return num.toString();
  }
};

export default formatNumber