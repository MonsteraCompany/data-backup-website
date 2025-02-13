import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from "./contact-form"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
}

export function PricingCard({ title, price, period, description, features }: PricingCardProps) {
  return (
    <Card className="bg-black border border-white/10">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription className="text-white/80">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-white">
          {price}
          <span className="text-xl text-white/80">{period}</span>
        </p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-white/80">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700">
              Commencer
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Commencer avec {title}</DialogTitle>
              <DialogDescription>Remplissez ce formulaire pour commencer avec notre offre {title}.</DialogDescription>
            </DialogHeader>
            <ContactForm />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

