export const getEnergyData = async () => {
  try {
    const response = await fetch(
      "https://api.carbonintensity.org.uk/generation"
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error("Failed to fetch energy data");
  }
};
