import default_wallpaper from "../../assets/images/wallpapers/default_wallpaper.jpg";
import wallpaper1 from "../../assets/images/wallpapers/wallpaper1.jpg";
import wallpaper2 from "../../assets/images/wallpapers/wallpaper2.jpg";
import wallpaper3 from "../../assets/images/wallpapers/wallpaper3.jpg";
import wallpaper4 from "../../assets/images/wallpapers/wallpaper4.jpg";
import wallpaper5 from "../../assets/images/wallpapers/wallpaper5.jpg";
import wallpaper6 from "../../assets/images/wallpapers/wallpaper6.jpg";
import wallpaper7 from "../../assets/images/wallpapers/wallpaper7.png";
import wallpaper8 from "../../assets/images/wallpapers/wallpaper8.jpg";
import wallpaper9 from "../../assets/images/wallpapers/wallpaper9.jpg";
import bannerImage from "../../assets/images/baseImages/banner.png";

const settings = {
	desktop_wallpapers: [
		{
			id: "default_wall",
			value: bannerImage,  // Use imported image
		},
		{
			id: "wall_1",
			value: wallpaper1,
		},
		{
			id: "wall_2",
			value: wallpaper2,
		},
		{
			id: "wall_3",
			value: wallpaper3,
		},
		{
			id: "wall_4",
			value: wallpaper4,
		},
		{
			id: "wall_5",
			value: wallpaper5,
		},
		{
			id: "wall_6",
			value: wallpaper6,
		},
		{
			id: "wall_7",
			value: wallpaper7,
		},
		{
			id: "wall_8",
			value: wallpaper8,
		},
		{
			id: "wall_9",
			value: wallpaper9,
		},
	],
	default_wallpaper: bannerImage,  // Use imported image
};

export default settings;
