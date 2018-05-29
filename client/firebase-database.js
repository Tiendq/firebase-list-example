async function loadData() {
  let ref = firebase.database().ref('media_items');

  return await ref.once('value').then(snapshot => {
    if (!snapshot.exists())
      return [];

    let data = snapshot.val();

    let items = [];

    for (let id in data)
      items.push(data[id]);

    // console.log(items);
    return items;
  });
}

function saveData(items) {
  let updateItems = {};

  items.forEach(item => updateItems[`media_items/${item.id}`] = item.deleted ? null : item);
  return firebase.database().ref().update(updateItems);
}

export {
  loadData,
  saveData
}
