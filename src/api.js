const organisedData = [];

export default async function getImages() {
  try {
    const response = await fetch("https://thesimpsonsapi.com/api/characters");
    const data = await response.json();
    const rawData = data.results;

    //organise array with path to character images
    for (let i = 0; i < rawData.length; i++) {
      organisedData.push(
        `https://cdn.thesimpsonsapi.com/200${rawData[i].portrait_path}`,
      );
    }

    console.log(organisedData);
    return organisedData;
  } catch (error) {
    console.error(error);
  }
}

getImages();
