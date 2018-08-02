anime.timeline({loop: true})
  .add({
    targets: '.circle .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.circle .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  })
  // }).add({
  //   targets: '.circle .circle-dark',
  //   scale: [0, 1],
  //   duration: 1100,
  //   easing: "easeOutExpo",
  //   offset: '-=600'
    .add({
    targets: '.circle .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.circle .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 700,
    offset: '-=1000'
  }).add({
    targets: '.circle',
    opacity: 0,
    duration: 200,
    easing: "easeOutExpo",
    delay: 500
  });

