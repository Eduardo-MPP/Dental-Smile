import { useState } from 'react';
import { Menu, X, Sparkles, User, LogOut, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface UserData {
  name: string;
  lastName: string;
  profileImage?: string;
  isAdmin: boolean;
}

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  onOpenAppointmentModal: () => void;
  isAdmin: boolean;
  currentUser?: UserData | null;
  onOpenProfile?: () => void;
}

export function Header({ 
  currentPage, 
  onNavigate, 
  isLoggedIn, 
  onLogout,
  onOpenAppointmentModal,
  isAdmin,
  currentUser,
  onOpenProfile
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getUserInitials = () => {
    if (!currentUser) return 'U';
    return `${currentUser.name.charAt(0)}${currentUser.lastName.charAt(0)}`.toUpperCase();
  };

  const menuItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Nosotros' },
    { id: 'services', label: 'Servicios' },
    { id: 'team', label: 'Equipo Médico' },
    { id: 'testimonials', label: 'Testimonios' },
  ];

  if (isLoggedIn) {
    menuItems.push({ id: 'appointments', label: 'Mis Citas' });
  }

  if (isAdmin) {
    menuItems.push({ id: 'admin', label: 'Panel Admin' });
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Sparkles className="w-8 h-8" style={{ color: '#4FC3F7' }} />
            <span className="text-2xl" style={{ color: '#4FC3F7' }}>Smile</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-[#4FC3F7]'
                    : 'text-gray-700 hover:text-[#4FC3F7]'
                }`}
              >
                {item.label}
              </button>
            ))}
            {!isLoggedIn ? (
              <button
                onClick={() => onNavigate('login')}
                className="text-gray-700 hover:text-[#4FC3F7] transition-colors"
              >
                Iniciar Sesión
              </button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Avatar className="w-8 h-8 border-2" style={{ borderColor: '#4FC3F7' }}>
                      <AvatarImage src={currentUser?.profileImage} alt={currentUser?.name} />
                      <AvatarFallback style={{ backgroundColor: '#A7F3D0', color: '#4FC3F7' }}>
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div>
                      <p className="font-medium">{currentUser?.name} {currentUser?.lastName}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {currentUser?.isAdmin ? 'Administrador' : 'Usuario'}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onOpenProfile}>
                    <User className="w-4 h-4 mr-2" />
                    Mi Perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate('appointments')}>
                    <Settings className="w-4 h-4 mr-2" />
                    Mis Citas
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>

          {/* Agendar Cita Button */}
          <div className="hidden md:block">
            <Button
              onClick={onOpenAppointmentModal}
              className="shadow-lg hover:shadow-xl transition-all"
              style={{ 
                backgroundColor: '#4FC3F7',
                opacity: isLoggedIn ? 1 : 0.6
              }}
            >
              Agendar Cita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {isLoggedIn && currentUser && (
                <div className="flex items-center gap-3 px-2 py-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                  <Avatar className="w-12 h-12 border-2" style={{ borderColor: '#4FC3F7' }}>
                    <AvatarImage src={currentUser.profileImage} alt={currentUser.name} />
                    <AvatarFallback style={{ backgroundColor: '#A7F3D0', color: '#4FC3F7' }}>
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{currentUser.name} {currentUser.lastName}</p>
                    <p className="text-xs text-gray-500">
                      {currentUser.isAdmin ? 'Administrador' : 'Usuario'}
                    </p>
                  </div>
                </div>
              )}
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-2 py-2 rounded-md transition-colors ${
                    currentPage === item.id
                      ? 'bg-[#A7F3D0] text-gray-900'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    onNavigate('login');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Iniciar Sesión
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      onOpenProfile?.();
                      setMobileMenuOpen(false);
                    }}
                    className="text-left px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    <User className="w-4 h-4 inline mr-2" />
                    Mi Perfil
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-left px-2 py-2 rounded-md text-red-600 hover:bg-gray-100"
                  >
                    <LogOut className="w-4 h-4 inline mr-2" />
                    Cerrar Sesión
                  </button>
                </>
              )}
              <Button
                onClick={() => {
                  onOpenAppointmentModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full shadow-lg"
                style={{ 
                  backgroundColor: '#4FC3F7',
                  opacity: isLoggedIn ? 1 : 0.6
                }}
              >
                Agendar Cita
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
