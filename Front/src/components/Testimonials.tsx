import { Star, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  approved: boolean;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  isLoggedIn: boolean;
  onOpenTestimonialModal: () => void;
}

export function Testimonials({ testimonials, isLoggedIn, onOpenTestimonialModal }: TestimonialsProps) {
  const approvedTestimonials = testimonials.filter(t => t.approved);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1630438994394-3deff7a591bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBzbWlsZXxlbnwxfHx8fDE3NjA3NzQxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Testimonios"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(79, 195, 247, 0.9) 0%, rgba(167, 243, 208, 0.8) 100%)' }}></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-white mb-4">
            Lo Que Dicen Nuestros Pacientes
          </h1>
          <p className="text-xl text-white">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa. Lee las experiencias reales de quienes confiaron en Smile
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-20 px-4" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
          {isLoggedIn && (
            <Button
              onClick={onOpenTestimonialModal}
              className="shadow-lg"
              style={{ backgroundColor: '#4FC3F7' }}
            >
              <Plus className="w-5 h-5 mr-2" />
              Compartir Mi Experiencia
            </Button>
          )}
        </div>

        {/* Stats de Testimonios */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-2" style={{ color: '#4FC3F7' }}>⭐ 4.9/5</div>
            <p className="text-gray-600">Calificación Promedio</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-2" style={{ color: '#4FC3F7' }}>98%</div>
            <p className="text-gray-600">Pacientes Satisfechos</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-2" style={{ color: '#4FC3F7' }}>500+</div>
            <p className="text-gray-600">Reseñas Positivas</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approvedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'fill-[#4FC3F7] text-[#4FC3F7]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.comment}"
              </p>
              <p style={{ color: '#4FC3F7' }}>
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {approvedTestimonials.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            <p>Aún no hay testimonios. ¡Sé el primero en compartir tu experiencia!</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
