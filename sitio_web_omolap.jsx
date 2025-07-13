import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Warehouse, Building2, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeOmolap() {
  const infraFeatures = [
    {
      icon: <Warehouse className="w-12 h-12 mb-4 text-blue-600" />,
      title: "77,600 m² techados",
      description: "Naves industriales tipo especulativo con accesos logísticos eficientes.",
    },
    {
      icon: <Building2 className="w-12 h-12 mb-4 text-blue-600" />,
      title: "6 Naves Disponibles",
      description: "Espacios desde 2,000 m² con altura y especificaciones modernas.",
    },
    {
      icon: <MapPin className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Ubicación estratégica",
      description: "A 10 minutos del aeropuerto y sobre el corredor industrial Miguel Alemán.",
    },
  ];

  const companies = [
    {
      name: "Kuriyama de México",
      logo: "/logos/kuriyama.png",
      description: "Fabricación y distribución de mangueras, acoples y accesorios industriales.",
    },
    {
      name: "Accuflex",
      logo: "/logos/accuflex.png",
      description: "Líder en soluciones de mangueras industriales flexibles.",
    },
    {
      name: "Piranha Hose",
      logo: "/logos/piranha.png",
      description: "Especialistas en mangueras de alta resistencia.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6" style={{ backgroundImage: "url('/omolap-drone.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-lg"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">OMOLAP Parque Industrial</h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-200">Ubicación estratégica, infraestructura moderna, y espacios listos para crecer contigo.</p>
          <Button size="lg" className="transition-colors duration-300 bg-blue-600 hover:bg-blue-700 text-white">
            Solicita disponibilidad
          </Button>
        </div>
      </section>

      {/* Infraestructura */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Infraestructura</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {infraFeatures.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl shadow-md hover:shadow-xl bg-white"
            >
              <Card>
                <CardContent className="flex flex-col items-center p-8">
                  {f.icon}
                  <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
                  <p className="text-center text-gray-600">{f.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Ubicación</h2>
        <div className="max-w-4xl mx-auto">
          <div className="w-full aspect-video mb-6 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1234567890123!2d-100.000000000000!3d25.800000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8678abcdef123456%3A0xabcdef1234567890!2sParque%20Industrial%20Omolap!5e0!3m2!1ses-419!2smx!4v0000000000000"
              allowFullScreen
              loading="lazy"
              title="Mapa de OMOLAP"
            ></iframe>
          </div>
          <p className="text-center text-lg text-gray-700">
            Km 15 Carretera Miguel Alemán, Apodaca, Nuevo León — a 10 min del Aeropuerto Internacional Mariano Escobedo.
          </p>
        </div>
      </section>

      {/* Empresas en OMOLAP */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Empresas en OMOLAP</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="rounded-2xl shadow-md hover:shadow-xl bg-white">
              <Card>
                <CardContent className="flex flex-col items-center p-8">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-16 object-contain mb-4"
                  />
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">{company.name}</h3>
                  <p className="text-center text-gray-600">{company.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">¿Listo para crecer con nosotros?</h2>
        <p className="text-lg mb-8 text-gray-700">Contáctanos para más información o agenda una visita al parque.</p>
        <Button size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
          <PhoneCall className="mr-2 text-blue-600" /> Contactar
        </Button>
      </section>
    </div>
  );
}
