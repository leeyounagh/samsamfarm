import React, { createContext, useState } from "react";

interface MusicContextProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

export const AudioPlayer = createContext<MusicContextProps>({
  isPlaying: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  togglePlay: () => {},
});

export const MusicProvider: React.FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioPlayer.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </AudioPlayer.Provider>
  );
};
