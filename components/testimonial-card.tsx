import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <Card className="bg-black border border-white/10 h-full">
      <CardContent className="pt-6 p-6">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-green-500 fill-current" />
          ))}
        </div>
        <p className="text-center mb-4 text-white text-lg">{quote}</p>
        <div className="text-center">
          <p className="font-medium text-green-500">{author}</p>
          <p className="text-sm text-white/60">{company}</p>
        </div>
      </CardContent>
    </Card>
  )
}

