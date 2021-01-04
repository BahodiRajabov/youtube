let $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

let $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

let createElement = function (element, elementClass, text) {
  let newElement = document.createElement(element);
  if (elementClass) {
    newElement.setAttribute("class", elementClass);
  }
  if (text) {
    newElement.textContent = text;
  }
  return newElement;
};

let header = $_(".header");
// set megin top on tablet and mobile mode
document.body.style.marginTop =
$_(".header").offsetHeight + "px";
document.body.style.marginLeft =
$_(".sidebar").offsetWidth + "px";

let recommendedVideos = [
  {
    id: "a023",
    img: "/images/recommend-img-1.jpg",
    duration: "3:16",
    views: "12k",
    postedTime: "4 month ago",
    createrBy: "Usmon Masudjonov",
    title: "Sayt uchun dark va light mavzularini(theme) qo'shishni o'rganamiz"
  },
  {
    id: "b002",
    img: "/images/recommend-img-2.jpg",
    duration: "43:11",
    views: "134k",
    postedTime: "2 days ago",
    createrBy: "Bahodir Rajabov",
    title: "Kinolar sayti 🎬 ( 3-qism. Kinolarni qidirish funksiyasi 🔍"
  },
  {
    id: "c003",
    img: "/images/recommend-img-3.jpg",
    duration: "53:19",
    views: "99k",
    postedTime: "1 days ago",
    createrBy: "Rasul Ismoilov",
    title: "HTML & CSS dan foydalanib dropdown menu yasash, uzbek tilida"
  }
]
let recommendedChannel = {
    id: "a100",
    img: "/images/avatar.jpg",
    name: "Rasul Ismoilov",
    videos: [
      {
        id: "adfr",
        img: "/images/video-img-1.jpg",
        duration: "3:16",
        views: "12k",
        postedTime: "4 month ago",
        createrBy: "Usmon ",
        title: "Sayt uchun dark va light mavzularini(theme) qo'shishni o'rganamiz"
      },
      {
        id: "2353",
        img: "/images/video-img-2.jpg",
        duration: "43:11",
        views: "134k",
        postedTime: "2 days ago",
        createrBy: "Bahodir Rajabov",
        title: "Kinolar sayti 🎬 ( 3-qism. Kinolarni qidirish funksiyasi 🔍"
      },
      {
        id: "asf4",
        img: "/images/video-img-1.jpg",
        duration: "3:16",
        views: "12k",
        postedTime: "4 month ago",
        createrBy: "Usmon",
        title: "Sayt uchun dark va light mavzularini(theme) qo'shishni o'rganamiz"
      },
      {
        id: "354s",
        img: "/images/video-img-2.jpg",
        duration: "43:11",
        views: "134k",
        postedTime: "2 days ago",
        createrBy: "Bahodir Rajabov",
        title: "Kinolar sayti 🎬 ( 3-qism. Kinolarni qidirish funksiyasi 🔍"
      },
      {
        id: "as01",
        img: "/images/video-img-1.jpg",
        duration: "3:16",
        views: "12k",
        postedTime: "4 month ago",
        createrBy: "Usmon",
        title: "Sayt uchun dark va light mavzularini(theme) qo'shishni o'rganamiz"
      },
      {
        id: "245t",
        img: "/images/video-img-2.jpg",
        duration: "43:11",
        views: "134k",
        postedTime: "2 days ago",
        createrBy: "Bahodir Rajabov",
        title: "Kinolar sayti 🎬 ( 3-qism. Kinolarni qidirish funksiyasi 🔍"
      },
    ]
  }
let watchLaterVideos = []

