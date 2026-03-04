import { useCallback, useEffect, useState } from "react";
import type { Project } from "../../data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { gallery, title, portrait } = project;

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(((index % gallery.length) + gallery.length) % gallery.length);
    },
    [gallery.length]
  );

  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);
  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative mx-4 md:mx-8 ${portrait ? "w-fit max-w-2xl" : "w-full max-w-6xl"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-3xl leading-none hover:opacity-70 transition-opacity z-10"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="absolute -top-12 left-0 text-white font-body text-body uppercase">
          {title}
        </h2>

        {/* Image container */}
        <div className={`relative bg-black overflow-hidden ${portrait ? "aspect-[3/4] max-h-[70vh]" : "aspect-video"}`}>
          <img
            src={gallery[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Prev/Next arrows */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-0 h-full w-1/3 flex items-center justify-start pl-4 text-white/0 hover:text-white/80 transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-0 h-full w-1/3 flex items-center justify-end pr-4 text-white/0 hover:text-white/80 transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots indicator */}
        {gallery.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        <div className="text-white/60 text-center mt-2 text-sm font-body">
          {currentIndex + 1} / {gallery.length}
        </div>
      </div>
    </div>
  );
};
