import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <Card className="bg-black border border-white/10 w-[400px] mx-4 flex-shrink-0">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-green-500 fill-current" />
          ))}
        </div>
        <p className="text-center mb-4 text-white">{quote}</p>
        <p className="text-center text-sm text-white/60">
          {author}, {company}
        </p>
      </CardContent>
    </Card>
  )
}

