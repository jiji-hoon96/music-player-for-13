import { TrackNextIcon, TrackPreviousIcon } from "@radix-ui/react-icons";
import { PauseIcon, PlayIcon } from "lucide-react";
import { Button } from "../ui/button";

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function PlayerControls({
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
}: PlayerControlsProps) {
  return (
    <div className="flex justify-center space-x-2">
      <Button onClick={onPrevious} variant="outline" size="icon">
        <TrackPreviousIcon />
      </Button>
      <Button onClick={onPlayPause} variant="outline" size="icon">
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Button>
      <Button onClick={onNext} variant="outline" size="icon">
        <TrackNextIcon />
      </Button>
    </div>
  );
}
