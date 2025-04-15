import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDesktopBackground } from "../../../utils/actions/settingsaction";
import settings from "../../../utils/data/settings.config";
import checked from "../../../assets/images/baseImages/checked.svg";
import "./settings.scss";

function BackgroundSettings() {
    const current_settings = useSelector((state) => state.settingsState);
    const dispatch = useDispatch();
    
    const changeWallpaper = (wallpaperId) => {
        dispatch(changeDesktopBackground(wallpaperId));
    };

    return (
        <div className="settings-container background-dark">
            <p style={{ color: "white" }} className="uk-text-lead text-white">Change Desktop Background:</p>
            <div className="uk-child-width-1-2@m wallpaper-grid" uk-grid={"true"}>
                {settings.desktop_wallpapers.map((wallpaper, index) => (
                    <div key={wallpaper.id}>
                        <div
                            style={{
                                backgroundImage: `url(${wallpaper.value})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                border: "2px solid #fff",
                                borderRadius: "8px",
                                minHeight: "200px"
                            }}
                            className="wallpaper-thumbnail uk-card uk-card-body"
                            onClick={() => changeWallpaper(wallpaper.id)}
                        >
                            {current_settings.currentWallpaperId === wallpaper.id && (
                                <div className="uk-position-top-right uk-padding-small checkmark-container">
                                    <img src={checked} width="40" height="40" alt="Selected" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BackgroundSettings;
