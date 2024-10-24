"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { PlayerControls } from "./PlayerControls";
import { PlayingBar } from "./PlayingBar";

interface Song {
  title: string;
  audioSrc: string;
}

interface CardProps {
  profileImage: string;
  description: string;
  songs: Song[];
}

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
        <Avatar className="w-16 h-16 border-2 border-gray-200 overflow-hidden">
          <AvatarImage src={profileImage} alt="Profile" className="w-full h-full object-cover" />
          <AvatarFallback className="animate-pulse">
            <div className="w-full h-full bg-gray-300 rounded-full" />
          </AvatarFallback>
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
                <PlayingBar isPlaying={index === currentSongIndex && isPlaying} />
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
