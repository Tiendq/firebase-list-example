async function searchMediaByKeyword(keyword) {
  let result = await search(keyword);

  if (!result)
    return null;

  // Get only first 10 items in the result.
  let foundItems = result.collection.items;
  let max = foundItems.length > 10 ? 10 : foundItems.length;

  if (max) {
    let items = foundItems.slice(0, max);
    let promises = items.map(async (item) => {
      let response = await fetch(item.href);
      return 200 === response.status ? response.json() : Promise.resolve([]);
    });

    let mediaItems = [];

    for (let i = 0; i < promises.length; ++ i) {
      let mediaFiles = await promises[i];

      // console.log(items[index].data[0]);

      mediaItems.push({
        title: items[i].data[0].title,
        description: items[i].data[0].description,
        createdDate: items[i].data[0].date_created,
        mediaType: items[i].data[0].media_type,
        url: mediaFiles.length ? mediaFiles[0] : ''
      });
    }

    return mediaItems;
  }

  return [];
}

async function search(keyword) {
  return fetch(`https://images-api.nasa.gov/search?q=${keyword}`)
    .then(response => {
      return {
        success: 200 === response.status,
        data: response.json()
      }
    })
    .then(result => {
      return result.success ? result.data : null;
    })
    .catch(error => {
      console.error(error);
      return null;
    });
}

/*
async function retrieveMediaFileUrl(url) {
  return fetch(url)
    .then(response => {
      return {
        success: 200 === response.status,
        data: response.json()
      }
    })
    .then(result => {
      // console.log(result);
      return result.success ? result.data : null;
    })
    .catch(error => {
      console.error(error);
      return null;
    });
}
*/

export {
  searchMediaByKeyword
}
