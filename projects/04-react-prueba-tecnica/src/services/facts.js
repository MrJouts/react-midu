const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const CAT_ENDPOINT_IMAGE_URL = (threeFirstWords) =>
  `https://cataas.com/cat/says/${threeFirstWords}?font=Impact&fontSize=50&fontColor=red&position=center&width=500&height=500`;

export const getRandomFact = async () => {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const data = await response.json();
  const { fact } = data;
  return fact;
};

export const getCatImageUrl = (threeFirstWords) => {
  return fetch(CAT_ENDPOINT_IMAGE_URL(threeFirstWords)).then((data) => {
    return data.url;
  });
};
