import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, MapPin, Phone, Award, Shield, Heart } from 'lucide-react';

interface HomePageProps {
  onOpenAppointmentModal: () => void;
  onNavigate: (page: string) => void;
}

export function HomePage({ onOpenAppointmentModal, onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #4FC3F7 0%, #A7F3D0 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1611690061822-b707a67bfebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMHNtaWxlfGVufDF8fHx8MTc2MDc3MTAxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dental clinic"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Tu sonrisa, nuestra prioridad
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Cuidado dental profesional y accesible para toda la familia
          </p>
          <Button
            onClick={onOpenAppointmentModal}
            size="lg"
            className="shadow-2xl text-xl px-8 py-6"
            style={{ backgroundColor: 'white', color: '#4FC3F7' }}
          >
            Agendar Cita Ahora
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6" style={{ color: '#4FC3F7' }}>
                Sobre Nuestra Clínica
              </h2>
              <p className="text-gray-700 mb-4">
                En Smile, nos comprometemos a brindar el mejor cuidado dental con tecnología de vanguardia y un equipo de profesionales altamente capacitados.
              </p>
              <p className="text-gray-700 mb-6">
                Con más de 15 años de experiencia, hemos transformado miles de sonrisas, ofreciendo tratamientos personalizados en un ambiente cálido y acogedor.
              </p>
              <Button
                onClick={() => onNavigate('about')}
                style={{ backgroundColor: '#4FC3F7' }}
              >
                Conoce más sobre nosotros
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWN8ZW58MXx8fHwxNzYwNzExOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dental clinic interior"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl mb-12" style={{ color: '#4FC3F7' }}>
            ¿Por qué elegirnos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow" style={{ backgroundColor: '#F5F5F5' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A7F3D0' }}>
                <span className="text-3xl">🦷</span>
              </div>
              <h3 className="mb-4">Profesionales Certificados</h3>
              <p className="text-gray-600">
                Equipo médico altamente calificado con certificaciones internacionales
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow" style={{ backgroundColor: '#F5F5F5' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A7F3D0' }}>
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="mb-4">Tecnología Avanzada</h3>
              <p className="text-gray-600">
                Equipamiento de última generación para diagnósticos precisos
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow" style={{ backgroundColor: '#F5F5F5' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A7F3D0' }}>
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="mb-4">Atención Personalizada</h3>
              <p className="text-gray-600">
                Planes de tratamiento adaptados a tus necesidades específicas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#4FC3F7' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl mb-2">15+</div>
              <p className="text-xl">Años de Experiencia</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl mb-2">5000+</div>
              <p className="text-xl">Pacientes Felices</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl mb-2">10+</div>
              <p className="text-xl">Especialistas</p>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl mb-2">98%</div>
              <p className="text-xl">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758812821349-1d2a4a96eecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDc3MjE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dental technology"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6" style={{ color: '#4FC3F7' }}>
                Tecnología de Vanguardia
              </h2>
              <p className="text-gray-700 mb-6">
                Contamos con el equipo dental más avanzado del mercado, incluyendo rayos X digitales, escáneres intraorales 3D y sistemas de blanqueamiento láser de última generación.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#A7F3D0' }}>
                    <Shield className="w-5 h-5" style={{ color: '#4FC3F7' }} />
                  </div>
                  <div>
                    <h4 className="mb-1">Diagnóstico Digital</h4>
                    <p className="text-gray-600 text-sm">Imágenes de alta resolución para tratamientos más precisos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#A7F3D0' }}>
                    <Award className="w-5 h-5" style={{ color: '#4FC3F7' }} />
                  </div>
                  <div>
                    <h4 className="mb-1">Certificaciones Internacionales</h4>
                    <p className="text-gray-600 text-sm">Acreditados por las principales organizaciones dentales</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#A7F3D0' }}>
                    <Heart className="w-5 h-5" style={{ color: '#4FC3F7' }} />
                  </div>
                  <div>
                    <h4 className="mb-1">Atención Compasiva</h4>
                    <p className="text-gray-600 text-sm">Nos importa tu comodidad y bienestar durante todo el proceso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4" style={{ color: '#4FC3F7' }}>
              Visítanos o Contáctanos
            </h2>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte con tu salud dental
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#F5F5F5' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A7F3D0' }}>
                <MapPin className="w-8 h-8" style={{ color: '#4FC3F7' }} />
              </div>
              <h3 className="mb-2" style={{ color: '#4FC3F7' }}>Dirección</h3>
              <p className="text-gray-700">Av. Principal 123</p>
              <p className="text-gray-700">Ciudad, País 12345</p>
            </div>
            <div className="text-center p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#F5F5F5' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A7F3D0' }}>
                <Phone className="w-8 h-8" style={{ color: '#4FC3F7' }} />
              </div>
              <h3 className="mb-2" style={{ color: '#4FC3F7' }}>Teléfono</h3>
              <p className="text-gray-700">+1 (555) 123-4567</p>
              <p className="text-gray-700">+1 (555) 765-4321</p>
            </div>
            <div className="text-center p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#F5F5F5' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A7F3D0' }}>
                <Clock className="w-8 h-8" style={{ color: '#4FC3F7' }} />
              </div>
              <h3 className="mb-2" style={{ color: '#4FC3F7' }}>Horario</h3>
              <p className="text-gray-700">Lun - Vie: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-700">Sábados: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #A7F3D0 0%, #4FC3F7 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-white mb-6">
            ¿Listo para tu mejor sonrisa?
          </h2>
          <p className="text-xl text-white mb-8">
            Agenda tu cita hoy y recibe una consulta inicial gratuita
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onOpenAppointmentModal}
              size="lg"
              className="shadow-2xl text-xl px-8 py-6"
              style={{ backgroundColor: 'white', color: '#4FC3F7' }}
            >
              Agendar Cita Ahora
            </Button>
            <Button
              onClick={() => onNavigate('services')}
              size="lg"
              variant="outline"
              className="shadow-2xl text-xl px-8 py-6 bg-transparent text-white border-2 border-white hover:bg-white/10"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
