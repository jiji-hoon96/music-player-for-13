"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PlayerControls } from "./PlayerControls";

interface Song {
  title: string;
  audioSrc: string;
}

interface CardProps {
  profileImage: string;
  description: string;
  songs: Song[];
}

const PlayingAnimation = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className="w-4 h-4 mr-2 mb-1 flex items-end space-x-0.5">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1 bg-primary"
        initial={{ height: "20%" }}
        animate={
          isPlaying
            ? {
                height: ["20%", "80%", "20%"],
              }
            : { height: "20%" }
        }
        transition={
          isPlaying
            ? {
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }
            : {}
        }
      />
    ))}
  </div>
);

export function MusicCard({ profileImage, description, songs }: CardProps) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center space-x-4">
        <Avatar className="w-16 h-16 border-4 border-gray-200">
          <AvatarImage src={profileImage} alt="Profile" />
          <AvatarFallback>PF</AvatarFallback>
        </Avatar>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <ul className="space-y-2">
            {songs.map((song, index) => (
              <li
                key={index}
                className={`flex items-center ${
                  index === currentSongIndex ? "font-bold text-primary" : ""
                }`}
              >
                <PlayingAnimation isPlaying={index === currentSongIndex && isPlaying} />
                <span>{song.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <PlayerControls
          isPlaying={isPlaying}
          onPlayPause={togglePlayPause}
          onPrevious={playPreviousSong}
          onNext={playNextSong}
        />
      </CardContent>
      <audio ref={audioRef} src={songs[currentSongIndex].audioSrc} onEnded={playNextSong} />
    </Card>
  );
}
