import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-black border border-white/10 text-white text-center">
      <CardHeader>
        <div className="flex items-center justify-center mb-4">{icon}</div>
        <CardTitle className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/80">{description}</p>
      </CardContent>
    </Card>
  )
}

