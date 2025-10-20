import { ImageWithFallback } from './figma/ImageWithFallback';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image: string;
}

interface MedicalTeamProps {
  doctors: Doctor[];
}

export function MedicalTeam({ doctors }: MedicalTeamProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758205307854-5f0b57c27f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjA2ODUzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Equipo Médico"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(79, 195, 247, 0.9) 0%, rgba(167, 243, 208, 0.8) 100%)' }}></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-white mb-4">
            Nuestro Equipo Médico de Excelencia
          </h1>
          <p className="text-xl text-white">
            Conoce a nuestros especialistas certificados, cada uno con amplia experiencia y dedicación para brindarte el mejor cuidado dental
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

        {/* Destacado del Equipo */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl mb-4" style={{ color: '#4FC3F7' }}>
              👨‍⚕️ Especialistas con Formación Internacional
            </h2>
            <p className="text-gray-700 mb-6">
              Nuestro equipo médico está compuesto por profesionales con certificaciones nacionales e internacionales, formados en las mejores universidades y con experiencia en las técnicas dentales más avanzadas. Cada miembro se especializa en áreas específicas para garantizar que recibas atención experta en cada tratamiento.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-4 rounded-xl shadow">
                <div className="text-3xl mb-2" style={{ color: '#4FC3F7' }}>10+</div>
                <p className="text-sm text-gray-600">Especialistas Certificados</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <div className="text-3xl mb-2" style={{ color: '#4FC3F7' }}>50+</div>
                <p className="text-sm text-gray-600">Años de Experiencia Combinada</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <div className="text-3xl mb-2" style={{ color: '#4FC3F7' }}>100%</div>
                <p className="text-sm text-gray-600">Dedicación y Profesionalismo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
              style={{ border: '2px solid #A7F3D0' }}
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2" style={{ color: '#4FC3F7' }}>
                  {doctor.name}
                </h3>
                <p className="text-gray-500 mb-4">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600">
                  {doctor.description}
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
