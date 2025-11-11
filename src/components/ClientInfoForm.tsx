"use client";

import { useState } from "react";
import { User, Phone, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ClientInfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/client", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erreur lors de l'envoi");

      setSuccess("Les informations ont été envoyées avec succès !");
      setFormData({ name: "", phone: "", address: "" });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Échec de l'envoi, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-4 rounded-xl shadow-sm border max-w-xl mx-auto">
      <h2 className="font-medium text-gray-800 mb-3">Informations client</h2>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-3">
          {/* Ligne 1 */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Nom et prénom */}
            <div className="relative flex-1">
              <input
                name="name"
                type="text"
                placeholder="nom et prénom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <User className="absolute left-2 top-2.5 text-blue-600 w-4 h-4" />
            </div>

            {/* Numéro de téléphone */}
            <div className="relative flex-1">
              <input
                name="phone"
                type="tel"
                placeholder="numéro de téléphone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]*"
                inputMode="numeric"
                required
                className="w-full border rounded-md px-3 py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Phone className="absolute left-2 top-2.5 text-gray-500 w-4 h-4" />
            </div>
          </div>

          {/* Adresse */}
          <div className="relative">
            <input
              name="address"
              type="text"
              placeholder="l'adresse"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Home className="absolute left-2 top-2.5 text-orange-500 w-4 h-4" />
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded-md py-2 mt-3 hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Envoi..." : "Commander"}
          </button>

          {/* Messages */}
          {success && <p className="text-green-600 text-sm">{success}</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </CardContent>
      </form>
    </Card>
  );
}
