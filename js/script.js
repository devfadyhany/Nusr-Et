const popular_dishes = document.querySelector("#pouplar-dishes");
const thanks = document.querySelector("#thanks");
const news = document.querySelector("#news");
const subs = document.querySelector("#subs");

const login_container = document.querySelector("#login");

let dishes = [
  {
    title: "STEAK TARTARE",
    desc: "Prepared tableside for an immersive experience, Nusr-Et's Steak Tartare features premium, hand-cut beef with capers, chili sauce, and cognac, complemented by crispy potatoes and olive oil.",
    img_src: "./images/p1.jpg",
    img_alt: "salad image",
  },
  {
    title: "MEAT SUSHI",
    desc: "New York Strip, avocado cream, crispy potato, and Parmesan come together atop sushi rice, creating a textural masterpiece that is as visually appealing as it is delicious.",
    img_src: "./images/p2.jpg",
    img_alt: "pizza image",
  },
  {
    title: "LOKUM",
    desc: "A guest favorite and one of our signature dishes, Lokum features premium tenderloin, thinly sliced and expertly grilled. Served warm and irresistibly juicy, it melts in your mouth, creating a truly unforgettable experience.",
    img_src: "./images/p3.jpg",
    img_alt: "chicken image",
  },
  {
    title: "NUSR-ET SPECIAL",
    desc: "The Nusr-Et Special is a tender, perfectly seasoned steak, prepared tableside and served sizzling in creamy butter, delivering rich, savory flavors with every bite.",
    img_src: "./images/p4.jpg",
    img_alt: "meal image",
  },
  {
    title: "SALTBAE TOMAHAWK",
    desc: "A show-stopping wagyu bone-in ribeye Tomahawk, beautifully marbled and expertly grilled, served in an impressive portion perfect for sharing.",
    img_src: "./images/p5.jpg",
    img_alt: "friedes image",
  },
  {
    title: "GOLDEN BAKLAVA",
    desc: "Handcrafted in Gaziantep/Turkey, Nusr-Et's baklava features layers of crisp pastry and flavor-rich pistachios, flown fresh to tables worldwide and served with creamy Maraş ice cream.",
    img_src: "./images/p6.jpg",
    img_alt: "shawerma image",
  },
  {
    title: "160AED LUNCH SPECIAL",
    desc: "Elevate your lunch routine with Nusr-Et's 160AED Lunch Special. Indulge in a starter, main course, and dessert of choice, available every day from 12pm to 5pm. Perfect for a sophisticated midday escape or a memorable business lunch.",
    img_src: "./images/p7.jpg",
    img_alt: "meat image",
  },
  {
    title: "OTTOMAN STEAK",
    desc: "A show-stopping wagyu bone-in ribeye Tomahawk, beautifully marbled and expertly grilled, served in an impressive portion perfect for sharing.",
    img_src: "./images/p8.jpg",
    img_alt: "pastrie image",
  },
];

let persons = [
  {
    name: "Eng.Salem Mohamed",
    job_title: "Director Of UI/UX",
    img_src: "./images/t1.jpg",
    img_alt: "person Image",
  },
  {
    name: "Eng. Mohamed Ilady",
    job_title: "Content Creator",
    img_src: "./images/t2.jpg",
    img_alt: "person Image",
  },
  {
    name: "Eng. Amgad Fathy",
    job_title: "Web Developer",
    img_src: "./images/t3.jpg",
    img_alt: "person Image",
  },
];

let news_list = [
  {
    img_src: "./images/n1.jpg",
    img_alt: "news image",
  },
  {
    img_src: "./images/n2.jpg",
    img_alt: "news image",
  },
  {
    img_src: "./images/n3.jpg",
    img_alt: "news image",
  },
  {
    img_src: "./images/n4.jpg",
    img_alt: "news image",
  },
];

let sub_list = [
  {
    icon: "./images/s1.jpg",
  },
  {
    icon: "./images/s2.jpg",
  },
  {
    icon: "./images/s3.jpg",
  },
  {
    icon: "./images/s4.jpg",
  },
];

