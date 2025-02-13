import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactForm() {
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
  )
}

