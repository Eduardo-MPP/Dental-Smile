import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Phone, MessageCircle, Globe } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onNavigate: (page: string) => void;
  currentUser: {
    name: string;
    lastName: string;
    dni: string;
  } | null;
  doctors: { id: string; name: string; specialty: string }[];
  onCreateAppointment: (appointment: {
    date: string;
    time: string;
    specialty: string;
    doctor: string;
  }) => void;
}

export function AppointmentModal({
  isOpen,
  onClose,
  isLoggedIn,
  onNavigate,
  currentUser,
  doctors,
  onCreateAppointment,
}: AppointmentModalProps) {
  const [step, setStep] = useState<'method' | 'form'>('method');
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    specialty: '',
    doctor: '',
  });

  const handleMethodSelection = (method: 'phone' | 'whatsapp' | 'web') => {
    if (!isLoggedIn) {
      onClose();
      onNavigate('login');
      return;
    }

    if (method === 'phone') {
      window.alert('Llamar al: +1 234 567 890');
      onClose();
    } else if (method === 'whatsapp') {
      window.alert('WhatsApp: +1 234 567 890');
      onClose();
    } else {
      setStep('form');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateAppointment(formData);
    onClose();
    setStep('method');
    setFormData({ date: '', time: '', specialty: '', doctor: '' });
  };

  const specialties = Array.from(new Set(doctors.map(d => d.specialty)));

  const filteredDoctors = formData.specialty
    ? doctors.filter(d => d.specialty === formData.specialty)
    : doctors;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle style={{ color: '#4FC3F7' }}>
            {step === 'method' ? 'Agendar Cita' : 'Completa los Datos'}
          </DialogTitle>
          <DialogDescription>
            {step === 'method' 
              ? 'Elige tu método preferido para agendar tu cita' 
              : 'Completa la información de tu cita'}
          </DialogDescription>
        </DialogHeader>

        {step === 'method' ? (
          <div className="space-y-4 py-4">
            <p className="text-gray-600 mb-6">
              Selecciona cómo deseas agendar tu cita:
            </p>
            
            <button
              onClick={() => handleMethodSelection('phone')}
              className="w-full p-6 rounded-xl border-2 hover:border-[#4FC3F7] hover:bg-[#F5F5F5] transition-all flex items-center gap-4"
            >
              <Phone className="w-8 h-8" style={{ color: '#4FC3F7' }} />
              <div className="text-left">
                <h3 className="mb-1">Por Llamada</h3>
                <p className="text-sm text-gray-600">Habla directamente con nosotros</p>
              </div>
            </button>

            <button
              onClick={() => handleMethodSelection('whatsapp')}
              className="w-full p-6 rounded-xl border-2 hover:border-[#4FC3F7] hover:bg-[#F5F5F5] transition-all flex items-center gap-4"
            >
              <MessageCircle className="w-8 h-8" style={{ color: '#4FC3F7' }} />
              <div className="text-left">
                <h3 className="mb-1">Por WhatsApp</h3>
                <p className="text-sm text-gray-600">Agenda por mensaje</p>
              </div>
            </button>

            <button
              onClick={() => handleMethodSelection('web')}
              className="w-full p-6 rounded-xl border-2 hover:border-[#4FC3F7] hover:bg-[#F5F5F5] transition-all flex items-center gap-4"
            >
              <Globe className="w-8 h-8" style={{ color: '#4FC3F7' }} />
              <div className="text-left">
                <h3 className="mb-1">Por la Web</h3>
                <p className="text-sm text-gray-600">Completa el formulario online</p>
              </div>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div>
              <Label>Nombre Completo</Label>
              <Input
                value={`${currentUser?.name} ${currentUser?.lastName}`}
                disabled
                className="mt-2 bg-gray-100"
              />
            </div>

            <div>
              <Label>DNI</Label>
              <Input
                value={currentUser?.dni}
                disabled
                className="mt-2 bg-gray-100"
              />
            </div>

            <div>
              <Label htmlFor="date">Fecha</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
                className="mt-2"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <Label htmlFor="time">Hora</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="specialty">Especialidad</Label>
              <Select
                value={formData.specialty}
                onValueChange={(value) => setFormData({ ...formData, specialty: value, doctor: '' })}
                required
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Selecciona una especialidad" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="doctor">Doctor</Label>
              <Select
                value={formData.doctor}
                onValueChange={(value) => {
                  const selectedDoctor = filteredDoctors.find(d => d.id === value);
                  setFormData({ ...formData, doctor: selectedDoctor?.name || value });
                }}
                required
                disabled={!formData.specialty}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Selecciona un doctor" />
                </SelectTrigger>
                <SelectContent>
                  {filteredDoctors.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep('method')}
                className="flex-1"
              >
                Volver
              </Button>
              <Button
                type="submit"
                className="flex-1"
                style={{ backgroundColor: '#4FC3F7' }}
              >
                Registrar Cita
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
