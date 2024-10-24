"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PauseIcon, PlayIcon, TrackNextIcon, TrackPreviousIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

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
        <Avatar>
          <AvatarImage src={profileImage} alt="Profile" />
          <AvatarFallback>PF</AvatarFallback>
        </Avatar>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <CardTitle className="text-lg">{songs[currentSongIndex].title}</CardTitle>
        </div>
        <div className="flex justify-center space-x-2">
          <Button onClick={playPreviousSong} variant="outline" size="icon">
            <TrackPreviousIcon />
          </Button>
          <Button onClick={togglePlayPause} variant="outline" size="icon">
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </Button>
          <Button onClick={playNextSong} variant="outline" size="icon">
            <TrackNextIcon />
          </Button>
        </div>
      </CardContent>
      <audio ref={audioRef} src={songs[currentSongIndex].audioSrc} onEnded={playNextSong} />
    </Card>
  );
}
