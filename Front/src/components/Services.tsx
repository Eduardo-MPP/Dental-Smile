import { Sparkles, Shield, Smile, Scissors } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
}

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'sparkles': <Sparkles className="w-10 h-10" />,
      'shield': <Shield className="w-10 h-10" />,
      'smile': <Smile className="w-10 h-10" />,
      'scissors': <Scissors className="w-10 h-10" />,
    };
    return iconMap[iconName] || <Sparkles className="w-10 h-10" />;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1643660527072-9c702932f606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBzZXJ2aWNlcyUyMGNsaW5pY3xlbnwxfHx8fDE3NjA3NzQxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Servicios Dentales"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(79, 195, 247, 0.9) 0%, rgba(167, 243, 208, 0.8) 100%)' }}></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-white mb-4">
            Nuestros Servicios Dentales
          </h1>
          <p className="text-xl text-white">
            Ofrecemos una amplia gama de tratamientos dentales de alta calidad, utilizando tecnología de vanguardia y técnicas modernas
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-20 px-4" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto">

        {/* Destacado */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-12 text-center">
          <h2 className="text-3xl mb-4" style={{ color: '#4FC3F7' }}>
            ✨ Atención Dental Integral para Toda la Familia
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-6">
            Desde tratamientos preventivos hasta procedimientos estéticos avanzados, nuestro equipo multidisciplinario está capacitado para atender todas tus necesidades dentales en un solo lugar. Contamos con equipamiento de última generación y seguimos los protocolos internacionales más estrictos de higiene y seguridad.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 rounded-full" style={{ backgroundColor: '#A7F3D0', color: '#030213' }}>
              🏥 Instalaciones Modernas
            </span>
            <span className="px-4 py-2 rounded-full" style={{ backgroundColor: '#A7F3D0', color: '#030213' }}>
              💯 Garantía de Calidad
            </span>
            <span className="px-4 py-2 rounded-full" style={{ backgroundColor: '#A7F3D0', color: '#030213' }}>
              📅 Atención Flexible
            </span>
            <span className="px-4 py-2 rounded-full" style={{ backgroundColor: '#A7F3D0', color: '#030213' }}>
              💳 Planes de Financiamiento
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 overflow-hidden"
            >
              {service.image ? (
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#A7F3D0', color: '#4FC3F7' }}
                  >
                    {getIcon(service.icon)}
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-center mb-4" style={{ color: '#4FC3F7' }}>
                  {service.name}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
