import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Heart, Shield, Clock, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { Button } from './ui/button';

interface AboutUsProps {
  onNavigate: (page: string) => void;
  onOpenAppointmentModal: () => void;
}

export function AboutUs({ onNavigate, onOpenAppointmentModal }: AboutUsProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NjA3NzMzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Clínica Smile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(79, 195, 247, 0.9) 0%, rgba(167, 243, 208, 0.8) 100%)' }}></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-white mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-white">
            Más de 15 años transformando sonrisas con profesionalismo y dedicación
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6" style={{ color: '#4FC3F7' }}>
                Nuestra Historia
              </h2>
              <p className="text-gray-700 mb-4">
                Fundada en 2008, <strong>Clínica Dental Smile</strong> nació con una visión clara: hacer que la salud dental de calidad sea accesible para todos. Comenzamos como una pequeña clínica familiar y hemos crecido hasta convertirnos en uno de los centros odontológicos más reconocidos de la región.
              </p>
              <p className="text-gray-700 mb-4">
                A lo largo de estos años, hemos tratado a más de 5,000 pacientes satisfechos, realizando desde limpiezas dentales rutinarias hasta complejas cirugías maxilofaciales y tratamientos de ortodoncia invisibles.
              </p>
              <p className="text-gray-700 mb-6">
                Nuestra filosofía se basa en tres pilares fundamentales: <strong>excelencia profesional</strong>, <strong>tecnología de vanguardia</strong> y <strong>atención humanizada</strong>. Creemos que cada paciente merece el mejor cuidado posible en un ambiente cálido y acogedor.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={onOpenAppointmentModal}
                  style={{ backgroundColor: '#4FC3F7' }}
                >
                  Agenda tu Cita
                </Button>
                <Button
                  onClick={() => onNavigate('team')}
                  variant="outline"
                >
                  Conoce al Equipo
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDc3MzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipo Smile"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4" style={{ color: '#4FC3F7' }}>
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían cada decisión que tomamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A7F3D0' }}>
                <Heart className="w-8 h-8" style={{ color: '#4FC3F7' }} />
              </div>
              <h3 className="mb-3" style={{ color: '#4FC3F7' }}>Empatía</h3>
              <p className="text-gray-600">
                Nos ponemos en los zapatos de cada paciente, entendiendo sus necesidades y preocupaciones
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A7F3D0' }}>
                <Award className="w-8 h-8" style={{ color: '#4FC3F7' }} />
              </div>
              <h3 className="mb-3" style={{ color: '#4FC3F7' }}>Excelencia</h3>
              <p className="text-gray-600">
                Nos comprometemos con la más alta calidad en cada tratamiento que realizamos
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A7F3D0' }}>
                <Shield className="w-8 h-8" style={{ color: '#4FC3F7' }} />
              </div>
              <h3 className="mb-3" style={{ color: '#4FC3F7' }}>Confianza</h3>
              <p className="text-gray-600">
                Construimos relaciones duraderas basadas en la transparencia y la honestidad
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A7F3D0' }}>
                <TrendingUp className="w-8 h-8" style={{ color: '#4FC3F7' }} />
              </div>
              <h3 className="mb-3" style={{ color: '#4FC3F7' }}>Innovación</h3>
              <p className="text-gray-600">
                Nos mantenemos a la vanguardia con la última tecnología y técnicas dentales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones y Acreditaciones */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758206524132-72a2aa6639e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDc3MzM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tecnología dental"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6" style={{ color: '#4FC3F7' }}>
                Certificaciones y Tecnología
              </h2>
              <p className="text-gray-700 mb-6">
                Estamos orgullosos de contar con las certificaciones más prestigiosas del sector dental y de invertir constantemente en tecnología de última generación para ofrecer los mejores resultados.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#4FC3F7' }} />
                  <div>
                    <h4 className="mb-1">Certificación Internacional ISO 9001</h4>
                    <p className="text-gray-600 text-sm">Gestión de calidad en servicios odontológicos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#4FC3F7' }} />
                  <div>
                    <h4 className="mb-1">Acreditación Nacional de Salud</h4>
                    <p className="text-gray-600 text-sm">Cumplimiento de estándares sanitarios</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#4FC3F7' }} />
                  <div>
                    <h4 className="mb-1">Miembros de la Asociación Dental Americana</h4>
                    <p className="text-gray-600 text-sm">Reconocimiento profesional internacional</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#4FC3F7' }} />
                  <div>
                    <h4 className="mb-1">Equipamiento Digital 3D</h4>
                    <p className="text-gray-600 text-sm">Tomografías y escáneres de última generación</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#4FC3F7' }} />
                  <div>
                    <h4 className="mb-1">Sistemas de Esterilización Avanzada</h4>
                    <p className="text-gray-600 text-sm">Protección máxima para nuestros pacientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Compromiso */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6" style={{ color: '#4FC3F7' }}>
            Nuestro Compromiso Contigo
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            En Smile, no solo tratamos dientes, cuidamos personas. Cada miembro de nuestro equipo está comprometido con tu bienestar y satisfacción.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Clock className="w-12 h-12 mx-auto mb-4" style={{ color: '#4FC3F7' }} />
              <h3 className="mb-2">Puntualidad</h3>
              <p className="text-gray-600">
                Respetamos tu tiempo con citas programadas sin largas esperas
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="w-12 h-12 mx-auto mb-4" style={{ color: '#4FC3F7' }} />
              <h3 className="mb-2">Atención Integral</h3>
              <p className="text-gray-600">
                Seguimiento personalizado en cada etapa de tu tratamiento
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Star className="w-12 h-12 mx-auto mb-4" style={{ color: '#4FC3F7' }} />
              <h3 className="mb-2">Garantía de Satisfacción</h3>
              <p className="text-gray-600">
                Tu sonrisa es nuestra mejor carta de presentación
              </p>
            </div>
          </div>

          <Button
            onClick={onOpenAppointmentModal}
            size="lg"
            className="shadow-2xl text-xl px-8 py-6"
            style={{ backgroundColor: '#4FC3F7' }}
          >
            Únete a Nuestra Familia Smile
          </Button>
        </div>
      </section>

      {/* Datos Estadísticos */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #4FC3F7 0%, #A7F3D0 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl mb-2">15+</div>
              <p className="text-xl">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-5xl mb-2">5000+</div>
              <p className="text-xl">Pacientes Atendidos</p>
            </div>
            <div>
              <div className="text-5xl mb-2">10+</div>
              <p className="text-xl">Especialistas Certificados</p>
            </div>
            <div>
              <div className="text-5xl mb-2">98%</div>
              <p className="text-xl">Satisfacción del Cliente</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
