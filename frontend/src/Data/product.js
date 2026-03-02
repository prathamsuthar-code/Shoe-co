const sneakersData = [
  {
    id: 1,
    img: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/f73d8888-7d7c-44e7-aa3d-c51414a9b8a2/NIKE+AIR+ZOOM+PEGASUS+40+%28GS%29.png",
    brandName: "Nike",
    productName: "Air Zoom Pegasus 40",
    sellingPrice: 129,
    mrp: 159,
    newArrival: true
  },
  {
    id: 2,
    img: "https://images.vegnonveg.com/resized/1020X1200/8965/ultraboost-23-ftwr-whitecore-blacksolar-red-63f60a2115546.jpg?format=webp",
    brandName: "Adidas",
    productName: "Ultraboost 23",
    sellingPrice: 149,
    mrp: 189,
    newArrival: true
  },
  {
    id: 3,
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/369579/25/sv01/fnd/SEA/fmt/png/RS-X-Reinvention-Trainers",
    brandName: "Puma",
    productName: "RS-X Reinvention",
    sellingPrice: 99,
    mrp: 129,
    newArrival: true
  },
  {
    id: 4,
    img: "https://www.runningxpert.com/media/catalog/product/cache/e1bfa30f5f000aa573b2ee969a7a0fde/n/e/new_balance_1080_v12_purple_4_.jpg",
    brandName: "New Balance",
    productName: "Fresh Foam 1080 v12",
    sellingPrice: 139,
    mrp: 179,
    newArrival: true
  },
  {
    id: 5,
    img: "https://imagescdn.reebok.in/img/app/product/9/933251-13377605.jpg?auto=format&w=390",
    brandName: "Reebok",
    productName: "Nano X3",
    sellingPrice: 109,
    mrp: 149,
    newArrival: true
  },
  {
    id: 6,
    img: "https://images.vegnonveg.com/resized/1020X1200/8072/chuck-taylor-all-star-cx-explore-hi-blackblackwhite-63e1ece8ac827.jpg?format=webp",
    brandName: "Converse",
    productName: "Chuck Taylor All Star CX",
    sellingPrice: 79,
    mrp: 99,
    newArrival: true
  },
  {
    id: 7,
    img: "https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,e_unsharp_mask:100,w_458/dpr_2.0/v1747942437/VN000D3HY28-ALT1/Old-Skool-Shoe-VANS-Black-White-ALT1.png",
    brandName: "Vans",
    productName: "Old Skool Classic",
    sellingPrice: 69,
    mrp: 89,
    newArrival: false
  },
  {
    id: 8,
    img: "https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/27155376/2024/1/27/0b2302df-6e0c-417e-b4b8-fd098c888d2a1706362828621ASICSGEL-Kayano29MenPatternedLace-UpRunningSportsShoes2.jpg",
    brandName: "Asics",
    productName: "Gel-Kayano 29",
    sellingPrice: 159,
    mrp: 199,
    newArrival: false
  },
  {
    id: 9,
    img: "https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/27080420/2024/1/25/7b99cdac-060b-429d-b942-86c54ebb0ab61706126554814UNDERARMOURUAHOVRPhantom3SEStormTexturedRunningSportsShoes1.jpg",
    brandName: "Under Armour",
    productName: "HOVR Phantom 3",
    sellingPrice: 119,
    mrp: 159,
    newArrival: false
  },
  {
    id: 10,
    img: "https://www.superkicks.in/cdn/shop/files/2_c174f290-4596-48ba-99e7-097e8f308f66.jpg?v=1712231884&width=1946",
    brandName: "Jordan",
    productName: "Air Jordan 1 Mid",
    sellingPrice: 139,
    mrp: 179,
    newArrival: false
  },
  {
    id: 11,
    img: "https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/19018266/2022/7/8/a705095c-542c-4f6d-b47e-e3baf073bfb21657272466021SkechersWomenBlueSportsShoes1.jpg",
    brandName: "Skechers",
    productName: "Go Run Razor 4",
    sellingPrice: 89,
    mrp: 119,
    newArrival: false
  },
  {
    id: 12,
    img: "https://images-cdn.ubuy.co.in/65f613a41c112b49ea70ad3d-fila-men-s-disruptor-ii-premium-white.jpg",
    brandName: "Fila",
    productName: "Disruptor II Premium",
    sellingPrice: 75,
    mrp: 105,
    newArrival: false
  },
  {
    id: 13,
    img: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/28210760/2024/3/13/4ea0d546-c3a5-48b1-890c-ce738af20b471710309101575NikeAirMax270MensShoes1.jpg",
    brandName: "Nike",
    productName: "Air Max 270",
    sellingPrice: 149,
    mrp: 199,
    newArrival: false
  },
  {
    id: 14,
    img: "https://static.ftshp.digital/img/p/1/0/6/3/0/4/2/1063042-full_product.jpg",
    brandName: "Adidas",
    productName: "NMD_R1 Primeblue",
    sellingPrice: 129,
    mrp: 169,
    newArrival: false
  },
  {
    id: 15,
    img: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/b/1/b1ea9b939347325_1.jpg",
    brandName: "Puma",
    productName: "Future Rider Play On",
    sellingPrice: 85,
    mrp: 115,
    newArrival: false
  },
  {
    id: 16,
    img: "https://images.vegnonveg.com/resized/1020X1200/10811/574-blackwhite-black-65f03ff57e75a.jpg?format=webp",
    brandName: "New Balance",
    productName: "574 Core Classic",
    sellingPrice: 79,
    mrp: 109,
    newArrival: false
  },
  {
    id: 17,
    img: "https://imagescdn.reebok.in/img/app/product/3/39625252-12877188.jpg",
    brandName: "Reebok",
    productName: "Club C 85 Vintage",
    sellingPrice: 89,
    mrp: 119,
    newArrival: false
  },
  {
    id: 18,
    img: "https://www.converse.in/media/catalog/product/1/6/166800c_a_107x1-web.jpg",
    brandName: "Converse",
    productName: "Run Star Hike",
    sellingPrice: 99,
    mrp: 129,
    newArrival: false
  },
  {
    id: 19,
    img: "https://cdn-images.farfetch-contents.com/19/59/23/19/19592319_43838030_1000.jpg",
    brandName: "Vans",
    productName: "Sk8-Hi Platform",
    sellingPrice: 79,
    mrp: 109,
    newArrival: false
  },
  {
    id: 20,
    img: "https://assets.ajio.com/medias/sys_master/root/20230824/JTys/64e6f53fafa4cf41f5746a5d/-473Wx593H-466389945-white-MODEL.jpg",
    brandName: "Asics",
    productName: "Gel-Nimbus 25",
    sellingPrice: 169,
    mrp: 219,
    newArrival: false
  }
];

export default sneakersData;