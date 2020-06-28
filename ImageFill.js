class ImageFill {
  static fill(grabfrom) {
    if (grabfrom == undefined || grabfrom == null) return;
    fetch(grabfrom).then(function (response) {
      if (response.status === 200) {
        response.json().then(function (data) {
          document.querySelectorAll("img[data-imagefill").forEach((img) => {
            let temp = data[img.dataset.imagefill];
            if (temp == undefined || temp == null || temp.length == 0) return;
            img.src = temp;
          });
        });
      }
    });
  }
}
