import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Calendar, Clock, Trash2 } from 'lucide-react';

interface Appointment {
  id: string;
  date: string;
  time: string;
  specialty: string;
  doctor: string;
  status: 'upcoming' | 'past';
}

interface MyAppointmentsProps {
  appointments: Appointment[];
  onDeleteAppointment: (id: string) => void;
}

export function MyAppointments({ appointments, onDeleteAppointment }: MyAppointmentsProps) {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingAppointments = appointments.filter(a => a.status === 'upcoming');
  const pastAppointments = appointments.filter(a => a.status === 'past');

  const AppointmentCard = ({ appointment }: { appointment: Appointment }) => (
    <div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      style={{ border: '2px solid #A7F3D0' }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="mb-2" style={{ color: '#4FC3F7' }}>
            {appointment.specialty}
          </h3>
          <p className="text-gray-600 mb-1">
            Doctor: {appointment.doctor}
          </p>
        </div>
        {appointment.status === 'upcoming' && (
          <Button
            variant="destructive"
            size="icon"
            onClick={() => onDeleteAppointment(appointment.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      <div className="flex gap-4 text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" style={{ color: '#4FC3F7' }} />
          <span>{appointment.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" style={{ color: '#4FC3F7' }} />
          <span>{appointment.time}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-24 px-4" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center mb-12" style={{ color: '#4FC3F7' }}>
          Mis Citas
        </h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">Citas Actuales</TabsTrigger>
            <TabsTrigger value="past">Citas Pasadas</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {upcomingAppointments.length > 0 ? (
              <div className="grid gap-6">
                {upcomingAppointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl shadow">
                <p className="text-gray-500">No tienes citas próximas</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            {pastAppointments.length > 0 ? (
              <div className="grid gap-6">
                {pastAppointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl shadow">
                <p className="text-gray-500">No tienes citas pasadas</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
