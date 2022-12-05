"use strict"

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);

});


// let navigation = document.getElementById('navbar');
// let burgerbar = document.getElementById('burgerBar');

// burgerbar.addEventListener('click', function(){
//    navigation.classList.toggle('activenav')
// });


let menu = document.querySelector('#burgerBar');
let navbar = document.querySelector('.nav-ul');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('open')
}

// slider

let data = [
    {
      id: 1,
      imageUrl:
        "https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/123930784_229952261880631_1187615972756445035_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=vfmJZGaoM_4AX9U_zbo&_nc_ht=scontent.ftbs10-1.fna&oh=00_AfCgQGNOlCeidFKpGo-8lk4Jef2YUuDYGk3_mXQdXa10ow&oe=63B3EDD5",
    //   title: "Shaori Shale",
    },
  
    {
      id: 2,
      imageUrl:
        "https://bm.ge/uploads/tinymce/images/%E1%83%A8%E1%83%90%E1%83%9D%E1%83%A0%E1%83%98%20%E1%83%A8%E1%83%90%E1%83%9A%E1%83%947.jpg",
    //   title: "Shaori Shale",
    },
  
    {
      id: 3,
      imageUrl:
        "https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/124365114_229952075213983_3846465143034605300_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=htYyr_cebHcAX9s_yyv&_nc_ht=scontent.ftbs10-1.fna&oh=00_AfDUjx434Cj1EuCPfffZ0rbdXm22JjN7ArLOwQSMDmlP6A&oe=63B40706",
    //   title: "Shaori Shale",
    },
    {
      id: 4,
      imageUrl:
        "https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/123658955_229480781927779_680907197235676714_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=q6ZJwk9TGbkAX_Iov4x&_nc_ht=scontent.ftbs10-1.fna&oh=00_AfALvj_VqLa9zTrKaCyDSdXl9OlECcU5rLmxo0ttl6R8Rg&oe=63B3E65C",
    //   title: "Shaori Shale",
    },
  ];
  
  let arrowLeft = document.getElementById("arrow-left");
  let arrowRight = document.getElementById("arrow-right");
  let sliderContent = document.getElementById("slider-content");
  let sliderIndex = 0;
  let dotItem = document.getElementsByClassName('dot');
  
  // დივ ტეგი
  function createDiveTag() {
    const divTag = document.createElement("div");
    divTag.classList.add("slide");
  
    return divTag;
  }
  
  // სურათი
  // image-item რაც გვინდა იმას დავარქმევთ
  
  function creteImgtag(image) {
    // let tagImage = document.createElement('img');
    // tagImage.setAttribute('src', image.imageUrl);
    // tagImage.setAttribute('alt', image.title);
  
    // bg.image
    let tagImage = document.createElement("div");
    tagImage.style.backgroundImage = `url(${image.imageUrl})`;
    tagImage.classList.add("bg-image");
  
    return tagImage;
  }
  // სათაური
  function createTitletag(image) {
    let tagTitle = document.createElement("h3");
    tagTitle.textContent = image.title;
  
    return tagTitle;
  }
  
  // dot შექმნა
  function createDots() {
    let dotsParent = document.createElement("div");
    dotsParent.classList.add("dotParent");
  
    data.forEach((element) => {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      dot.setAttribute('data-id',element.id-1);
      dotsParent.appendChild(dot);
      dot.addEventListener('click', function(event){
        let id = event.target.getAttribute('data-id');
        console.log(id);
        sliderIndex = id;
        slide();
      })
    });
  
    return dotsParent;
  }
  function slide() {
    sliderContent.innerHTML = " ";
    let slideItem = createDiveTag(data[sliderIndex]);
    let imgTag = creteImgtag(data[sliderIndex]);
    let titleTag = createTitletag(data[sliderIndex]);
    let dotsElement = createDots();
  
    slideItem.appendChild(imgTag);
    slideItem.appendChild(titleTag);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dotsElement);
  
    dotItem[sliderIndex].classList.add("activeDot");
  }
  function arroLeftclick() {
    if (sliderIndex == 0) {
      // sliderIndex = data.length - 1;
      // slide()
      return;
    }
    sliderIndex--;
    slide();
  }
  function arrowRightclick() {
    if (sliderIndex == data.length - 1) {
      // sliderIndex = 0;
      // slide()
      return;
    }
    sliderIndex++;
    slide();
  }
  
  arrowLeft.addEventListener("click", arroLeftclick);
  
  arrowRight.addEventListener("click", arrowRightclick);
  
  setInterval(() => {
    arrowRightclick();
  }, 5000);
  
  slide();
