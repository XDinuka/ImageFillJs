class ImageFill {
  static fill(grabfrom) {
    if (grabfrom == undefined || grabfrom == null || 0 === grabfrom.length) return;
    fetch(grabfrom).then(function (response) {
      if (response.status === 200) {
        response.json().then(function (data) {
          document.querySelectorAll("img[data-imagefill").forEach((img) => {
            let temp = data[img.dataset.imagefill];
            if (temp == undefined || temp == null || 0 === temp.length) return;
            img.src = temp;
          });
        });
      }
    });
  }
}
