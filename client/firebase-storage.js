async function uploadFile(file) {
  let ref = firebase.storage().ref().child(`media/${file.name}`);

  try {
    let snapshot = await ref.put(file);
    let fileUrl = await snapshot.ref.getDownloadURL();

    return {
      path: snapshot.metadata.fullPath,
      url: fileUrl
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export {
  uploadFile
}
