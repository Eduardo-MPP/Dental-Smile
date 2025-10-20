import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Camera, User } from 'lucide-react';
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

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  onUpdateUser: (user: User) => void;
}

export function UserProfile({ isOpen, onClose, user, onUpdateUser }: UserProfileProps) {
  const [editedUser, setEditedUser] = useState(user);
  const [imagePreview, setImagePreview] = useState(user.profileImage || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setEditedUser({ ...editedUser, profileImage: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onUpdateUser(editedUser);
    toast.success('Perfil actualizado exitosamente');
    onClose();
  };

  const getUserInitials = () => {
    return `${user.name.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl" style={{ color: '#4FC3F7' }}>
            Mi Perfil
          </DialogTitle>
          <DialogDescription>
            Actualiza tu información personal y foto de perfil
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4" style={{ borderColor: '#4FC3F7' }}>
                <AvatarImage src={imagePreview} alt={user.name} />
                <AvatarFallback className="text-3xl" style={{ backgroundColor: '#A7F3D0', color: '#4FC3F7' }}>
                  {getUserInitials()}
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute bottom-0 right-0 rounded-full shadow-lg"
                style={{ backgroundColor: '#4FC3F7' }}
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <p className="text-sm text-gray-500">
              Haz clic en el icono de cámara para cambiar tu foto
            </p>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Nombre</Label>
              <Input
                value={editedUser.name}
                onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Apellido</Label>
              <Input
                value={editedUser.lastName}
                onChange={(e) => setEditedUser({ ...editedUser, lastName: e.target.value })}
                className="mt-2"
              />
            </div>
            <div>
              <Label>DNI/Cédula</Label>
              <Input
                value={editedUser.dni}
                onChange={(e) => setEditedUser({ ...editedUser, dni: e.target.value })}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={editedUser.email}
                onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Teléfono</Label>
              <Input
                type="tel"
                value={editedUser.phone || ''}
                onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                placeholder="Ej: +1 234 567 8900"
                className="mt-2"
              />
            </div>
            <div>
              <Label>Dirección</Label>
              <Input
                value={editedUser.address || ''}
                onChange={(e) => setEditedUser({ ...editedUser, address: e.target.value })}
                placeholder="Tu dirección"
                className="mt-2"
              />
            </div>
          </div>

          {/* Account Information */}
          <div className="pt-4 border-t">
            <h3 className="mb-4" style={{ color: '#4FC3F7' }}>
              Información de Cuenta
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                <p className="text-sm text-gray-600 mb-1">Tipo de Cuenta</p>
                <p className="font-medium">
                  {user.isAdmin ? '👑 Administrador' : '👤 Usuario'}
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                <p className="text-sm text-gray-600 mb-1">ID de Usuario</p>
                <p className="font-mono text-sm">{user.id}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleSave}
              className="flex-1"
              style={{ backgroundColor: '#4FC3F7' }}
            >
              Guardar Cambios
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
