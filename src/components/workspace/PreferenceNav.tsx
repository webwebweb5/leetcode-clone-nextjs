"use client";

import { useEffect, useState } from "react";
import { ISettings } from "./Playground";

import { Settings, Expand, Shrink } from 'lucide-react';

// type PreferenceNavProps = {
//   settings: ISettings;
//   setSettings: React.Dispatch<React.SetStateAction<ISettings>>;
// };

export default function PreferenceNav() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    function exitHandler(e: any) {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
        return;
      }
      setIsFullScreen(true);
    }

    if (document.addEventListener) {
      document.addEventListener("fullscreenchange", exitHandler);
      document.addEventListener("webkitfullscreenchange", exitHandler);
      document.addEventListener("mozfullscreenchange", exitHandler);
      document.addEventListener("MSFullscreenChange", exitHandler);
    }
  }, [isFullScreen]);

  return (
    <div className="flex items-center justify-between bg-[#0F0F0F] h-11 w-full ">
      <div className="flex items-center text-white">
        <button className="flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium">
          <div className="flex items-center px-1">
            <div className="text-xs text-label-2 dark:text-dark-label-2">
              JavaScript
            </div>
          </div>
        </button>
      </div>

      <div className="flex items-center m-2">
        <button
          className="preferenceBtn group"
        //   onClick={() =>
        //     setSettings({ ...settings, settingsModalIsOpen: true })
        //   }
        >
          <div className="text-dark-gray-6 font-bold text-lg">
            <Settings fontSize={18} />
          </div>
          <div className="preferenceBtn-tooltip">Settings</div>
        </button>

        <button className="preferenceBtn group" onClick={handleFullScreen}>
          <div className="text-dark-gray-6 font-bold text-lg">
            {!isFullScreen ? (
              <Expand />
            ) : (
              <Shrink />
            )}
          </div>
          <div className="preferenceBtn-tooltip">Full Screen</div>
        </button>
      </div>
      {/* {settings.settingsModalIsOpen && (
        <SettingsModal settings={settings} setSettings={setSettings} />
      )} */}
    </div>
  );
}
