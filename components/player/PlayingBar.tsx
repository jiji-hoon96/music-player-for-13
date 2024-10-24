import { motion } from "framer-motion";

export function PlayingBar({ isPlaying }: { isPlaying: boolean }) {
  return (
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
}
