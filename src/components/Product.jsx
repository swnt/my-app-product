function Product() {
  const ListProduct = [
    {
      idProduct: 1,
      nameProduct: "Fujifilm, Camera Body Only, Photography",
      imageProduct:
        "https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
      imageAlt: "product image",
      priceProduct: "Rp10.000.000",
    },
    {
      idProduct: 2,
      nameProduct: "Fujifilm, Camera Body Only, Photography",
      imageProduct:
        "https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
      imageAlt: "product image",
      priceProduct: "Rp10.000.000",
    },
    {
      idProduct: 3,
      nameProduct: "Fujifilm, Camera Body Only, Photography",
      imageProduct:
        "https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
      imageAlt: "product image",
      priceProduct: "Rp10.000.000",
    },
    {
      idProduct: 4,
      nameProduct: "Fujifilm, Camera Body Only, Photography",
      imageProduct:
        "https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
      imageAlt: "product image",
      priceProduct: "Rp10.000.000",
    },
    {
      idProduct: 5,
      nameProduct: "Fujifilm, Camera Body Only, Photography",
      imageProduct:
        "https://www.bhphotovideo.com/images/images2500x2500/fujifilm_16756924_x_h2s_mirrorless_camera_1708265.jpg",
      imageAlt: "product image",
      priceProduct: "Rp10.000.000",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
      {ListProduct.map((item) => (
        <div
          key={item.idProduct}
          className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow"
        >
          <img
            className="p-8 rounded-t-lg"
            src={item.imageProduct}
            alt={item.imageAlt}
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-sky-900">
              {item.nameProduct}
            </h5>
            <span className="text-3xl font-bold text-sky-900">
              {item.priceProduct}
            </span>
            <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
