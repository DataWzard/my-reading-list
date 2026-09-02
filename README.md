# My Recommended Reading List

This repository is now a GitHub Pages-ready static bookshelf. The site loads the reading list as a whimsical arcane bookcase: each book appears as a spine on its category shelf, completed books have a checkmark plaque, and selecting a book brings its cover, link, and note into the reading light.

## Run Locally

Open `index.html` directly, or serve the folder with any static server:

```powershell
python -m http.server 8000
```

## Update The List

Edit `books.js`. Categories map to shelves, and each `book(...)` entry controls title, author, completion state, and the personal note shown in the popup.

Each generated record includes `cover` and `spine` fields. Replace `spine` with a direct image URL for a published-edition spine photo whenever you have one; the site will use that image on the shelf and keep the cover for the popup.

## Publish On GitHub Pages

In GitHub, open the repository settings, choose **Pages**, then publish from the `main` branch root.
