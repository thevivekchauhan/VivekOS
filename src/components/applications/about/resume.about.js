import { PrimaryButton } from "@fluentui/react";
import React, { useState } from "react";
import projectConfig from "../../../utils/data/project.config";
import user from "../../../utils/data/user.config";
import { ANALYTICS_EVENTS } from "../../../utils/documents/enums";
import firebase from "../../../utils/firebaseConfig";

function Resume() {
    const [isDownloading, setIsDownloading] = useState(false);
    const downloadIcon = { iconName: "DownloadDocument" };

    const downloadFile = async (url) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = "resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error("Download failed:", error);
            // Fallback: direct link
            window.open(url, "_blank");
        }
    };

    const onDownloadClick = async (resume) => {
        setIsDownloading(true);
        try {
            if (projectConfig.enableAnalytics) {
                firebase.analytics().logEvent(ANALYTICS_EVENTS.DOWNLOAD_RESUME);
            }
            await downloadFile(resume);
        } catch (error) {
            console.error("Analytics or download error:", error);
            // Fallback: direct link
            window.open(resume, "_blank");
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="height-100">
            <div className="uk-text-center height-100">
                <div>
                    <PrimaryButton
                        iconProps={downloadIcon}
                        onClick={() => onDownloadClick(user.resume)}
                        disabled={isDownloading}
                    >
                        {isDownloading ? "Downloading..." : "Download Resume"}
                    </PrimaryButton>
                </div>
                <object
                    data={user.resume}
                    type="application/pdf"
                    className="height-100 uk-width-1-1 uk-margin-small-top"
                >
                    <p className="font-color-white">
                        Sorry Couldn't load the file.
                    </p>
                </object>
            </div>
        </div>
    );
}

export default Resume;
