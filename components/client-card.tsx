import type React from "react"

interface ClientCardProps {
  icon: React.ReactNode
  text: string
}

export function ClientCard({ icon, text }: ClientCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-black border border-white/10 rounded-lg w-[200px]">
      <div className="text-green-500 mb-2">{icon}</div>
      <p className="text-sm text-white/80 text-center">{text}</p>
    </div>
  )
}

