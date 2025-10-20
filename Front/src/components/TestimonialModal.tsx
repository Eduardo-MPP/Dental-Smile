import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Star } from 'lucide-react';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
  userName: string;
}

export function TestimonialModal({ isOpen, onClose, onSubmit, userName }: TestimonialModalProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(rating, comment);
    setRating(5);
    setComment('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle style={{ color: '#4FC3F7' }}>
            Agregar Testimonio
          </DialogTitle>
          <DialogDescription>
            Comparte tu experiencia con nuestra clínica dental
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div>
            <Label>Tu Nombre</Label>
            <p className="mt-2 p-2 bg-gray-100 rounded-md text-gray-700">
              {userName}
            </p>
          </div>

          <div>
            <Label>Calificación</Label>
            <div className="flex gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= (hoveredRating || rating)
                        ? 'fill-[#4FC3F7] text-[#4FC3F7]'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="comment">Tu Comentario</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="mt-2 min-h-[120px]"
              placeholder="Comparte tu experiencia con nosotros..."
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1"
              style={{ backgroundColor: '#4FC3F7' }}
            >
              Enviar Testimonio
            </Button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Tu testimonio será revisado por nuestro equipo antes de ser publicado.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
