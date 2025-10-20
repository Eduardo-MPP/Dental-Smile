import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenAppointmentModal: () => void;
}

export function Footer({ onNavigate, onOpenAppointmentModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl mb-4" style={{ color: '#4FC3F7' }}>
              Clínica Smile
            </h3>
            <p className="text-gray-400 mb-6">
              Tu sonrisa es nuestra pasión. Ofrecemos servicios dentales de excelencia con más de 15 años de experiencia.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[#4FC3F7]"
                style={{ backgroundColor: 'rgba(79, 195, 247, 0.2)' }}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[#4FC3F7]"
                style={{ backgroundColor: 'rgba(79, 195, 247, 0.2)' }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[#4FC3F7]"
                style={{ backgroundColor: 'rgba(79, 195, 247, 0.2)' }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[#4FC3F7]"
                style={{ backgroundColor: 'rgba(79, 195, 247, 0.2)' }}
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4" style={{ color: '#4FC3F7' }}>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-[#4FC3F7] transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-[#4FC3F7] transition-colors"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-gray-400 hover:text-[#4FC3F7] transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('team')}
                  className="text-gray-400 hover:text-[#4FC3F7] transition-colors"
                >
                  Equipo Médico
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('testimonials')}
                  className="text-gray-400 hover:text-[#4FC3F7] transition-colors"
                >
                  Testimonios
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl mb-4" style={{ color: '#4FC3F7' }}>
              Servicios Destacados
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>Limpieza Dental</li>
              <li>Ortodoncia Invisible</li>
              <li>Implantes Dentales</li>
              <li>Blanqueamiento Dental</li>
              <li>Cirugía Maxilofacial</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-4" style={{ color: '#4FC3F7' }}>
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#4FC3F7' }} />
                <p className="text-gray-400">
                  Av. Principal 123, Centro Médico<br />
                  Ciudad, País 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#4FC3F7' }} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-[#4FC3F7] transition-colors">
                  +1 234 567 890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#4FC3F7' }} />
                <a href="mailto:info@clinicasmile.com" className="text-gray-400 hover:text-[#4FC3F7] transition-colors">
                  info@clinicasmile.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#4FC3F7' }} />
                <div className="text-gray-400">
                  <p>Lun - Vie: 9:00 - 19:00</p>
                  <p>Sábados: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4" style={{ color: '#4FC3F7' }}>
              ¿Listo para transformar tu sonrisa?
            </h3>
            <p className="text-gray-400 mb-6">
              Agenda tu cita hoy y da el primer paso hacia una sonrisa perfecta
            </p>
            <Button
              onClick={onOpenAppointmentModal}
              size="lg"
              className="shadow-xl"
              style={{ backgroundColor: '#4FC3F7' }}
            >
              Agendar Cita Ahora
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Clínica Dental Smile. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-[#4FC3F7] transition-colors">
                Política de Privacidad
              </button>
              <button className="text-gray-400 hover:text-[#4FC3F7] transition-colors">
                Términos de Servicio
              </button>
              <button className="text-gray-400 hover:text-[#4FC3F7] transition-colors">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
