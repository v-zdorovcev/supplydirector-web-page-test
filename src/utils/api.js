const sleep = () => new Promise((resolve) => setTimeout(resolve, 1500));

export const fetchProductById = async () => {
  await sleep();

  return {
    name: 'Болт 1"х2 1/2" UNC 10.9 62мм',
    category: "components",
    status: "pending",
    description:
      "Механические свойства болтов, винтов и шпилек из углеродистых нелегированных и легированных сталей по ГОСТ Р 52627-2006 (ISO 898/1-78) при комнатной температуре характеризуют 11 классов прочности.",
    size: "25х40 см",
    docs: [
      {
        fileName: "document123125.pdf",
        url: "#",
      },
      {
        fileName: "document122223125.pdf",
        url: "#",
      },
    ],
    price: [39000, 50000],
    quantity: 10000,
    condition: "new",
    delivery: {
      date: "2022-08-10T14:51:12.000Z",
      city: "Москва",
      street: "Королёва 12",
    },
    images: [
      "https://png.pngtree.com/png-clipart/20220917/original/pngtree-industrial-bolt-and-nuts-with-silver-color-png-image_8620948.png",
      "https://png.pngtree.com/png-clipart/20220919/original/pngtree-4-models-of-3d-bolt-and-screw-with-gold-coating-png-image_8623369.png",
      "https://png.pngtree.com/png-clipart/20220917/original/pngtree-3d-type-of-gold-bolt-png-image_8621294.png",
      "https://png.pngtree.com/png-clipart/20220917/original/pngtree-gold-3d-bolt-with-dome-head-png-image_8621272.png",
      "https://png.pngtree.com/png-clipart/20220917/original/pngtree-3d-silver-bolt-with-ring-and-nut-png-image_8621291.png",
    ],
  };
};

export const fetchProductRequests = async () => {
  await sleep();

  return [
    {
      id: 1,
      rating: 4.7,
      providerName: "Стандарт Проект",
      message: "Здравствуйте, готовы поставить 1 000 штук, готовы поставить 1 000 штук",
      price: 10000,
      date: "2022-12-29T08:59:47.505Z",
      status: "new",
    },
    {
      id: 2,
      rating: 5.0,
      providerName: "Вектор",
      message: "Есть в наличии другие размеры",
      price: 22000,
      date: "2022-12-29T08:59:47.505Z",
      status: "rejected",
    },
    {
      id: 3,
      rating: 5.0,
      providerName: "Росметиз",
      message: "Механические свойства болтов, механические свойства болтов",
      price: 22000,
      date: "2022-12-29T08:59:47.505Z",
      status: "success",
    },
  ];
};
