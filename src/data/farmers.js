// SAMPLE DATA — every farmer below is a placeholder for layout only.
// Before launch, replace with real AuraRice-certified farmers who have agreed
// to be named on the site, and keep `productIds` in step with products.js.
// Photos are stock placeholders from Unsplash (free licence) and do NOT show
// the people named here — swap in each real farmer's own photo before launch.

export const farmers = [
  {
    id: 'rajbir-malik',
    image: '/images/farmers/turban.jpg',
    imagePosition: 'center 30%',
    name: 'Rajbir Singh Malik',
    location: 'Karnal, Haryana',
    certifiedSince: 2025,
    crops: ['Basmati 1121 Sella'],
    productIds: ['basmati-1121-sella'],
    story:
      'Grows 1121 basmati on family land near Karnal and ages each harvest before it is sent for testing.',
  },
  {
    id: 'harjinder-sandhu',
    image: '/images/farmers/standing.jpg',
    imagePosition: 'center 20%',
    name: 'Harjinder Singh Sandhu',
    location: 'Tarn Taran, Punjab',
    certifiedSince: 2025,
    crops: ['Basmati 1121 Raw'],
    productIds: ['basmati-1121-raw'],
    story:
      'Mills his basmati without parboiling to keep the grain pearl-white and the aroma pronounced.',
  },
  {
    id: 'venkata-reddy',
    image: '/images/farmers/venkata-reddy.jpg',
    imagePosition: 'center 45%',
    name: 'Venkata Ramana Reddy',
    location: 'Nellore, Andhra Pradesh',
    certifiedSince: 2025,
    crops: ['Sona Masoori'],
    productIds: ['sona-masoori'],
    story:
      'Cultivates Sona Masoori in the Nellore delta and dries every lot carefully before milling.',
  },
  {
    id: 'bashir-bhat',
    image: '/images/farmers/bashir-bhat.jpg',
    imagePosition: 'center 35%',
    name: 'Bashir Ahmad Bhat',
    location: 'Pampore, Kashmir',
    certifiedSince: 2025,
    crops: ['Saffron', 'Red chilli'],
    productIds: ['kashmiri-saffron', 'kashmiri-red-chilli'],
    story:
      'Harvests saffron by hand each autumn and separates the stigmas the same day they are picked.',
  },
  {
    id: 'thomas-kurian',
    image: '/images/farmers/thomas-kurian.jpg',
    imagePosition: 'center 40%',
    name: 'Thomas Kurian',
    location: 'Vandanmedu, Idukki, Kerala',
    certifiedSince: 2025,
    crops: ['Green cardamom'],
    productIds: ['green-cardamom'],
    story:
      'Tends cardamom under shade trees in the Idukki hills and dries the pods slowly to hold their colour.',
  },
]

export const farmerByProductId = new Map(
  farmers.flatMap((farmer) => farmer.productIds.map((productId) => [productId, farmer])),
)

export const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