let elWatchLaterList = $_(".watch-later .videos")
let updateWatchLater = () => {
  elWatchLaterList.innerHTML = ""
  let elWatchLaterFragment  = document.createDocumentFragment()
  console.log(elWatchLaterList);
  let elWatchLaterTemplate  = $_(".watch-later .template").content

  watchLaterVideos.forEach((video,index)=>{
    let elCloneWatchLaterTemplate = elWatchLaterTemplate.cloneNode(true);
    $_(".watch-later-button",elCloneWatchLaterTemplate).dataset.id =video.id;
    // $_(".recomended-video__watch-later",elCloneWatchLaterTemplate).dataset.id =index;
    $_(".video__img",elCloneWatchLaterTemplate).src = video.img;
    $_(".video__duration",elCloneWatchLaterTemplate).textContent = video.duration;
    $_(".video__title",elCloneWatchLaterTemplate).textContent = video.title;
    $_(".video__views-count",elCloneWatchLaterTemplate).textContent = video.views;
    $_(".video__time",elCloneWatchLaterTemplate).textContent = video.postedTime;
    $_(".video__creater",elCloneWatchLaterTemplate).textContent = video.createrBy;
    elWatchLaterFragment.appendChild(elCloneWatchLaterTemplate)

  })
  console.log(elWatchLaterFragment);
  elWatchLaterList.appendChild(elWatchLaterFragment)
}


let addWatchLater = (array,clicked)=> {
  clicked.addEventListener("click",(e)=>{
    if (e.target.matches(".watch-later-button")) {
      array.forEach((video)=>{
        if (video.id === e.target.dataset.id) {
          console.log(e.target.dataset.id);
          watchLaterVideos.push(video)
          updateWatchLater()
        }
      })
    }
  })
}


let elRecomendedChannel= $_(".recomended-channel")
let elRecomendedChannelVideosList= $_(".recomended-channel .videos")
let elRecommendedChannelVideoFragment  = document.createDocumentFragment()
let elRecommendedChannelVideoTemplate  = $_(".recomended-channel .template").content
let elRecomendedChannelImg = $_(".recomended-channel__details-img")
let elRecomendedChannelName = $_(".recomended-channel__details-name")
elRecomendedChannelImg.src = recommendedChannel.img;
elRecomendedChannelName.textContent = recommendedChannel.name;

recommendedChannel.videos.forEach((video,index)=>{
  let elCloneChannelTemplate = elRecommendedChannelVideoTemplate.cloneNode(true);
  $_(".watch-later-button",elCloneChannelTemplate).dataset.id =video.id;
  // $_(".recomended-video__watch-later",elCloneChannelTemplate).dataset.id =index;
  $_(".video__img",elCloneChannelTemplate).src = video.img;
  $_(".video__duration",elCloneChannelTemplate).textContent = video.duration;
  $_(".video__title",elCloneChannelTemplate).textContent = video.title;
  $_(".video__views-count",elCloneChannelTemplate).textContent = video.views;
  $_(".video__time",elCloneChannelTemplate).textContent = video.postedTime;
  $_(".video__creater",elCloneChannelTemplate).textContent = video.createrBy;
  elRecommendedChannelVideoFragment.appendChild(elCloneChannelTemplate)
})

elRecomendedChannelVideosList.appendChild(elRecommendedChannelVideoFragment)

addWatchLater(recommendedChannel.videos,elRecomendedChannelVideosList)

let updateLaterVideos = (newVideo) =>{
  watchLaterVideos.push(newVideo)
}
let elRecomendedVideosList  = $_(".recomended-videos__list")
let elRecommendedVideoTemplate = $_(".recomended-video__template",document).content;
let elRecommendedVideoFragment  = document.createDocumentFragment()
recommendedVideos.forEach((video,index)=> {
  let elCloneVideoTemplate = elRecommendedVideoTemplate.cloneNode(true);
  $_(".watch-later-button",elCloneVideoTemplate).dataset.id =video.id;
  // $_(".recomended-video__watch-later",elCloneVideoTemplate).dataset.id =index;
  $_(".recomended-video__img",elCloneVideoTemplate).src = video.img;
  $_(".recomended-video__duration",elCloneVideoTemplate).textContent = video.duration;
  $_(".recomended-video__title",elCloneVideoTemplate).textContent = video.title;
  $_(".recomended-video__views-count",elCloneVideoTemplate).textContent = video.views;
  $_(".recomended-video__time",elCloneVideoTemplate).textContent = video.postedTime;
  $_(".recomended-video__creater",elCloneVideoTemplate).textContent = video.createrBy;
  elRecommendedVideoFragment.appendChild(elCloneVideoTemplate)
})
elRecomendedVideosList.appendChild(elRecommendedVideoFragment)


addWatchLater(recommendedVideos,elRecomendedVideosList)
