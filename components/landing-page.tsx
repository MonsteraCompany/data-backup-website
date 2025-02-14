"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
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
  Shield,
  Briefcase,
  Camera,
  Home,
  Palette,
  Lightbulb,
  Wind,
  Building,
  Truck,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Utensils,
  Plane,
  Wifi,
  Music,
  Vault,
  Menu,
  AlertTriangle,
  FolderKey,
  Server,
  Database,
  Activity,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { PricingCard } from "./pricing-card"
import { TestimonialCard } from "./testimonial-card"
import { ClientCard } from "./client-card"
import { FeatureCard } from "./feature-card"

export default function LandingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [storage, setStorage] = useState(1)
  const [basicPrice, setBasicPrice] = useState(49)
  const [proPrice, setProPrice] = useState(99)
  const testimonialRef = useRef(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const formRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setBasicPrice(49 + storage * 9)
    setProPrice(99 + storage * 9)
  }, [storage])

  useEffect(() => {
    const testimonialScroll = testimonialRef.current
    if (testimonialScroll) {
      const scrollWidth = testimonialScroll.scrollWidth
      const animationDuration = scrollWidth / 100 // Adjust speed here

      testimonialScroll.style.animation = `scroll ${animationDuration}s linear infinite`
    }
  }, [])

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
        setIsDialogOpen(false)
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        alert("Erreur lors de l'envoi du formulaire.")
      }
    } catch (error) {
      console.error("Erreur:", error)
      alert("Une erreur est survenue lors de l'envoi du formulaire.")
    }
  }

  const ContactForm = () => (
    <form onSubmit={handleSubmit} ref={formRef} className="grid gap-4 py-4">
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
  )

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-white/10">
          <Link className="flex items-center justify-center" href="https://datasafe.co">
            <Vault className="h-6 w-6 text-green-500" />
            <span className="ml-2 text-2xl font-bold">dataSafe</span>
          </Link>
          <nav className="hidden md:flex gap-4 sm:gap-6">
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
          <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </header>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black z-50 border-b border-white/10">
            <nav className="flex flex-col p-4">
              <Link
                className="text-sm font-medium hover:text-green-500 py-2"
                href="#fonctionnalites"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link
                className="text-sm font-medium hover:text-green-500 py-2"
                href="#tarifs"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link
                className="text-sm font-medium hover:text-green-500 py-2"
                href="#temoignages"
                onClick={() => setMobileMenuOpen(false)}
              >
                Témoignages
              </Link>
              <Link
                className="text-sm font-medium hover:text-green-500 py-2"
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                className="text-sm font-medium hover:text-green-500 py-2"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Protégez Vos Données, Protégez Votre Entreprise
                </h1>
                <p className="max-w-[700px] text-lg sm:text-xl text-white mb-6">
                  Chez dataSafe, nous combinons une surveillance constante et une expertise de 20 ans pour offrir une
                  protection continue de vos données. Découvrez notre service de sauvegarde de pointe sur{" "}
                  <a href="https://datasafe.co" className="text-green-400 hover:underline">
                    datasafe.co
                  </a>
                  .
                </p>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700"
                      size="lg"
                      onClick={() => setIsDialogOpen(true)}
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
                    <ContactForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4 text-white title-text">
                    20 Ans d'Expertise à Votre Service
                  </h2>
                  <p className="text-lg text-white mb-6">
                    Fort de deux décennies d'expérience dans l'IT, dataSafe offre une solution de sauvegarde clé en main
                    et 100% managée. Notre expertise nous permet de relever les défis uniques de protection des données
                    auxquels font face les entreprises modernes. Avec dataSafe, bénéficiez d'une tranquillité d'esprit
                    totale : notre équipe d'experts gère l'intégralité du processus, de la configuration initiale à la
                    restauration des données, vous permettant de vous concentrer sur votre cœur de métier en toute
                    sérénité.
                  </p>
                </div>
                <div className="flex justify-center">
                  <video className="w-full rounded-lg shadow-lg filter grayscale" autoPlay loop muted playsInline>
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
          <section id="fonctionnalites" className="w-full py-12 md:py-24 lg:py-32 bg-black">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent title-text">
                Pourquoi Choisir dataSafe ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<FolderKey className="h-10 w-10 text-green-500" />}
                  title="Chiffrement Professionnel"
                  description="Vos données sont protégées par un chiffrement de niveau militaire, assurant une sécurité maximale."
                />
                <FeatureCard
                  icon={<Server className="h-10 w-10 text-green-500" />}
                  title="Sauvegardes Automatiques"
                  description="Configurez une fois et oubliez. Notre système effectue des sauvegardes régulières sans aucune intervention manuelle."
                />
                <FeatureCard
                  icon={<Database className="h-10 w-10 text-green-500" />}
                  title="Stockage Flexible"
                  description="Adaptez votre stockage à vos besoins. Augmentez ou diminuez votre capacité à tout moment."
                />
                <FeatureCard
                  icon={<Activity className="h-10 w-10 text-green-500" />}
                  title="Gestion Complète et Monitoring"
                  description="Nos équipes gèrent tout pour vous, avec un monitoring en temps réel des incidents pour une tranquillité d'esprit totale."
                />
                <FeatureCard
                  icon={<Shield className="h-10 w-10 text-green-500" />}
                  title="Protection Proactive"
                  description="Notre système de surveillance avancé détecte et prévient les menaces potentielles avant qu'elles ne deviennent des problèmes."
                />
                <FeatureCard
                  icon={<Clock className="h-10 w-10 text-green-500" />}
                  title="Restauration Rapide"
                  description="En cas de besoin, notre système permet une restauration rapide et efficace de vos données, minimisant les temps d'arrêt."
                />
              </div>
            </div>
          </section>
          <section id="tarifs" className="w-full py-12 md:py-24 lg:py-32 bg-black">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white title-text">
                Tarification Simple et Transparente
              </h2>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <span>Mensuel</span>
                <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
                <span>Annuel</span>
              </div>
              <div className="max-w-md mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent title-text">
                  Ajustez votre stockage
                </h3>
                <Slider value={[storage]} onValueChange={(value) => setStorage(value[0])} max={100} step={1} />
                <p className="text-center mt-4">
                  {storage} TB de stockage pour {storage * 9}€ supplémentaires par mois
                </p>
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
                  features={["Jusqu'à 3 serveurs", "Gestion complète et monitoring 24/7", "Support prioritaire"]}
                />
                <PricingCard
                  title="Entreprise"
                  price="Sur mesure"
                  period=""
                  description="Pour les grandes organisations"
                  features={["Serveurs illimités", "Sauvegardes personnalisées", "Support dédié 24/7"]}
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent title-text">
                Sécurité et Fiabilité Inégalées
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center p-6 rounded-lg shadow-sm bg-black border border-white/10 text-white text-center">
                  <AlertTriangle className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-2xl font-semibold leading-none tracking-tight bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    Principaux Risques
                  </h3>
                  <div className="space-y-2 text-white text-center">
                    <p>Pannes matérielles</p>
                    <p>Attaques malveillantes</p>
                    <p>Ransomware</p>
                    <p>Suppression accidentelle de données</p>
                    <p>Erreurs humaines</p>
                    <p>Catastrophes naturelles</p>
                  </div>
                </div>
                <div className="flex flex-col items-center p-6 rounded-lg shadow-sm bg-black border border-white/10 text-white text-center">
                  <Shield className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-2xl font-semibold leading-none tracking-tight bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    Nos Garanties
                  </h3>
                  <div className="space-y-2 text-white text-center">
                    <p>Gestion à 100% par nos experts</p>
                    <p>Redondance sur plusieurs sites en Europe</p>
                    <p>Certifications de sécurité ISO</p>
                    <p>Monitoring en temps réel</p>
                    <p>Sauvegarde via VPN chiffré</p>
                    <p>Pas de frais cachés</p>
                    <p>Historique illimité et sauvegardes incrémentales</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="temoignages" className="w-full py-12 md:py-24 lg:py-32 bg-black">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white title-text">
                Ce Que Disent Nos Clients
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                <div className="w-full max-w-md">
                  <TestimonialCard
                    quote="dataSafe nous a sauvé d'une perte de données catastrophique. Leur service est inestimable."
                    author="Camille Z."
                    company="NOVA Energy"
                  />
                </div>
                <div className="w-full max-w-md">
                  <TestimonialCard
                    quote="La tranquillité d'esprit que nous offre leur solution de sauvegarde est incomparable."
                    author="François H."
                    company="Camelia Beauty France"
                  />
                </div>
                <div className="w-full max-w-md">
                  <TestimonialCard
                    quote="Un service client exceptionnel et des fonctionnalités qui répondent parfaitement à nos besoins."
                    author="Pierre-Etienne M."
                    company="Cabinet d'Architecture Moderne"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-black">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent title-text">
                Foire Aux Questions
              </h2>
              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Quelle est la fréquence des sauvegardes ?</AccordionTrigger>
                  <AccordionContent>
                    Nos sauvegardes sont effectuées quotidiennement par défaut, mais la fréquence peut être ajustée
                    selon vos besoins spécifiques, allant jusqu'à des sauvegardes en temps réel.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white title-text">
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
                  className="w-full mt-6 bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700"
                >
                  Envoyer
                </Button>
              </form>
            </div>
          </section>
          <section className="w-full py-12 bg-black overflow-hidden">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent title-text">
                Nos Clients
              </h2>
              <p className="text-center text-white mb-8">Nous servons une variété de secteurs, notamment :</p>
              <div className="relative w-full overflow-hidden">
                <div className="flex animate-scroll-continuous" style={{ width: "400%" }}>
                  {[...Array(2)].map((_, index) => (
                    <div key={index} className="flex space-x-6" style={{ width: "200%" }}>
                      <ClientCard icon={<Briefcase />} text="Agences de Communication" />
                      <ClientCard icon={<Camera />} text="Studios VFX" />
                      <ClientCard icon={<Home />} text="Cabinets d'Architecture" />
                      <ClientCard icon={<Palette />} text="Design d'Intérieur" />
                      <ClientCard icon={<Lightbulb />} text="Design de Meubles" />
                      <ClientCard icon={<Wind />} text="Énergies Nouvelles" />
                      <ClientCard icon={<Building />} text="Immobilier" />
                      <ClientCard icon={<Truck />} text="Logistique" />
                      <ClientCard icon={<Stethoscope />} text="Santé" />
                      <ClientCard icon={<GraduationCap />} text="Éducation" />
                      <ClientCard icon={<ShoppingBag />} text="Commerce de Détail" />
                      <ClientCard icon={<Utensils />} text="Restauration" />
                      <ClientCard icon={<Plane />} text="Tourisme" />
                      <ClientCard icon={<Wifi />} text="Télécommunications" />
                      <ClientCard icon={<Music />} text="Industrie Musicale" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <footer className="w-full py-12 bg-black border-t border-white/10">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Vault className="h-8 w-8 text-green-500 mr-2" />
                <span className="text-2xl font-bold">dataSafe</span>
              </div>
              <div className="text-center md:text-left mb-4 md:mb-0 text-sm text-white/60">
                <p>17 impasse de Cimpoint</p>
                <p>71260 Lugny</p>
                <p>France</p>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <a
                  href="https://wa.me/33603865562"
                  className="flex items-center text-green-500 hover:text-green-400 mb-2"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.892-5.335 11.895-11.893a11.821 11.821 0 00-3.476-8.413z" />
                  </svg>
                  WhatsApp: 0603865562
                </a>
                <p className="text-sm text-white/60">SIRET: 81046186300013</p>
                <p className="text-sm text-white/60">TVA Intracommunautaire: FR91810461863</p>
                <p className="text-sm text-white/60">© 2025 dataSafe. Tous droits réservés.</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}