let createProductCard = (card) => {
  let card_container = document.createElement("div");
  card_container.className = "col-10 col-sm-6 col-lg-4";

  let card_element = document.createElement("div");
  card_element.className = "card h-100 p-2 product-card";
  card_element.style = "box-shadow: 7px 7px 10px 0px rgba(0, 0, 0, 1);";

  let card_image = document.createElement("img");
  card_image.src = card.img_src;
  card_image.alt = card.img_alt;
  card_image.style = "height: 250px";
  card_image.className = "card-img-top";

  let card_body = document.createElement("div");
  card_body.className = "card-body";

  let card_title = document.createElement("h5");
  card_title.className = "card-title";
  card_title.textContent = card.title;

  let btn_container = document.createElement("div");
  btn_container.className = "d-flex";

  let card_btn = document.createElement("a");
  card_btn.href = card.link;
  card_btn.className =
    "btn btn-primary d-inline-block ms-auto px-4 text-white text-uppercase";
  card_btn.textContent = "Show";

  let card_desc = document.createElement("p");
  card_desc.className = "card-text";
  card_desc.textContent = card.desc;

  btn_container.appendChild(card_btn);
  card_body.appendChild(card_title);
  card_body.appendChild(btn_container);
  card_body.appendChild(card_desc);

  card_element.appendChild(card_image);
  card_element.appendChild(card_body);

  card_container.appendChild(card_element);

  return card_container;
};

let createPersonCard = (card) => {
  let card_container = document.createElement("div");
  card_container.className = "col-8 col-sm-5 col-lg-3";

  let card_element = document.createElement("div");
  card_element.className = "card rounded-4 person-card";
  card_element.style = "height: 300px";

  let card_image = document.createElement("img");
  card_image.src = card.img_src;
  card_image.alt = card.img_alt;
  card_image.className = "card-img h-100 rounded-4";

  let card_overlay = document.createElement("div");
  card_overlay.className =
    "card-overlay rounded-4 position-absolute p-3 text-white";

  let card_title = document.createElement("h5");
  card_title.textContent = "All Thanks And Appreciation";

  let card_date = document.createElement("p");
  card_date.textContent = "🕔 June 22, 2023";

  let separator = document.createElement("br");

  let inner_img = document.createElement("div");
  inner_img.className = "inner-img rounded-5 border border-2 border-white mt-2";
  inner_img.style = `background-image: url('${card.img_src}')`;

  let card_name = document.createElement("p");
  card_name.className = "mt-2";
  card_name.textContent = card.name;

  let card_job_title = document.createElement("p");
  card_job_title.className = "fst-italic";
  card_job_title.textContent = card.job_title;

  card_overlay.appendChild(card_title);
  card_overlay.appendChild(card_date);
  card_overlay.appendChild(separator);
  card_overlay.appendChild(inner_img);
  card_overlay.appendChild(card_name);
  card_overlay.appendChild(card_job_title);

  card_element.appendChild(card_image);
  card_element.appendChild(card_overlay);

  card_container.appendChild(card_element);

  return card_container;
};

