
"use client"
import './globals.css'
import '@google/model-viewer'

export default function Home() {
  return (
    //@ts-ignore
    <model-viewer
      id="view3d"
      src="/3d/near.glb"
      shadow-intensity="1"
      shadow-softness="0.35"
      ar
      camera-controls
      touch-action="pan-y"
      auto-rotate
    >
      <button slot="ar-button">
        View in your space
      </button>
      {/* @ts-ignore */}
    </model-viewer>
  )
}
