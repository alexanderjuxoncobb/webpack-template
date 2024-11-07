import pepeImage from "./pepe.jpg";

export function MenuDOM() {
  const content = document.querySelector("#content");

  const title = document.createElement("div");
  title.id = "title";
  const h1title = document.createElement("h1");
  h1title.textContent = "THE MENUUUUUUUU";
  title.appendChild(h1title);

  const container = document.createElement("div");
  container.className = "image-container";

  const img = document.createElement("img");
  img.src = pepeImage;
  img.alt = "pepe picture";

  const text = document.createElement("div");
  text.className = "overlay-text";
  text.textContent =
    "DIFFERENT TEXT SINCVE NOW I AM IN THE MENU AND I WOULD PUT THE MENU BUT NOT ALL OF IT SINCE I DONJ'T HAVE THE NEED AS THIS IS PRACTICE.";

  container.append(img, text);

  content.append(title, container);
}
