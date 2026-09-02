const shelvesEl = document.querySelector("#shelves");
const shelfTemplate = document.querySelector("#shelfTemplate");
const bookTemplate = document.querySelector("#bookTemplate");
const bookModal = document.querySelector("#bookModal");
const modalBackdrop = document.querySelector("#modalBackdrop");
const closeBook = document.querySelector("#closeBook");
const featuredCover = document.querySelector("#featuredCover");
const featuredCategory = document.querySelector("#featuredCategory");
const featuredTitle = document.querySelector("#featuredTitle");
const featuredAuthor = document.querySelector("#featuredAuthor");
const featuredComment = document.querySelector("#featuredComment");
const featuredLink = document.querySelector("#featuredLink");
let activeBookButton = null;

const fallbackCover = (title, author, accent) => {
  const initials = title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join("");

  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 1080">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="#171122"/>
          <stop offset=".52" stop-color="${accent}"/>
          <stop offset="1" stop-color="#071013"/>
        </linearGradient>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency=".75" numOctaves="3"/>
          <feColorMatrix type="saturate" values=".2"/>
          <feBlend mode="soft-light" in2="SourceGraphic"/>
        </filter>
      </defs>
      <rect width="720" height="1080" rx="34" fill="url(#g)"/>
      <g filter="url(#grain)">
        <path d="M92 166h536M92 914h536" stroke="#f8f0d2" stroke-width="5" opacity=".5"/>
        <circle cx="360" cy="320" r="92" fill="none" stroke="#f8f0d2" stroke-width="7" opacity=".8"/>
        <path d="M360 208v224M248 320h224M283 243l154 154M437 243 283 397" stroke="#f8f0d2" stroke-width="4" opacity=".55"/>
        <text x="360" y="575" text-anchor="middle" font-family="Georgia, serif" font-size="88" fill="#fff7d7">${initials}</text>
        <text x="360" y="690" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#fff7d7">${escapeSvg(title)}</text>
        <text x="360" y="755" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" fill="#f7eab8">${escapeSvg(author)}</text>
      </g>
    </svg>
  `)}`;
};

const escapeSvg = (text) =>
  text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const spineTitleFor = (title) => title.split(":")[0].trim();

const fitSpineLabel = (button) => {
  const label = button.querySelector(".spine-text");
  const parts = label.querySelectorAll("span");
  let scale = 1;

  button.style.setProperty("--label-scale", scale);

  while (
    scale > 0.48 &&
    Array.from(parts).some((part) => part.scrollHeight > part.clientHeight || part.scrollWidth > part.clientWidth)
  ) {
    scale -= 0.04;
    button.style.setProperty("--label-scale", scale.toFixed(2));
  }
};

const setFeaturedBook = (book, category, accent, button) => {
  document.querySelectorAll(".book-spine.is-selected").forEach((el) => el.classList.remove("is-selected"));
  activeBookButton = button;
  activeBookButton?.classList.add("is-selected");

  featuredCover.src = book.cover;
  featuredCover.alt = `${book.title} cover`;
  featuredCover.onerror = () => {
    featuredCover.src = fallbackCover(book.title, book.author, accent);
  };
  featuredCategory.textContent = category;
  featuredCategory.style.setProperty("--accent", accent);
  featuredTitle.textContent = book.title;
  featuredAuthor.textContent = book.author;
  featuredComment.textContent = book.comment;
  featuredLink.href = book.link;
  openModal();
};

const openModal = () => {
  bookModal.hidden = false;
  document.body.classList.add("modal-open");
  closeBook.focus();
};

const closeModal = () => {
  bookModal.hidden = true;
  document.body.classList.remove("modal-open");
  activeBookButton?.focus();
};

const createBook = (book, category, accent, index) => {
  const fragment = bookTemplate.content.cloneNode(true);
  const button = fragment.querySelector(".book-spine");
  const title = fragment.querySelector(".spine-title");
  const author = fragment.querySelector(".spine-author");
  const completionMark = fragment.querySelector(".completion-mark");
  const height = 172 + ((book.title.length + index * 17) % 44);
  const width = 42 + ((book.author.length + index * 11) % 26);

  button.style.setProperty("--accent", accent);
  button.style.setProperty("--spine", `url("${book.spine || book.cover}")`);
  button.style.setProperty("--height", `${height}px`);
  button.style.setProperty("--width", `${width}px`);
  button.dataset.completed = String(book.completed);
  button.setAttribute("aria-label", `${book.title} by ${book.author}${book.completed ? ", completed" : ""}`);
  title.textContent = book.spineTitle || spineTitleFor(book.title);
  author.textContent = book.author;
  completionMark.hidden = !book.completed;

  button.addEventListener("click", () => setFeaturedBook(book, category, accent, button));
  return button;
};

library.forEach((shelf) => {
  const fragment = shelfTemplate.content.cloneNode(true);
  const section = fragment.querySelector(".shelf-section");
  const heading = fragment.querySelector(".shelf-label h2");
  const count = fragment.querySelector(".shelf-label span");
  const row = fragment.querySelector(".shelf-row");

  section.style.setProperty("--accent", shelf.accent);
  heading.textContent = shelf.category;
  count.textContent = `${shelf.books.length} ${shelf.books.length === 1 ? "volume" : "volumes"}`;

  shelf.books.forEach((book, index) => row.append(createBook(book, shelf.category, shelf.accent, index)));
  shelvesEl.append(fragment);
});

const firstShelf = library[0];
const firstButton = document.querySelector(".book-spine");
activeBookButton = firstButton;
firstButton?.classList.add("is-selected");

requestAnimationFrame(() => {
  document.querySelectorAll(".book-spine").forEach(fitSpineLabel);
});

window.addEventListener("resize", () => {
  document.querySelectorAll(".book-spine").forEach(fitSpineLabel);
});

closeBook.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !bookModal.hidden) {
    closeModal();
  }
});
