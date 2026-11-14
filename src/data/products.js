// Mock catalogue data. Replace with real prices, copy and photography before launch.

export const ALL_CATEGORY = 'All'

export const CATEGORIES = [ALL_CATEGORY, 'Rice', 'Spices']

// States where RaithuBazzar-certified growers farm. Used by the hero stats and Our Story.
export const SOURCING_REGIONS = [
  'Telangana',
  'Haryana',
  'Punjab',
  'Andhra Pradesh',
  'Kerala',
  'Kashmir',
]

export const products = [
  {
    id: 'basmati-1121-sella',
    name: 'Extra Long Grain Basmati 1121 Sella',
    category: 'Rice',
    price: 899,
    weight: '5 kg',
    origin: 'Haryana',
    image: '/images/products/basmati-1121-sella.jpg',
    description:
      'Aged for over 18 months, then parboiled in the husk for a firm, golden grain that nearly doubles in length and never clumps. Built for dum biryani and festive pulao.',
    badge: 'Bestseller',
  },
  {
    id: 'basmati-1121-raw',
    name: 'Extra Long Grain Basmati 1121 Raw',
    category: 'Rice',
    price: 849,
    weight: '5 kg',
    origin: 'Punjab',
    image: '/images/products/basmati-1121-raw.jpg',
    description:
      'Patiently aged and milled without parboiling, so the grain stays pearl-white with a pronounced basmati fragrance. Cooks long and fluffy for jeera rice, pulao and everyday biryani.',
    badge: null,
  },
  {
    id: 'sona-masoori',
    name: 'Premium Sona Masoori',
    category: 'Rice',
    price: 549,
    weight: '5 kg',
    origin: 'Andhra Pradesh',
    image: '/images/products/sona-masoori.jpg',
    description:
      'A light, medium grain from the paddy fields of Andhra Pradesh, aged before milling for soft, separate rice. The everyday companion to sambar, rasam, curd rice and pongal.',
    badge: null,
  },
  {
    id: 'kashmiri-saffron',
    name: 'Kashmiri Saffron Threads',
    category: 'Spices',
    price: 1499,
    weight: '1 g',
    origin: 'Pampore, Kashmir',
    image: '/images/products/kashmiri-saffron.jpg',
    description:
      'Deep crimson stigmas picked by hand during the short autumn harvest in Pampore. Honeyed and faintly floral — steep a few threads in warm milk for biryani, kheer or kahwa.',
    badge: 'Limited',
  },
  {
    id: 'green-cardamom',
    name: 'Green Cardamom Pods',
    category: 'Spices',
    price: 699,
    weight: '100 g',
    origin: 'Idukki, Kerala',
    image: '/images/products/green-cardamom.jpg',
    description:
      'Plump pods from the hill estates of Idukki, dried slowly to keep their colour and essential oils intact. Crush just before use in chai, payasam and slow-cooked curries.',
    badge: null,
  },
  {
    id: 'kashmiri-red-chilli',
    name: 'Kashmiri Red Chilli Powder',
    category: 'Spices',
    price: 349,
    weight: '200 g',
    origin: 'Kashmir',
    image: '/images/products/kashmiri-red-chilli.jpg',
    description:
      'Ground from sun-dried Kashmiri chillies for a vivid, brick-red colour and gentle, rounded heat. Gives rogan josh and tandoori marinades their depth without overpowering them.',
    badge: null,
  },
  {
    id: 'signature-garam-masala',
    name: 'Signature Garam Masala',
    category: 'Spices',
    price: 429,
    weight: '100 g',
    origin: 'Blended in-house',
    image: '/images/products/signature-garam-masala.jpg',
    description:
      'Whole spices from certified growers, roasted in small batches and ground in-house — warm and rounded rather than sharp. Add a pinch at the end of cooking to lift curries, dals and kebabs.',
    badge: 'New',
  },
]