let createNewsCard = (card, index) => {
  let card_container = document.createElement("div");
  if ((index + 1) % 2 == 0) {
    card_container.className =
      "row my-5 card shadow-lg rounded-0 flex-row-reverse news-card";
  } else {
    card_container.className =
      "row my-5 card shadow-lg rounded-0 flex-row news-card";
  }

  let lg_image_container = document.createElement("div");
  if ((index + 1) % 2 == 0) {
    lg_image_container.className =
      "col-4 order-1 order-md-2 d-none d-lg-block overflow-hidden";
    lg_image_container.style =
      "width: 35%;clip-path: polygon(80% 100%, 0% 100%, 0% 0px, 96% 0px);";
  } else {
    lg_image_container.className =
      "col-4 order-1 order-md-2 d-none d-lg-block overflow-hidden";
    lg_image_container.style =
      "width: 35%;clip-path: polygon(4% 0, 100% 0, 100% 100%, 20% 100%);";
  }

  let lg_image = document.createElement("div");
  lg_image.className = "news-image";
  lg_image.style = `background-image: url('${card.img_src}')`;

  let sm_image_container = document.createElement("div");
  sm_image_container.className = "d-block d-lg-none rounded overflow-hidden";
  sm_image_container.style = "width: 100%; height: 330px; padding: 0";

  let sm_image = document.createElement("img");
  sm_image.className = "news-image";
  sm_image.src = card.img_src;
  sm_image.alt = card.img_alt;

  let card_body = document.createElement("div");
  card_body.className = "card-body p-3 col-12 col-lg-6";

  let card_title = document.createElement("h4");
  card_title.className = "text-primary fw-bold fst-italic";
  card_title.textContent = "Podcast Title";

  let card_date = document.createElement("span");
  card_date.className = "card-date fw-bold";
  card_date.textContent = "Mon.May 25th 2020";

  let card_desc = document.createElement("p");
  card_desc.className = "mb-5";
  card_desc.textContent =
    "In Our Kitchen, Passion Doesn’t Stop At Taste Alone; It Extends To Include Innovation And Renewal In Every Detail Of Our Dishes And Services. We Are Always Keen To Provide Everything New For Lovers Of Distinctive Taste, From Seasonal Dishes Made With The Finest Fresh Ingredients, To The Special Offers We Constantly Prepare For You To Enjoy A Unique And Unforgettable Experience. Follow Our News Section To Stay Up-To-Date On The Latest Updates, Whether It’s New Recipes, Special Events, Or Innovative Product Launches That Suit All Tastes. We Are Here To Share Our Passion For Food And Provide You With An Exceptional Experience With Every Visit And Every Dish.";

  let btns_container = document.createElement("div");
  btns_container.className = "d-flex gap-3";

  let btn1 = document.createElement("a");
  btn1.href = "#";
  btn1.className = "btn btn-primary text-white";
  btn1.textContent = "🎙 Podcast";

  let btn2 = document.createElement("a");
  btn2.href = "#";
  btn2.className = "btn btn-primary text-white";
  btn2.textContent = "🕔 43 mins";

  let btn3 = document.createElement("a");
  btn3.href = "#";
  btn3.className = "btn btn-primary text-white";
  btn3.textContent = "▶ Play Episode";

  btns_container.appendChild(btn1);
  btns_container.appendChild(btn2);
  btns_container.appendChild(btn3);

  card_body.appendChild(card_title);
  card_body.appendChild(card_date);
  card_body.appendChild(card_desc);
  card_body.appendChild(btns_container);

  sm_image_container.appendChild(sm_image);

  lg_image_container.appendChild(lg_image);

  card_container.appendChild(lg_image_container);
  card_container.appendChild(sm_image_container);
  card_container.appendChild(card_body);

  return card_container;
};

let createSubCard = (card) => {
  let card_container = document.createElement("div");
  card_container.className =
    "col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center";

  let card_element = document.createElement("div");
  card_element.className = "card text-center border-secondary py-2 sub-card";
  card_element.style =
    "width: 180px;height: 180px;box-shadow: 7px 7px 10px 0px rgba(0, 0, 0, 1);";

  let card_title = document.createElement("h5");
  card_title.className = "text-secondary fst-italic";
  card_title.textContent = "Subscribe Now";

  let card_icon = document.createElement("img");
  card_icon.style =
    "width: 100px; height: 100px; margin: 0 auto; padding: 16px";
  card_icon.src = card.icon;

  let card_link = document.createElement("a");
  card_link.href = "#";
  card_link.textContent = "Go To Link";

  card_element.appendChild(card_title);
  card_element.appendChild(card_icon);
  card_element.appendChild(card_link);

  card_container.appendChild(card_element);

  return card_container;

  // <div
  //         class="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
  //       >
  //         <div
  //           class="card text-center border-secondary py-2 shadow"
  //           style="width: 180px; height: 180px"
  //         >
  //           <h5 class="text-secondary fst-italic">Subscribe Now</h5>
  //           <img
  //             src="./images/s1.jpg"
  //             style="width: 100px; height: 100px; margin: 0 auto"
  //             alt=""
  //           />
  //           <a href="#">Go To Link</a>
  //         </div>
  //       </div>
};

dishes.forEach((dish) => {
  let card = createProductCard(dish);
  popular_dishes.appendChild(card);
});

persons.forEach((person) => {
  let card = createPersonCard(person);
  thanks.appendChild(card);
});

news_list.forEach((news_item, index) => {
  let card = createNewsCard(news_item, index);
  news.appendChild(card);
});

sub_list.forEach((sub_element) => {
  let card = createSubCard(sub_element);
  subs.appendChild(card);
});

let ShowLogin = () => {
  login_container.className =
    "login d-flex justify-content-center align-items-center";
};

let CloseLogin = () => {
  login_container.className =
    "d-flex justify-content-center align-items-center visually-hidden";
};
