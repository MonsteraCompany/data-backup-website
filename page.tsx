"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  CheckCircle,
  Cloud,
  Database,
  Server,
  Shield,
  AlertTriangle,
  Star,
  Briefcase,
  Camera,
  Home,
  Palette,
  Lightbulb,
  Wind,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [storage, setStorage] = useState(1)
  const [basicPrice, setBasicPrice] = useState(49)
  const [proPrice, setProPrice] = useState(99)

  useEffect(() => {
    setBasicPrice(49 + storage * 9)
    setProPrice(99 + storage * 9)
  }, [storage])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert("Formulaire envoyé avec succès!")
      } else {
        alert("Erreur lors de l'envoi du formulaire.")
      }
    } catch (error) {
      console.error("Erreur:", error)
      alert("Une erreur est survenue lors de l'envoi du formulaire.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-white/10">
        <Link className="flex items-center justify-center" href="#">
          <Cloud className="h-6 w-6 text-green-500" />
          <span className="ml-2 text-2xl font-bold">SecureSauvegarde</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-green-500" href="#fonctionnalites">
            Fonctionnalités
          </Link>
          <Link className="text-sm font-medium hover:text-green-500" href="#tarifs">
            Tarifs
          </Link>
          <Link className="text-sm font-medium hover:text-green-500" href="#temoignages">
            Témoignages
          </Link>
          <Link className="text-sm font-medium hover:text-green-500" href="#faq">
            FAQ
          </Link>
          <Link className="text-sm font-medium hover:text-green-500" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Sécurisez Vos Données en Toute Confiance
                </h1>
                <p className="mx-auto md:mx-0 max-w-[700px] text-lg sm:text-xl text-white mb-6">
                  Protégez vos informations précieuses avec notre service de sauvegarde de pointe. Rapide, fiable et
                  toujours sécurisé.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700"
                      size="lg"
                    >
                      Commencer l'Essai Gratuit
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Commencer l'essai gratuit</DialogTitle>
                      <DialogDescription>
                        Remplissez ce formulaire pour commencer votre essai gratuit de 30 jours.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Nom
                        </Label>
                        <Input id="name" name="name" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="company" className="text-right">
                          Société
                        </Label>
                        <Input id="company" name="company" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input id="email" name="email" type="email" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                          Téléphone
                        </Label>
                        <Input id="phone" name="phone" type="tel" className="col-span-3" />
                      </div>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700"
                      >
                        Envoyer
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex-1">
                <video className="w-full rounded-lg shadow-lg" autoPlay loop muted playsInline>
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cube-FSIhJV6zzTII43diLshTulNxicfkxN.mp4"
                    type="video/mp4"
                  />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-center space-x-4 text-red-500">
              <AlertTriangle className="h-6 w-6" />
              <p className="text-lg font-semibold">
                1 PME sur 2 n'a pas de plan de sauvegarde en cas de crash majeur de ses données.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white text-black">
                <CardHeader>
                  <CardTitle className="text-green-900">Principaux Risques</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <ListItem>Pannes matérielles</ListItem>
                    <ListItem>Attaques malveillantes</ListItem>
                    <ListItem>Ransomware</ListItem>
                    <ListItem>Suppression accidentelle de données</ListItem>
                    <ListItem>Erreurs humaines</ListItem>
                    <ListItem>Catastrophes naturelles</ListItem>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white text-black">
                <CardHeader>
                  <CardTitle className="text-green-900">Nos Garanties</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <ListItem>Sans engagement</ListItem>
                    <ListItem>Gestion 100% des sauvegardes</ListItem>
                    <ListItem>Monitoring en temps réel</ListItem>
                    <ListItem>Sauvegarde via VPN chiffré</ListItem>
                    <ListItem>Pas de frais de restauration</ListItem>
                    <ListItem>Pas de frais d'archivage</ListItem>
                    <ListItem>Historique illimité, sauvegardes incrémentales</ListItem>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="fonctionnalites" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-900">
              Pourquoi Choisir SecureSauvegarde ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-green-900" />}
                title="Chiffrement Professionnel"
                description="Vos données sont protégées par un chiffrement de niveau militaire, assurant une sécurité maximale."
              />
              <FeatureCard
                icon={<Server className="h-10 w-10 text-green-900" />}
                title="Sauvegardes Automatiques"
                description="Configurez une fois et oubliez. Notre système effectue des sauvegardes régulières sans aucune intervention manuelle."
              />
              <FeatureCard
                icon={<Database className="h-10 w-10 text-green-900" />}
                title="Stockage Flexible"
                description="Adaptez votre stockage à vos besoins. Augmentez ou diminuez votre capacité à tout moment."
              />
            </div>
          </div>
        </section>
        <section id="tarifs" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-900">
              Tarification Simple et Transparente
            </h2>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <span>Mensuel</span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
              <span>Annuel</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Basic"
                price={isAnnual ? `${basicPrice * 10}€` : `${basicPrice}€`}
                period={isAnnual ? "/an" : "/mois"}
                description="Parfait pour les petites entreprises"
                features={["1 serveur", "Sauvegardes quotidiennes", "Support par email"]}
              />
              <PricingCard
                title="Pro"
                price={isAnnual ? `${proPrice * 10}€` : `${proPrice}€`}
                period={isAnnual ? "/an" : "/mois"}
                description="Idéal pour les entreprises en croissance"
                features={["Jusqu'à 3 serveurs", "Sauvegardes horaires", "Support prioritaire"]}
              />
              <PricingCard
                title="Entreprise"
                price="Sur mesure"
                period=""
                description="Pour les grandes organisations"
                features={["Serveurs illimités", "Sauvegardes personnalisées", "Support dédié 24/7"]}
              />
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4 text-center text-green-900">Ajustez votre stockage</h3>
              <div className="max-w-md mx-auto">
                <Slider value={[storage]} onValueChange={(value) => setStorage(value[0])} max={100} step={1} />
                <p className="text-center mt-4">
                  {storage} TB de stockage pour {storage * 9}€ supplémentaires par mois
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="temoignages" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-green-900">
              Ce Que Disent Nos Clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="SecureSauvegarde nous a sauvé d'une perte de données catastrophique. Leur service est inestimable."
                author="Marie Dupont"
                company="Agence de Communication Créative"
              />
              <TestimonialCard
                quote="La tranquillité d'esprit que nous offre leur solution de sauvegarde est incomparable."
                author="Jean Martin"
                company="Studio VFX Innovant"
              />
              <TestimonialCard
                quote="Un service client exceptionnel et des fonctionnalités qui répondent parfaitement à nos besoins."
                author="Sophie Lefebvre"
                company="Cabinet d'Architecture Moderne"
              />
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Foire Aux Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Quelle est la fréquence des sauvegardes ?</AccordionTrigger>
                <AccordionContent>
                  Nos sauvegardes sont effectuées quotidiennement par défaut, mais la fréquence peut être ajustée selon
                  vos besoins spécifiques, allant jusqu'à des sauvegardes en temps réel.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Comment mes données sont-elles protégées ?</AccordionTrigger>
                <AccordionContent>
                  Nous utilisons un chiffrement de bout en bout avec des clés AES-256 bits. De plus, toutes les
                  transmissions de données sont effectuées via des connexions SSL sécurisées.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Puis-je restaurer des versions antérieures de mes fichiers ?</AccordionTrigger>
                <AccordionContent>
                  Oui, notre système de versioning vous permet de restaurer n'importe quelle version antérieure de vos
                  fichiers, offrant une protection contre les modifications accidentelles ou malveillantes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Quel est le délai de support en cas de problème ?</AccordionTrigger>
                <AccordionContent>
                  Notre équipe de support est disponible 24/7. Pour les clients entreprise, nous garantissons un temps
                  de réponse initial de moins de 1 heure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Y a-t-il une limite de stockage ?</AccordionTrigger>
                <AccordionContent>
                  Il n'y a pas de limite stricte. Nos plans sont flexibles et peuvent être ajustés en fonction de vos
                  besoins de stockage, que vous ayez besoin de quelques gigaoctets ou de plusieurs pétaoctets.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Contactez-nous
            </h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <Label htmlFor="contact-name">Nom</Label>
                <Input id="contact-name" name="name" required />
              </div>
              <div>
                <Label htmlFor="contact-company">Société</Label>
                <Input id="contact-company" name="company" required />
              </div>
              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" name="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="contact-phone">Téléphone</Label>
                <Input id="contact-phone" name="phone" type="tel" required />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700"
              >
                Envoyer
              </Button>
            </form>
          </div>
        </section>
        <section className="w-full py-12 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 text-green-900">
              Nos Clients
            </h2>
            <p className="text-center text-white mb-8">Nous servons une variété de secteurs, notamment :</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              <ClientCard icon={<Briefcase />} text="Agences de Communication" />
              <ClientCard icon={<Camera />} text="Studios VFX" />
              <ClientCard icon={<Home />} text="Cabinets d'Architecture" />
              <ClientCard icon={<Palette />} text="Design d'Intérieur" />
              <ClientCard icon={<Lightbulb />} text="Design de Meubles" />
              <ClientCard icon={<Wind />} text="Énergies Nouvelles" />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10">
        <p className="text-xs text-white">© 2025 SecureSauvegarde. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Conditions d'utilisation
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Politique de confidentialité
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-white text-black text-center">
      <CardHeader>
        <div className="flex items-center justify-center mb-4">{icon}</div>
        <CardTitle className="text-green-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-black">{description}</p>
      </CardContent>
    </Card>
  )
}

function PricingCard({ title, price, period, description, features }) {
  return (
    <Card className="bg-white text-black">
      <CardHeader>
        <CardTitle className="text-green-900">{title}</CardTitle>
        <CardDescription className="text-black">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-black">
          {price}
          <span className="text-xl">{period}</span>
        </p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-black">
              <CheckCircle className="h-5 w-5 text-green-900 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-900 hover:bg-green-800 text-white">Commencer</Button>
      </CardFooter>
    </Card>
  )
}

function TestimonialCard({ quote, author, company }) {
  return (
    <Card className="bg-white text-black">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-center mb-4 text-black">"{quote}"</p>
        <p className="text-center text-sm text-gray-600">
          {author}, {company}
        </p>
      </CardContent>
    </Card>
  )
}

function ListItem({ children }) {
  return (
    <li className="flex items-center mb-2">
      <CheckCircle className="h-5 w-5 text-green-900 mr-2" />
      <span className="text-black">{children}</span>
    </li>
  )
}

function ClientCard({ icon, text }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
      <div className="text-green-900 mb-2">{icon}</div>
      <p className="text-sm text-black">{text}</p>
    </div>
  )
}

