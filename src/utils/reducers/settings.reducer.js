import settings from "../data/settings.config";
import { ACTION_TYPES } from "../documents/enums";
import SettingDocument from "../documents/settings.document";
import bannerImage from "../../assets/images/baseImages/banner.png";

const initialSettings = {
    ...new SettingDocument(),
    currentWallpaper: bannerImage,
    currentWallpaperId: 'default_wall'
};

const settingsStateReducer = (state = initialSettings, action) => {
	switch (action.type) {
		case ACTION_TYPES.TOGGLE_MUTE:
			return {
				...state,
				isMute: !state.isMute,
			};
		case ACTION_TYPES.TOGGLE_WIFI:
			return {
				...state,
				wifiEnabled: !state.wifiEnabled,
			};
		case ACTION_TYPES.TOGGLE_AIRPLANE_MODE:
			return {
				...state,
				airplaneMode: !state.airplaneMode,
			};
		case ACTION_TYPES.CHANGE_WALLPAPER:
			const newWallpaper = settings.desktop_wallpapers.find(
				(wallpaper) => wallpaper.id === action.wallpaperId
			);
			return {
				...state,
				currentWallpaper: newWallpaper ? newWallpaper.value : bannerImage,
				currentWallpaperId: newWallpaper ? newWallpaper.id : 'default_wall',
			};
		default:
			return state;
	}
};

export default settingsStateReducer;
