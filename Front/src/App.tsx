import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { MedicalTeam } from './components/MedicalTeam';
import { Testimonials } from './components/Testimonials';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { MyAppointments } from './components/MyAppointments';
import { AppointmentModal } from './components/AppointmentModal';
import { TestimonialModal } from './components/TestimonialModal';
import { AdminDashboard } from './components/AdminDashboard';
import { UserProfile } from './components/UserProfile';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

interface User {
  id: string;
  name: string;
  lastName: string;
  dni: string;
  email: string;
  password: string;
  isAdmin: boolean;
  profileImage?: string;
  phone?: string;
  address?: string;
}

interface Appointment {
  id: string;
  userId: string;
  date: string;
  time: string;
  specialty: string;
  doctor: string;
  status: 'upcoming' | 'past';
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
}

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  approved: boolean;
}

const INITIAL_DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dra. María González',
    specialty: 'Ortodoncia',
    description: 'Especialista en ortodoncia con 12 años de experiencia. Certificada por la Asociación Americana de Ortodoncistas.',
    image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZW50aXN0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDcxMDIxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '2',
    name: 'Dr. Carlos Rodríguez',
    specialty: 'Implantología',
    description: '15 años de experiencia en implantes dentales. Formación internacional en cirugía maxilofacial.',
    image: 'https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGVudGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjA3NDY1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '3',
    name: 'Dra. Ana Martínez',
    specialty: 'Estética Dental',
    description: 'Especialista en blanqueamiento y carillas. 10 años transformando sonrisas con técnicas avanzadas.',
    image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZW50aXN0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDcxMDIxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '4',
    name: 'Dr. Luis Pérez',
    specialty: 'Odontología General',
    description: 'Odontólogo general con enfoque en odontología preventiva. 8 años de experiencia clínica.',
    image: 'https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGVudGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjA3NDY1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '5',
    name: 'Dra. Patricia Silva',
    specialty: 'Endodoncia',
    description: 'Experta en tratamientos de conducto con técnicas mínimamente invasivas. 9 años de experiencia.',
    image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZW50aXN0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDcxMDIxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '6',
    name: 'Dr. Roberto Fernández',
    specialty: 'Periodoncia',
    description: 'Especialista en salud de encías y tratamientos periodontales. 11 años cuidando la base de tu sonrisa.',
    image: 'https://images.unsplash.com/photo-1685022036245-380a447e03bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGVudGlzdCUyMGRvY3RvcnxlbnwxfHx8fDE3NjA3NzIyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const INITIAL_SERVICES: Service[] = [
  {
    id: '1',
    name: 'Limpieza Dental',
    description: 'Limpieza profunda profesional para mantener tus dientes saludables y prevenir enfermedades periodontales.',
    icon: 'sparkles',
  },
  {
    id: '2',
    name: 'Ortodoncia',
    description: 'Corrección de la posición de los dientes con brackets tradicionales o invisibles para una sonrisa perfecta.',
    icon: 'smile',
  },
  {
    id: '3',
    name: 'Blanqueamiento',
    description: 'Tratamiento de blanqueamiento dental profesional para una sonrisa más brillante y blanca.',
    icon: 'sparkles',
  },
  {
    id: '4',
    name: 'Implantes',
    description: 'Reemplazo de dientes perdidos con implantes de titanio de última generación.',
    icon: 'shield',
  },
  {
    id: '5',
    name: 'Endodoncia',
    description: 'Tratamiento de conductos radiculares para salvar dientes dañados o infectados.',
    icon: 'shield',
  },
  {
    id: '6',
    name: 'Cirugía Maxilofacial',
    description: 'Procedimientos quirúrgicos especializados para correcciones faciales y dentales complejas.',
    icon: 'scissors',
  },
];

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Laura Sánchez',
    rating: 5,
    comment: 'Excelente atención y profesionalismo. El equipo de Smile transformó mi sonrisa completamente. ¡Altamente recomendados!',
    approved: true,
  },
  {
    id: '2',
    name: 'Pedro Jiménez',
    rating: 5,
    comment: 'La mejor clínica dental de la ciudad. Instalaciones modernas, doctores muy capacitados y un trato excepcional.',
    approved: true,
  },
  {
    id: '3',
    name: 'Carmen López',
    rating: 5,
    comment: 'Tenía mucho miedo al dentista, pero el equipo de Smile me hizo sentir muy cómoda. Resultados increíbles en mi tratamiento de ortodoncia.',
    approved: true,
  },
  {
    id: '4',
    name: 'Miguel Torres',
    rating: 5,
    comment: 'Me realizaron un implante dental y quedé muy satisfecho. El proceso fue rápido, sin dolor y el resultado es perfecto.',
    approved: true,
  },
  {
    id: '5',
    name: 'Sofía Ramírez',
    rating: 5,
    comment: 'El blanqueamiento dental que me hicieron superó mis expectativas. Mi sonrisa ahora es radiante. ¡Gracias Smile!',
    approved: true,
  },
];

