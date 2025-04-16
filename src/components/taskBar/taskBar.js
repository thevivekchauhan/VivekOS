import { IconButton } from "@fluentui/react";
import React from "react";
import { useSelector } from "react-redux";
import ClockComponent from "../base/clockComponent";
import TaskBarIcon from "./taskBar-Icon";
import './taskBar.css';
import windows10Logo from '../../assets/images/baseImages/VC.png';  // Add this import

function Taskbar(props) {
    const settings = useSelector((state) => state.settingsState);

    return (
        <div className="uk-width-expand taskbar-bottom">
            {/* Centered Icons */}
            <div className="taskbar-main-icons">
                <div className="uk-height-1-1 taskbar-icon" uk-toggle="target: #start-menu">
                    <img 
                        src={windows10Logo} 
                        alt="Start" 
                        title="Start"
                        className="uk-height-1-1 taskbar-icon windows-logo"
                        style={{ padding: '5px', cursor: 'pointer' }}
                    />
                </div>
                <div className="uk-height-1-1" uk-toggle="target: #start-menu">
                    <IconButton
                        iconProps={{ iconName: "Search" }}
                        title="Search"
                        ariaLabel="Search"
                        className="uk-height-1-1 taskbar-icon"
                    />
                </div>
                <div className="uk-height-1-1" uk-toggle="target: #cortana-modal">
                    <IconButton
                        iconProps={{ iconName: "DelveAnalytics" }}
                        title="Virtual Assistant"
                        ariaLabel="Virtual Assistant"
                        className="uk-height-1-1 taskbar-icon"
                        onClick={() => document.getElementById('cortana-modal').classList.add('show')}
                    />
                </div>
                <div className="uk-flex uk-height-1-1">
                    {props.onTaskbarApps.map((app, index) => (
                        <TaskBarIcon appInfo={app} key={index} />
                    ))}
                </div>
            </div>

            {/* Right side system icons */}
            <div className="uk-position-right uk-flex">
                <div>
                    {settings.wifiEnabled && (
                        <IconButton
                            iconProps={{ iconName: "WifiEthernet" }}
                            title="Connected: PIED PIPER"
                            ariaLabel="Connected: PIED PIPER"
                            className="uk-height-1-1 taskbar-quick-icon"
                        />
                    )}
                    {!settings.wifiEnabled && (
                        <IconButton
                            iconProps={{ iconName: "WifiWarning4" }}
                            title="Wifi Disabled"
                            ariaLabel="Wifi Disabled"
                            className="uk-height-1-1 taskbar-quick-icon"
                        />
                    )}
                </div>
                <div>
                    {settings.isMute && (
                        <IconButton
                            iconProps={{ iconName: "VolumeDisabled" }}
                            title="Muted"
                            ariaLabel="Muted"
                            className="uk-height-1-1 taskbar-quick-icon"
                        />
                    )}
                    {!settings.isMute && (
                        <IconButton
                            iconProps={{ iconName: "Volume3" }}
                            title="Volume"
                            ariaLabel="Volume"
                            className="uk-height-1-1 taskbar-quick-icon"
                        />
                    )}
                </div>
                <div>
                    <ClockComponent />
                </div>
                <div
                    className="uk-height-1-1 taskbar-icon"
                    uk-toggle="target: #action-center"
                >
                    <IconButton
                        iconProps={{ iconName: "ActionCenter" }}
                        title="Action Center"
                        ariaLabel="Action Center"
                        className="uk-height-1-1 taskbar-icon"
                    />
                </div>
            </div>
        </div>
    );
}

export default Taskbar;