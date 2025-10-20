import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Sparkles } from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string, password: string) => boolean;
  onNavigate: (page: string) => void;
}

export function LoginPage({ onLogin, onNavigate }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = onLogin(email, password);
    if (!success) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex justify-center mb-8">
            <Sparkles className="w-16 h-16" style={{ color: '#4FC3F7' }} />
          </div>
          <h1 className="text-center mb-8" style={{ color: '#4FC3F7' }}>
            Iniciar Sesión
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2"
              />
            </div>

            {error && (
              <p className="text-destructive">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full"
              style={{ backgroundColor: '#4FC3F7' }}
            >
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ¿No tienes cuenta?{' '}
              <button
                onClick={() => onNavigate('register')}
                className="hover:underline"
                style={{ color: '#4FC3F7' }}
              >
                Crear una nueva
              </button>
            </p>
          </div>
        </div>

        {/* Demo credentials info */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow text-center">
          <p className="text-sm text-gray-600 mb-2">
            <strong>Cuentas de prueba:</strong>
          </p>
          <p className="text-sm text-gray-600">
            Admin: admin@smile.com / admin123
          </p>
          <p className="text-sm text-gray-600">
            Usuario: user@example.com / user123
          </p>
        </div>
      </div>
    </div>
  );
}
