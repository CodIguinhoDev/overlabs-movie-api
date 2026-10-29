export const treatmentToValueMonetary = (value: string): number => {
  const cleanText = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\$/g, "");

  const numericMatch = cleanText.match(/[\d.,]+/);

  if (!numericMatch) return 0;

  let numericValue = parseFloat(numericMatch[0].replace(",", "."));

  if (cleanText.includes("milhao") || cleanText.includes("milhoes") || cleanText.includes("mi")) {
    numericValue *= 1_000_000;
  } else if (cleanText.includes("bilhao") || cleanText.includes("bilhoes") || cleanText.includes("bi")) {
    numericValue *= 1_000_000_000;
  }
  return numericValue;
};

export const formatMonetaryValue = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 3,
  }).format(value);
};
