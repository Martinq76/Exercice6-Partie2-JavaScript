function mouseOver(changeImgId) {
    document.getElementById(changeImgId.id).src = changeImgId.id + '_2.jpg';
}

function mouseOut(changeImgId) {
  document.getElementById(changeImgId.id).src = changeImgId.id + '.jpg';
}
