
import { Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Code2, Database} from "lucide-react"
// import ContactForm from '@/components/ContactForm'
import './App.css'
import ContactForm from './components/ui/components_ContactForm'

function App() {


  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Globe className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">HermanasTech</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#servicios">
            Servicios
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#sobre-nosotras">
            Sobre Nosotras
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
            Contacto
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-blue-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Soluciones Tecnológicas Innovadoras
              </h1>
              <p className="mx-auto max-w-[700px] text-lg sm:text-xl">
                Desarrollo web y ciencia de datos para impulsar tu negocio al siguiente nivel
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100" size="lg">
                Conoce nuestros servicios
              </Button>
            </div>
          </div>
        </section>
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Nuestros Servicios
            </h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Code2 className="h-12 w-12 text-purple-500" />
                <h3 className="text-2xl font-bold">Desarrollo Web</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Creamos sitios web y aplicaciones modernas, responsivas y de alto rendimiento utilizando las últimas tecnologías.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Database className="h-12 w-12 text-blue-500" />
                <h3 className="text-2xl font-bold">Ciencia de Datos</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Analizamos tus datos para obtener insights valiosos y desarrollamos modelos predictivos para impulsar tu negocio.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="sobre-nosotras" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Sobre Nosotras
            </h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="flex flex-col items-center space-y-4 text-center">
                {/* <Image
                  alt="Foto de perfil"
                  className="rounded-full"
                  height={200}
                  width={200}
                  src="/tu-foto.jpg"
                /> */}
                <h3 className="text-2xl font-bold">Tu Nombre</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Experta en desarrollo web con años de experiencia en la creación de soluciones digitales innovadoras.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                {/* <Image
                  alt="Foto de perfil"
                  className="rounded-full"
                  height={200}
                  width={200}
                  src="/foto-hermana.jpg"
                /> */}
                <h3 className="text-2xl font-bold">Nombre de tu Hermana</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Científica de datos apasionada por transformar datos complejos en insights accionables para las empresas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Contáctanos
            </h2>
            <div className="mx-auto max-w-[600px]">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 HermanasTech. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Términos de servicio
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Política de privacidad
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default App
