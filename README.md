# RaithuBazzar

Static landing site for RaithuBazzar — premium rice and spices, refined at the source.
React + Vite, no backend; all product data lives in `src/data/products.js`.

```bash
npm install
npm run dev      # local dev server
npm run lint     # ESLint
npm run build    # production build into dist/
```

## Product photos

The images in `public/images/products/` are generic stock photos (cropped to 4:5, 1000×1250) from Unsplash,
used under the [Unsplash License](https://unsplash.com/license). They don't show RaithuBazzar packs.

| File | Source |
| --- | --- |
| basmati-1121-sella.jpg | https://unsplash.com/photos/-LdilhDx3sk |
| basmati-1121-raw.jpg | https://unsplash.com/photos/nsbi_toNvS8 |
| sona-masoori.jpg | https://unsplash.com/photos/Y0SeiGEl2L4 |
| kashmiri-saffron.jpg | https://unsplash.com/photos/-zt5GHbljUw |
| green-cardamom.jpg | https://unsplash.com/photos/dZIs-KaRdu8 |
| kashmiri-red-chilli.jpg | https://unsplash.com/photos/tJBRqWigzso |
| signature-garam-masala.jpg | https://unsplash.com/photos/1VTEK-sA8w8 |

## Before launch

- [ ] Swap the stock photos in `public/images/products/` for photos of your own packs, keeping the same filenames
      (4:5 ratio, roughly 1000–1200px wide, under 300 KB each). If an image is missing, cards show a styled placeholder.
- [ ] Confirm real prices and pack weights.
- [ ] Replace contact details in `src/components/Footer.jsx` (email, phone, address).
- [ ] Review and finalise product descriptions and brand copy.
- [ ] Connect a real cart, checkout and payment to "Add to cart" (see `handleAddToCart` in `src/App.jsx`).
- [ ] Replace the sample farmers in `src/data/farmers.js` with real RaithuBazzar-certified farmers who have agreed to be
      named on the site. Keep each farmer's `productIds` in step with `src/data/products.js`.
