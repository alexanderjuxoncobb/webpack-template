import pepeImage from "./pepe.jpg";

export function InitialiseDOM() {
  const content = document.querySelector("#content");

  const title = document.createElement("div");
  title.id = "title";
  const h1title = document.createElement("h1");
  h1title.textContent = "My Restaurant";
  title.appendChild(h1title);

  const container = document.createElement("div");
  container.className = "image-container";

  const img = document.createElement("img");
  img.src = pepeImage;
  img.alt = "pepe picture";

  const text = document.createElement("div");
  text.className = "overlay-text";
  text.textContent =
    "This is some text that i am going to put over the top of pepe. I would probably talk about how great he is as a frog. The best htere is. I would also talk about something else, but i have forgotten that now.";

  container.append(img, text);

  content.append(title, container);
}

// <div id="title"><h1>My Restuarant</h1></div>
//       <div class="image-container">
//         <img src="./pepe.jpg" alt="pepe picture" />
//         <div class="overlay-text">
//           This is some text that i am going to put over the top of pepe. I would
//           probably talk about how great he is as a frog. The best htere is. I
//           would also talk about something else, but i have forgotten that now.
//         </div>
