async function searchMediaByKeyword(keyword) {
  let result = await search(keyword);

  if (!result)
    return null;

  // Get only first 10 items in the result.
  let foundItems = result.collection.items;
  let max = foundItems.length > 10 ? 10 : foundItems.length;

  let mediaItems = [];

  for (let i = 0; i < max; ++ i) {
    let item = foundItems[i].data[0];
    let mediaFiles = await retrieveMediaFileUrl(foundItems[i].href);

    // console.log(foundItems[i].data[0]);

    if (mediaFiles) {
      mediaItems.push({
        title: item.title,
        description: item.description,
        createdDate: item.date_created,
        mediaType: item.media_type,
        url: mediaFiles[0]
      });
    }
  }

  return mediaItems;
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

export {
  searchMediaByKeyword
}
