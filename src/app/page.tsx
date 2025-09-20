"use client";

import { DemoArtwork } from "@/components/demo-artwork";
import { useCallback, useMemo, useState } from "react";

export default function Home() {
  const [size, setSize] = useState({ width: 320, height: 220 });

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.preventDefault();

      const startX = event.clientX;
      const startY = event.clientY;
      const startWidth = size.width;
      const startHeight = size.height;

      const handlePointerMove = (moveEvent: PointerEvent) => {
        setSize({
          width: Math.max(160, startWidth + (moveEvent.clientX - startX)),
          height: Math.max(160, startHeight + (moveEvent.clientY - startY)),
        });
      };

      const handlePointerUp = () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };

      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    },
    [size.height, size.width]
  );

  const containerStyle = useMemo(
    () => ({
      width: `${size.width}px`,
      height: `${size.height}px`,
    }),
    [size.height, size.width]
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-2xl font-semibold">Resizable SVG Demo</h1>
      <p className="max-w-md text-center text-muted-foreground">
        Drag the handle in the bottom-right corner to resize the container. The
        SVG scales automatically with the container.
      </p>
      <div
        className="relative rounded-md border border-dashed border-slate-400 bg-slate-50 p-4 shadow-sm"
        style={containerStyle}
      >
        <DemoArtwork
          className="h-full w-full"
          viewportWidth={size.width}
          viewportHeight={size.height}
        />
        <div
          role="presentation"
          className="absolute bottom-2 right-2 h-6 w-6 cursor-se-resize rounded-sm border border-slate-400 bg-white/80"
          onPointerDown={handlePointerDown}
        />
      </div>
    </main>
  );
}
