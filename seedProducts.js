const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "Photo Frame 4x4",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/4_4/IMG_7052.jpg"],
    originalPrice: 200,
    price: 150,
    rating: 4.8,
    stock: 50,
    size: "4x4",
  },
  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame7.jpeg"],
    originalPrice: 200,
    price: 150,
    rating: 4.8,
    stock: 50,
    size: "4x4",
  },

  {
    name: "Photo Frame 4x6",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/4_6/IMG_7052.PNG"],
    originalPrice: 250,
    price: 199,
    rating: 4.7,
    stock: 50,
    size: "4x6",
  },

  {
    name: "Photo Frame 4x6 Premium",
    description: "Luxury Photo Frame",
    category: "Frames",
    images: ["/assets/frames/4_6/IMG_7067.PNG"],
    originalPrice: 250,
    price: 199,
    rating: 4.9,
    stock: 40,
    size: "4x6",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame13.jpeg"],
    originalPrice: 350,
    price: 399,
    rating: 4.8,
    stock: 50,
    size: "4x12",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame9.jpeg"],
    originalPrice: 399,
    price: 300,
    rating: 4.8,
    stock: 50,
    size: "6x6",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame10.jpeg"],
    originalPrice: 400,
    price: 350,
    rating: 4.8,
    stock: 50,
    size: "6x8",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame11.jpeg"],
    originalPrice: 450,
    price: 399,
    rating: 4.8,
    stock: 50,
    size: "8x8",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame12.jpeg"],
    originalPrice: 650,
    price: 600,
    rating: 4.8,
    stock: 50,
    size: "10x10",
  },

  {
    name: "Photo Frame 12x8",
    description: "Large Customized Frame",
    category: "Frames",
    images: ["/assets/frames/12_8/IMG_7046.PNG"],
    originalPrice: 599,
    price: 499,
    rating: 4.9,
    stock: 25,
    size: "12x8",
  },

  {
    name: "Photo Frame 12x8 Premium",
    description: "Premium Wooden Frame",
    category: "Frames",
    images: ["/assets/frames/12_8/IMG_7107 (1).PNG"],
    originalPrice: 599,
    price: 499,
    rating: 5,
    stock: 20,
    size: "12x8",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame14.jpeg"],
    originalPrice: 700,
    price: 650,
    rating: 4.8,
    stock: 50,
    size: "12x10",
  },

  {
    name: "Photo Frame 12x18",
    description: "Wall Mounted Frame",
    category: "Frames",
    images: ["/assets/frames/12_18/IMG_7047.PNG"],
    originalPrice: 799,
    price: 750,
    rating: 5,
    stock: 20,
    size: "12x18",
  },

  {
    name: "Photo Frame 12x18 Deluxe",
    description: "Premium Wall Frame",
    category: "Frames",
    images: ["/assets/frames/12_18/IMG_7061.PNG"],
    originalPrice: 799,
    price: 750,
    rating: 5,
    stock: 15,
    size: "12x18",
  },

  {
    name: "Photo Frame 18x24",
    description: "Luxury Wall Frame",
    category: "Frames",
    images: ["/assets/frames/18_24/IMG_6581.pNG"],
    originalPrice: 1799,
    price: 1699,
    rating: 5,
    stock: 10,
    size: "18x24",
  },
  {
    name: "Mini Wall Projector",
    description: "Premium Gift Box",
    category: "gifts",
    images: [
      "/assets/gift-items/mini-wall-projector.jpeg",
      "/assets/gift-items/mini-wall-projector1.jpeg"
    ],
    originalPrice: 80,
    price: 60,
    rating: 5,
    stock: 10,
  },
  {
    name: "Mini photo album",
    description: "Premium Gift Box",
    category: "gifts",
    images: [
      "/assets/gift-items/photo-album-store-upto-15-photos.jpeg",
      "/assets/gift-items/photo-album-store-upto-15-photos1.jpeg"
    ],
    originalPrice: 99,
    price: 80,
    rating: 5,
    stock: 10,
  },
  {
    name: "Musical Kitty",
    description: "Premium Gift Box",
    category: "gifts",
    images: [
      "/assets/gift-items/musical-kitty.jpeg",
    ],
    originalPrice: 550,
    price: 499,
    rating: 5,
    stock: 10,
  },
  {
    name: "Ready-Made combo Frame 6x8",
    description: "Premium Gift Box",
    category: "gifts",
    images: [
      "/assets/gift-items/ready-made-frame 6_8.jpeg",
    ],
    originalPrice: 550,
    price: 499,
    rating: 5,
    stock: 10,
  },
  {
    name: "emoji-panda",
    description: "Premium Gift Box",
    category: "gifts",
    images: [
      "/assets/gift-items/emoji-panda-thumbnail.jpg"
    ],
    video: "/assets/gift-items/emoji-panda.mp4",
    originalPrice: 99,
    price: 80,
    rating: 5,
    stock: 10,
  },


  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame1.jpeg"],
    originalPrice: 550,
    price: 499,
    rating: 4.8,
    stock: 50,
    size: "12x8",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame2.jpeg"],
    originalPrice: 550,
    price: 499,
    rating: 4.8,
    stock: 50,
    size: "12x8",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame3.jpeg"],
    originalPrice: 300,
    price: 250,
    rating: 4.8,
    stock: 50,
    size: "6x4",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame4.jpeg"],
    originalPrice: 550,
    price: 499,
    rating: 4.8,
    stock: 50,
    size: "12x8",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame5.jpeg"],
    originalPrice: 550,
    price: 499,
    rating: 4.8,
    stock: 50,
    size: "12x8",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame6.jpeg"],
    originalPrice: 200,
    price: 159,
    rating: 4.8,
    stock: 50,
    size: "5x8",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame15.jpeg"],
    originalPrice: 550,
    price: 499,
    rating: 4.8,
    stock: 50,
    size: "12x8",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame16.jpeg"],
    originalPrice: 799,
    price: 750,
    rating: 4.8,
    stock: 50,
    size: "12x18",
  },

  {
    name: "Photo Frame",
    description: "Premium Customized Photo Frame",
    category: "Frames",
    images: ["/assets/frames/Frame8.jpeg"],
    originalPrice: 200,
    price: 150,
    rating: 4.8,
    stock: 50,
    size: "4x4",
  },










  // Graphic Design Products

  {
    name: "Business Card Design",
    description: "Premium Business Card",
    category: "graphic-design",
    images: ["/assets/invitation and banners/businesscard1.jpg"],
    originalPrice: 399,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Business Card Design",
    description: "Premium Business Card",
    category: "graphic-design",
    images: ["/assets/invitation and banners/businesscard2.jpg"],
    originalPrice: 399,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Baby Shower Invitation Design",
    description: "Premium Baby Shower Invitation",
    category: "graphic-design",
    images: ["/assets/invitation and banners/IMG_7035.PNG"],
    originalPrice: 399,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Haldi Invitation Design",
    description: "Premium Haldi Invitation",
    category: "graphic-design",
    images: ["/assets/invitation and banners/image1.jpg"],
    originalPrice: 399,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Wedding Invitation Design",
    description: "Premium Wedding Invitation",
    category: "graphic-design",
    images: ["/assets/invitation and banners/image2.jpg"],
    originalPrice: 399,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Engagement Invitation Design",
    description: "Premium Engagement Invitation",
    category: "graphic-design",
    images: ["/assets/invitation and banners/image3.jpg"],
    originalPrice: 399,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Mehndi Invitation Design",
    description: "Premium Mehndi Invitation",
    category: "graphic-design",
    images: ["/assets/invitation and banners/image4.jpg"],
    originalPrice: 399,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "House warming invitation Video Editing",
    description: "Instagram Reels Editing",
    category: "graphic-design",
    images: ["/assets/invitation and banners/video1.mp4"],
    originalPrice: 999,
    price: 499,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Wedding invitation Video Editing",
    description: "Instagram Reels Editing",
    category: "graphic-design",
    images: ["/assets/invitation and banners/video2.mp4"],
    originalPrice: 999,
    price: 499,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Wedding invitation Video Editing",
    description: "Instagram Reels Editing",
    category: "graphic-design",
    images: ["/assets/invitation and banners/video3.mp4"],
    originalPrice: 999,
    price: 499,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Event Banner Design",
    description: "Custom Banner Design for Shops, Events, Birthdays & Businesses",
    category: "graphic-design",
    images: ["/assets/invitation and banners/IMG_7071.JPG.jpeg"],
    originalPrice: 599,
    price: 400,
    rating: 4.7,
    stock: 100,
    size: "Multiple Sizes",
    bannerSizes: [
      {
        size: "10 x 10 ft",
        price: 400,
      },
      {
        size: "10 x 24 ft",
        price: 599,
      },
    ],
  },











  // video Editing Products

  {
    name: "Video Editing",
    description: "Instagram Reels Editing",
    category: "video-editing",
    images: ["/assets/video-editing/dhana.mp4"],
    originalPrice: 999,
    price: 499,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Video Editing",
    description: "Instagram Reels Editing",
    category: "video-editing",
    images: ["/assets/video-editing/video1.mp4"],
    originalPrice: 999,
    price: 499,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Video Editing",
    description: "Instagram Reels Editing",
    category: "video-editing",
    images: ["/assets/video-editing/video2.mp4"],
    originalPrice: 999,
    price: 499,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Video Editing",
    description: "Instagram Reels Editing",
    category: "video-editing",
    images: ["/assets/video-editing/video3.mp4"],
    originalPrice: 999,
    price: 499,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Video Editing",
    description: "Instagram Reels Editing",
    category: "video-editing",
    images: ["/assets/video-editing/video4.mp4"],
    originalPrice: 999,
    price: 499,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },
  {
    name: "Video Editing",
    description: "Instagram Reels Editing",
    category: "video-editing",
    images: ["/assets/video-editing/video5.mp4"],
    originalPrice: 999,
    price: 499,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },











  // photo Editing Products

  {
    name: "Photo album Design",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/photo-album.png",
    ],
    originalPrice: 999,
    price: 90,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },
  {
    name: "Photo album Design",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/photo-album1.png",
    ],
    originalPrice: 999,
    price: "99",
    priceLabel: "per page",
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Logo editing",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/logo4.jpeg",
      "/assets/photo-editing/logo3.jpeg"
    ],
    originalPrice: 999,
    price: 499,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Logo editing",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/logo5.jpeg",
    ],
    originalPrice: 999,
    price: 499,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Photo editing",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/photoediting1.jpg",
    ],
    originalPrice: 325,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Photo editing",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/photoediting2.jpg",
    ],
    originalPrice: 325,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Photo editing",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/photoediting3.jpg",
    ],
    originalPrice: 325,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Photo editing",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/photoediting4.jpg",
    ],
    originalPrice: 325,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },


  {
    name: "Photo editing",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/photoediting5.jpg",
    ],
    originalPrice: 325,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Photo editing",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/photoediting6.jpg",
    ],
    originalPrice: 325,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Photo editing",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/photoediting7.jpg",
    ],
    originalPrice: 325,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

  {
    name: "Photo editing",
    description: "Instagram Reels Editing",
    category: "photo-editing",
    images: [
      "/assets/photo-editing/photoediting8.jpg",
    ],
    originalPrice: 325,
    price: 299,
    rating: 4.8,
    stock: 100,
    size: "Digital",
  },

];











const seedData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products Seeded Successfully");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

seedData();