const INITIAL_USERS: User[] = [
  {
    id: 'admin',
    name: 'Admin',
    lastName: 'Sistema',
    dni: '00000000',
    email: 'admin@smile.com',
    password: 'admin123',
    isAdmin: true,
  },
  {
    id: 'user1',
    name: 'Juan',
    lastName: 'Pérez',
    dni: '12345678',
    email: 'user@example.com',
    password: 'user123',
    isAdmin: false,
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [testimonialModalOpen, setTestimonialModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedUsers = localStorage.getItem('smile_users');
    const savedAppointments = localStorage.getItem('smile_appointments');
    const savedDoctors = localStorage.getItem('smile_doctors');
    const savedServices = localStorage.getItem('smile_services');
    const savedTestimonials = localStorage.getItem('smile_testimonials');
    const savedCurrentUser = localStorage.getItem('smile_currentUser');

    setUsers(savedUsers ? JSON.parse(savedUsers) : INITIAL_USERS);
    setAppointments(savedAppointments ? JSON.parse(savedAppointments) : []);
    setDoctors(savedDoctors ? JSON.parse(savedDoctors) : INITIAL_DOCTORS);
    setServices(savedServices ? JSON.parse(savedServices) : INITIAL_SERVICES);
    setTestimonials(savedTestimonials ? JSON.parse(savedTestimonials) : INITIAL_TESTIMONIALS);
    
    if (savedCurrentUser) {
      setCurrentUser(JSON.parse(savedCurrentUser));
    }
  }, []);

  // Save to localStorage when data changes
  useEffect(() => {
    localStorage.setItem('smile_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('smile_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('smile_doctors', JSON.stringify(doctors));
  }, [doctors]);

  useEffect(() => {
    localStorage.setItem('smile_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('smile_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('smile_currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('smile_currentUser');
    }
  }, [currentUser]);

  const handleLogin = (email: string, password: string): boolean => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      setCurrentPage('home');
      toast.success(`¡Bienvenido, ${user.name}!`);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('home');
    toast.info('Sesión cerrada');
  };

  const handleRegister = (userData: Omit<User, 'id' | 'isAdmin'>): boolean => {
    const existingUser = users.find(u => u.email === userData.email);
    if (existingUser) {
      return false;
    }

    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      isAdmin: false,
    };

    setUsers([...users, newUser]);
    toast.success('¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.');
    return true;
  };

  const handleCreateAppointment = (appointmentData: {
    date: string;
    time: string;
    specialty: string;
    doctor: string;
  }) => {
    if (!currentUser) return;

    const newAppointment: Appointment = {
      id: Date.now().toString(),
      userId: currentUser.id,
      ...appointmentData,
      status: 'upcoming',
    };

    setAppointments([...appointments, newAppointment]);
    toast.success('¡Cita agendada exitosamente!');
    setCurrentPage('appointments');
  };

  const handleDeleteAppointment = (id: string) => {
    setAppointments(appointments.filter(a => a.id !== id));
    toast.info('Cita cancelada');
  };

  const handleCreateTestimonial = (rating: number, comment: string) => {
    if (!currentUser) return;

    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: `${currentUser.name} ${currentUser.lastName}`,
      rating,
      comment,
      approved: false,
    };

    setTestimonials([...testimonials, newTestimonial]);
    toast.success('¡Testimonio enviado! Será revisado por nuestro equipo.');
  };

  const handleOpenAppointmentModal = () => {
    if (!currentUser) {
      toast.error('Debes iniciar sesión para agendar una cita');
      setCurrentPage('login');
      return;
    }
    setAppointmentModalOpen(true);
  };

  const handleUpdateUser = (updatedUser: User) => {
    const updatedUsers = users.map(u => u.id === updatedUser.id ? updatedUser : u);
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
  };

  const userAppointments = currentUser
    ? appointments.filter(a => a.userId === currentUser.id)
    : [];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onOpenAppointmentModal={handleOpenAppointmentModal}
            onNavigate={setCurrentPage}
          />
        );
      case 'about':
        return (
          <AboutUs
            onNavigate={setCurrentPage}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        );
      case 'services':
        return <Services services={services} />;
      case 'team':
        return <MedicalTeam doctors={doctors} />;
      case 'testimonials':
        return (
          <Testimonials
            testimonials={testimonials}
            isLoggedIn={!!currentUser}
            onOpenTestimonialModal={() => setTestimonialModalOpen(true)}
          />
        );
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'register':
        return <RegisterPage onRegister={handleRegister} onNavigate={setCurrentPage} />;
      case 'appointments':
        return currentUser ? (
          <MyAppointments
            appointments={userAppointments}
            onDeleteAppointment={handleDeleteAppointment}
          />
        ) : (
          <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />
        );
      case 'admin':
        return currentUser?.isAdmin ? (
          <AdminDashboard
            doctors={doctors}
            services={services}
            testimonials={testimonials}
            onUpdateDoctors={setDoctors}
            onUpdateServices={setServices}
            onUpdateTestimonials={setTestimonials}
          />
        ) : (
          <HomePage
            onOpenAppointmentModal={handleOpenAppointmentModal}
            onNavigate={setCurrentPage}
          />
        );
      default:
        return (
          <HomePage
            onOpenAppointmentModal={handleOpenAppointmentModal}
            onNavigate={setCurrentPage}
          />
        );
    }
  };

  const showFooter = !['login', 'register', 'appointments', 'profile', 'admin'].includes(currentPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isLoggedIn={!!currentUser}
        onLogout={handleLogout}
        onOpenAppointmentModal={handleOpenAppointmentModal}
        isAdmin={currentUser?.isAdmin || false}
        currentUser={currentUser ? {
          name: currentUser.name,
          lastName: currentUser.lastName,
          profileImage: currentUser.profileImage,
          isAdmin: currentUser.isAdmin
        } : null}
        onOpenProfile={() => setProfileModalOpen(true)}
      />

      <main className="pt-16 flex-1">
        {renderPage()}
      </main>

      {showFooter && (
        <Footer
          onNavigate={setCurrentPage}
          onOpenAppointmentModal={handleOpenAppointmentModal}
        />
      )}

      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        isLoggedIn={!!currentUser}
        onNavigate={setCurrentPage}
        currentUser={currentUser ? {
          name: currentUser.name,
          lastName: currentUser.lastName,
          dni: currentUser.dni,
        } : null}
        doctors={doctors}
        onCreateAppointment={handleCreateAppointment}
      />

      <TestimonialModal
        isOpen={testimonialModalOpen}
        onClose={() => setTestimonialModalOpen(false)}
        onSubmit={handleCreateTestimonial}
        userName={currentUser ? `${currentUser.name} ${currentUser.lastName}` : ''}
      />

      {currentUser && (
        <UserProfile
          isOpen={profileModalOpen}
          onClose={() => setProfileModalOpen(false)}
          user={currentUser}
          onUpdateUser={handleUpdateUser}
        />
      )}

      <Toaster />
    </div>
  );
}
