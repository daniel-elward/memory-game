// const api = fetch("https://thesimpsonsapi.com/api/characters")
//   .then(function (response) {
//     //successful response
//     return response.json();
//   })
//   .then(function (response) {
//     const rawData = response.results;
//     const organisedData = [];

//     //organise array with path to character images
//     for (let i = 0; i < rawData.length; i++) {
//       organisedData.push(
//         `https://cdn.thesimpsonsapi.com/200${rawData[i].portrait_path}`,
//       );
//     }

//     console.log(organisedData);
//     return organisedData;
//   })
//   .catch(function (error) {
//     //error
//     console.error("error getting data from server");
//   });

// export default api;

async function getImages() {
  try {
    const response = await fetch("https://thesimpsonsapi.com/api/characters");
    const responseJson = await response.json();
    const rawData = responseJson.results;

    // const rawData = images;
    // const rawData = response.results;
    const organisedData = [];

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

// getImages();

export default getImages;
