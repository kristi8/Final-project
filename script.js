"use strict";

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});


let menu = document.querySelector("#burgerBar");
let navbar = document.querySelector(".nav-ul");

menu.onclick = () => {
  menu.classList.toggle("fa-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("fa-x");
  navbar.classList.remove("open");
};

// slider

let data = [
  {
    id: 1,
    imageUrl:
      "https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/123930784_229952261880631_1187615972756445035_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=vfmJZGaoM_4AX9U_zbo&_nc_ht=scontent.ftbs10-1.fna&oh=00_AfCgQGNOlCeidFKpGo-8lk4Jef2YUuDYGk3_mXQdXa10ow&oe=63B3EDD5",
    
  },

  {
    id: 2,
    imageUrl:
      "https://bm.ge/uploads/tinymce/images/%E1%83%A8%E1%83%90%E1%83%9D%E1%83%A0%E1%83%98%20%E1%83%A8%E1%83%90%E1%83%9A%E1%83%947.jpg",
    
  },

  {
    id: 3,
    imageUrl:
      "https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/124365114_229952075213983_3846465143034605300_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=htYyr_cebHcAX9s_yyv&_nc_ht=scontent.ftbs10-1.fna&oh=00_AfDUjx434Cj1EuCPfffZ0rbdXm22JjN7ArLOwQSMDmlP6A&oe=63B40706",
    
  },
  {
    id: 4,
    imageUrl:
      "https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/123658955_229480781927779_680907197235676714_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=q6ZJwk9TGbkAX_Iov4x&_nc_ht=scontent.ftbs10-1.fna&oh=00_AfALvj_VqLa9zTrKaCyDSdXl9OlECcU5rLmxo0ttl6R8Rg&oe=63B3E65C",
   
  },
];

let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;
let dotItem = document.getElementsByClassName("dot");

// div
function createDiveTag() {
  const divTag = document.createElement("div");
  divTag.classList.add("slide");

  return divTag;
}


// image
function creteImgtag(image) {
  
  let tagImage = document.createElement("div");
  tagImage.style.backgroundImage = `url(${image.imageUrl})`;
  tagImage.classList.add("bg-image");

  return tagImage;
}
// h3
function createTitletag(image) {
  let tagTitle = document.createElement("h3");
  tagTitle.textContent = image.title;

  return tagTitle;
}

// dot 
function createDots() {
  let dotsParent = document.createElement("div");
  dotsParent.classList.add("dotParent");

  data.forEach((element) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-id", element.id - 1);
    dotsParent.appendChild(dot);
    dot.addEventListener("click", function (event) {
      let id = event.target.getAttribute("data-id");
      console.log(id);
      sliderIndex = id;
      slide();
    });
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
    sliderIndex = data.length - 1;
  } else {
    sliderIndex--;
  }
  slide();
}
function arrowRightclick() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
  } else {
    sliderIndex++;
  }
  slide();
}

arrowLeft.addEventListener("click", arroLeftclick);

arrowRight.addEventListener("click", arrowRightclick);

setInterval(() => {
  arrowRightclick();
}, 5000);

slide();

// user review
fetch("https://reqres.in/api/users?page=1&per_page=4", {
  method: "GET",
})
  .then(function (text1) {
    if (text1.status != 200) {
      throw text1.status;
    }
    return text1.json();
  })
  .then(function (text2) {
    let reviewContainer = document.getElementById("container-review");
    text2.data.forEach((item) => {
      let div = document.createElement("div");
      div.classList.add("image");

      let avatarDiv = document.createElement("div");
      let img = document.createElement("img");
      img.classList.add("review-image");
      img.src = item.avatar;
      img.alt = "avatar";
      avatarDiv.appendChild(img);

      let name = document.createElement("h2");
      name.innerText = item.first_name + " " + item.last_name;

      let comment = document.createElement("h4");
      comment.innerText = "highly recomended";

      div.appendChild(avatarDiv);
      div.appendChild(name);
      div.appendChild(comment);

      reviewContainer.appendChild(div);
    });
  });

// email validation
let emailField = document.getElementById("emailField");

emailField.addEventListener("keyup", function () {
  let emailValue = document.getElementById("emailField").value;
  let errorSpan = document.getElementById("span");

  let emailPatern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue == "") {
    errorSpan.innerHTML = "";
    return;
  }

  if (emailValue.match(emailPatern)) {
    errorSpan.innerText = "Your email is valid";
    errorSpan.style.color = "green";
  } else {
    errorSpan.innerText = "Your email is invalid";
    errorSpan.style.color = "red";
  }
});
