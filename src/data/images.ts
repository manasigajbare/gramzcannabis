const GRAMZ_CDN = "https://buddy-gramz.nyc3.cdn.digitaloceanspaces.com";
const KOB_CDN = "https://d3n4jy9f1whusf.cloudfront.net";
const DUTCHIE = "https://images.dutchie.com";

export const assets = {
  heroVideo:
    "https://king-of-budz.s3.us-east-2.amazonaws.com/all-locations/home-page-content/WEBSITE+VIDEO+BANNER.mp4",
  logo: "/gramz-logo.png",
  logoIcon: "/gramz-logo.png",
  heroPoster: `${GRAMZ_CDN}/og-tag-settings/buddy-gramz.88413366-d799-48b3-bf2a-cf8fb4010857_do.webp`,
  productFallback: `${GRAMZ_CDN}/ProductCategory/buddy-gramz.2722367c-243b-420d-8ff0-e9cd2021cb4b_do.png`,
};

export const galleryImages = [
  `${GRAMZ_CDN}/image_gallery/buddy-gramz.44399e80-2643-49f9-94eb-c06f1a244d6d_do.png`,
  `${GRAMZ_CDN}/image_gallery/buddy-gramz.4fe57714-0123-4111-8c3c-76036fe50af4_do.jpg`,
  `${GRAMZ_CDN}/image_gallery/buddy-gramz.5514c7d7-8d21-43e9-9349-abfbe9083890_do.png`,
  `${GRAMZ_CDN}/image_gallery/buddy-gramz.58208d68-c4e1-4244-ae0c-fece31509aab_do.png`,
  `${GRAMZ_CDN}/image_gallery/buddy-gramz.59608681-d424-4939-a01d-c6090f4ad5b1_do.png`,
  `${GRAMZ_CDN}/image_gallery/buddy-gramz.72793e47-3467-4138-abbe-1b0d48371c24_do.png`,
  `${GRAMZ_CDN}/image_gallery/buddy-gramz.a0297c2e-472d-49f0-b6ea-7098785312c8_do.png`,
  `${GRAMZ_CDN}/image_gallery/buddy-gramz.b1a94322-210f-4f4d-9638-a72e3af54f4f_do.png`,
];

export const storeImages: Record<string, string> = {
  monroe: `${KOB_CDN}/all-locations/store-images/store_image_monroe.webp`,
  detroit: `${KOB_CDN}/all-locations/store-images/store_image_detroit.webp`,
  ferndale: `${KOB_CDN}/all-locations/store-images/store_image_ferndale.webp`,
  "new-buffalo": `${KOB_CDN}/all-locations/store-images/store_image_new-buffalo.webp`,
  roseville: `${KOB_CDN}/all-locations/store-images/store_image_roseville.webp`,
  inkster: `${KOB_CDN}/all-locations/store-images/store_image_inkster.webp`,
  taylor: `${KOB_CDN}/all-locations/store-images/store_image_taylor.webp`,
  buffalo: `${KOB_CDN}/all-locations/store-images/store_image_cheektowaga.webp`,
};

/** Product images from gramzcannabis.com / Dutchie CDN */
export const productImages = {
  flower: `${DUTCHIE}/8c8e47e5947a305d02687288ad242814`,
  flower2: `${DUTCHIE}/flower-stock-11-v1.jpg`,
  flower3: `${DUTCHIE}/d96d6db87ca124413fc417b34d5ee350`,
  preRoll: `${DUTCHIE}/c931072857201070eb5ced5bae5b76fa`,
  preRoll2: `${DUTCHIE}/4f74e5411ade9a6c73e4fe1a90fc47e5`,
  edible: `${DUTCHIE}/840507b863c79602306ed73b2e556499`,
  cartridge: `${DUTCHIE}/dc371298052a272a6b0aa930f7939a7d`,
  apparel1: `${GRAMZ_CDN}/cta_banner_crud/buddy-gramz.c23cae69-6951-486c-8e15-981e33a524db_do.jpg`,
  apparel2: `${GRAMZ_CDN}/advertisement_banner_crud/buddy-gramz.9868a6cf-9adf-40c4-a4d6-4acfcbb2ad31_do.png`,
};

export const collectionImages = [
  `${GRAMZ_CDN}/ProductCategory/buddy-gramz.2722367c-243b-420d-8ff0-e9cd2021cb4b_do.png`,
  `${GRAMZ_CDN}/ProductCategoryDealsImage/buddy-gramz.467cbb6e-2425-4ba2-841f-df3c917ced3f_do.png`,
  productImages.flower2,
  productImages.preRoll,
];

export const kobTvThumbs = [
  `${GRAMZ_CDN}/image_gallery/buddy-gramz.ec16928e-2f40-4143-ba18-d0b8009fae23_do.png`,
  `${GRAMZ_CDN}/image_gallery/buddy-gramz.e7640ff3-5027-40a2-a4c1-1714823f012c_do.png`,
  `${GRAMZ_CDN}/image_gallery/buddy-gramz.d83b74f6-c580-4564-80e0-e4779f832eea_do.png`,
  productImages.edible,
];

export const accessoryImages = [
  `${GRAMZ_CDN}/ProductCategory/buddy-gramz.2722367c-243b-420d-8ff0-e9cd2021cb4b_do.png`,
  productImages.preRoll2,
  productImages.edible,
];

export const categoryIcons: Record<string, string> = {
  Deals: `${GRAMZ_CDN}/ProductCategoryDealsImage/buddy-gramz.467cbb6e-2425-4ba2-841f-df3c917ced3f_do.png`,
  Flower: productImages.flower,
  "Pre Rolls": productImages.preRoll,
  Disposables: productImages.cartridge,
  Cartridges: productImages.cartridge,
  Edibles: productImages.edible,
  Concentrates: productImages.flower3,
  Tinctures: productImages.edible,
};

export function getStoreImage(slug: string): string {
  return storeImages[slug] ?? storeImages.monroe;
}
