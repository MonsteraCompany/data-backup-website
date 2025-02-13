import type React from "react"
import { CheckCircle } from "lucide-react"

interface ListItemProps {
  children: React.ReactNode
}

export function ListItem({ children }: ListItemProps) {
  return (
    <li className="flex items-center mb-2">
      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
      <span className="text-white/80">{children}</span>
    </li>
  )
}

