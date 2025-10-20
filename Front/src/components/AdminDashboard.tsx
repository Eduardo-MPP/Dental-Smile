import { useState, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Star, Trash2, Plus, Check, X, Edit, Upload, Image as ImageIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

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

interface AdminDashboardProps {
  doctors: Doctor[];
  services: Service[];
  testimonials: Testimonial[];
  onUpdateDoctors: (doctors: Doctor[]) => void;
  onUpdateServices: (services: Service[]) => void;
  onUpdateTestimonials: (testimonials: Testimonial[]) => void;
}

export function AdminDashboard({
  doctors,
  services,
  testimonials,
  onUpdateDoctors,
  onUpdateServices,
  onUpdateTestimonials,
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('doctors');
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [doctorModalOpen, setDoctorModalOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const doctorImageInputRef = useRef<HTMLInputElement>(null);
  const serviceImageInputRef = useRef<HTMLInputElement>(null);

  const pendingTestimonials = testimonials.filter(t => !t.approved);

  const handleDoctorImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingDoctor) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingDoctor({ ...editingDoctor, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleServiceImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingService) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingService({ ...editingService, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddDoctor = () => {
    const newDoctor: Doctor = {
      id: Date.now().toString(),
      name: '',
      specialty: '',
      description: '',
      image: 'https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd',
    };
    setEditingDoctor(newDoctor);
    setDoctorModalOpen(true);
  };

  const handleEditDoctor = (doctor: Doctor) => {
    setEditingDoctor({ ...doctor });
    setDoctorModalOpen(true);
  };

  const handleSaveDoctor = () => {
    if (!editingDoctor) return;
    
    const exists = doctors.find(d => d.id === editingDoctor.id);
    if (exists) {
      const updatedDoctors = doctors.map(d => d.id === editingDoctor.id ? editingDoctor : d);
      onUpdateDoctors(updatedDoctors);
    } else {
      onUpdateDoctors([...doctors, editingDoctor]);
    }
    setDoctorModalOpen(false);
    setEditingDoctor(null);
  };

  const handleCancelDoctor = () => {
    setDoctorModalOpen(false);
    setEditingDoctor(null);
  };

  const handleDeleteDoctor = (id: string) => {
    onUpdateDoctors(doctors.filter(d => d.id !== id));
  };

  const handleAddService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      name: '',
      description: '',
      icon: 'sparkles',
    };
    setEditingService(newService);
    setServiceModalOpen(true);
  };

  const handleEditService = (service: Service) => {
    setEditingService({ ...service });
    setServiceModalOpen(true);
  };

  const handleSaveService = () => {
    if (!editingService) return;
    
    const exists = services.find(s => s.id === editingService.id);
    if (exists) {
      const updatedServices = services.map(s => s.id === editingService.id ? editingService : s);
      onUpdateServices(updatedServices);
    } else {
      onUpdateServices([...services, editingService]);
    }
    setServiceModalOpen(false);
    setEditingService(null);
  };

  const handleCancelService = () => {
    setServiceModalOpen(false);
    setEditingService(null);
  };

  const handleDeleteService = (id: string) => {
    onUpdateServices(services.filter(s => s.id !== id));
  };

  const handleApproveTestimonial = (id: string) => {
    const updatedTestimonials = testimonials.map(t =>
      t.id === id ? { ...t, approved: true } : t
    );
    onUpdateTestimonials(updatedTestimonials);
  };

  const handleDeleteTestimonial = (id: string) => {
    onUpdateTestimonials(testimonials.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen py-24 px-4" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center mb-12" style={{ color: '#4FC3F7' }}>
          Panel Administrativo
        </h1>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="doctors">
              Doctores
              <Badge className="ml-2" variant="secondary">{doctors.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="services">
              Servicios
              <Badge className="ml-2" variant="secondary">{services.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="testimonials">
              Testimonios
              {pendingTestimonials.length > 0 && (
                <Badge className="ml-2" style={{ backgroundColor: '#4FC3F7' }}>
                  {pendingTestimonials.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Doctors Tab */}
          <TabsContent value="doctors" className="space-y-6">
            <div className="flex justify-end">
              <Button onClick={handleAddDoctor} style={{ backgroundColor: '#4FC3F7' }}>
                <Plus className="w-4 h-4 mr-2" />
                Agregar Doctor
              </Button>
            </div>

            <div className="grid gap-6">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex gap-4 items-start">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border-2" style={{ borderColor: '#A7F3D0' }}>
                      <ImageWithFallback
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2" style={{ color: '#4FC3F7' }}>{doctor.name}</h3>
                      <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                      <p className="text-gray-500">{doctor.description}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleEditDoctor(doctor)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDeleteDoctor(doctor.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-end">
              <Button onClick={handleAddService} style={{ backgroundColor: '#4FC3F7' }}>
                <Plus className="w-4 h-4 mr-2" />
                Agregar Servicio
              </Button>
            </div>

            <div className="grid gap-6">
              {services.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex gap-4 items-start">
                    {service.image && (
                      <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0 border-2" style={{ borderColor: '#A7F3D0' }}>
                        <ImageWithFallback
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="mb-2" style={{ color: '#4FC3F7' }}>{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleEditService(service)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDeleteService(service.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-6">
            {pendingTestimonials.length > 0 && (
              <div>
                <h3 className="mb-4" style={{ color: '#4FC3F7' }}>
                  Pendientes de Aprobación
                </h3>
                <div className="grid gap-6 mb-8">
                  {pendingTestimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white p-6 rounded-xl shadow-lg"
                      style={{ border: '2px solid #4FC3F7' }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="mb-2" style={{ color: '#4FC3F7' }}>{testimonial.name}</p>
                          <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < testimonial.rating
                                    ? 'fill-[#4FC3F7] text-[#4FC3F7]'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="icon"
                            onClick={() => handleApproveTestimonial(testimonial.id)}
                            style={{ backgroundColor: '#A7F3D0', color: '#030213' }}
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="destructive"
                            onClick={() => handleDeleteTestimonial(testimonial.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="mb-4" style={{ color: '#4FC3F7' }}>
                Testimonios Aprobados
              </h3>
              <div className="grid gap-6">
                {testimonials.filter(t => t.approved).map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="mb-2" style={{ color: '#4FC3F7' }}>{testimonial.name}</p>
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating
                                  ? 'fill-[#4FC3F7] text-[#4FC3F7]'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                      </div>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDeleteTestimonial(testimonial.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Doctor Modal */}
        <Dialog open={doctorModalOpen} onOpenChange={setDoctorModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle style={{ color: '#4FC3F7' }}>
                {editingDoctor && doctors.find(d => d.id === editingDoctor.id) ? 'Editar Doctor' : 'Agregar Doctor'}
              </DialogTitle>
              <DialogDescription>
                Completa la información del doctor
              </DialogDescription>
            </DialogHeader>
            
            {editingDoctor && (
              <div className="space-y-4 py-4">
                {/* Image Preview and Upload */}
                <div className="flex flex-col items-center gap-4 p-4 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                  <div className="w-40 h-40 rounded-lg overflow-hidden border-2" style={{ borderColor: '#4FC3F7' }}>
                    <ImageWithFallback
                      src={editingDoctor.image}
                      alt={editingDoctor.name || 'Doctor'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => doctorImageInputRef.current?.click()}
                    className="w-full"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Subir Imagen
                  </Button>
                  <input
                    ref={doctorImageInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleDoctorImageChange}
                  />
                  <p className="text-xs text-gray-500 text-center">
                    O pega una URL de imagen:
                  </p>
                  <Input
                    value={editingDoctor.image}
                    onChange={(e) => setEditingDoctor({ ...editingDoctor, image: e.target.value })}
                    placeholder="https://ejemplo.com/imagen.jpg"
                  />
                </div>
                
                <div>
                  <Label>Nombre *</Label>
                  <Input
                    value={editingDoctor.name}
                    onChange={(e) => setEditingDoctor({ ...editingDoctor, name: e.target.value })}
                    placeholder="Ej: Dr. Juan Pérez"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Especialidad *</Label>
                  <Input
                    value={editingDoctor.specialty}
                    onChange={(e) => setEditingDoctor({ ...editingDoctor, specialty: e.target.value })}
                    placeholder="Ej: Ortodoncia"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Descripción *</Label>
                  <Textarea
                    value={editingDoctor.description}
                    onChange={(e) => setEditingDoctor({ ...editingDoctor, description: e.target.value })}
                    placeholder="Describe la experiencia y logros del doctor..."
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button 
                    onClick={handleSaveDoctor} 
                    className="flex-1"
                    style={{ backgroundColor: '#4FC3F7' }}
                    disabled={!editingDoctor.name || !editingDoctor.specialty || !editingDoctor.description}
                  >
                    Guardar
                  </Button>
                  <Button variant="outline" onClick={handleCancelDoctor} className="flex-1">
                    Cancelar
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Service Modal */}
        <Dialog open={serviceModalOpen} onOpenChange={setServiceModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle style={{ color: '#4FC3F7' }}>
                {editingService && services.find(s => s.id === editingService.id) ? 'Editar Servicio' : 'Agregar Servicio'}
              </DialogTitle>
              <DialogDescription>
                Completa la información del servicio
              </DialogDescription>
            </DialogHeader>
            
            {editingService && (
              <div className="space-y-4 py-4">
                {/* Image Preview and Upload (Optional) */}
                {editingService.image ? (
                  <div className="flex flex-col items-center gap-4 p-4 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                    <div className="w-full h-48 rounded-lg overflow-hidden border-2" style={{ borderColor: '#4FC3F7' }}>
                      <ImageWithFallback
                        src={editingService.image}
                        alt={editingService.name || 'Servicio'}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => serviceImageInputRef.current?.click()}
                        className="flex-1"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Cambiar Imagen
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setEditingService({ ...editingService, image: undefined })}
                        className="flex-1"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Quitar Imagen
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      O pega una URL de imagen:
                    </p>
                    <Input
                      value={editingService.image}
                      onChange={(e) => setEditingService({ ...editingService, image: e.target.value })}
                      placeholder="https://ejemplo.com/imagen.jpg"
                    />
                  </div>
                ) : (
                  <div className="p-6 rounded-lg border-2 border-dashed text-center" style={{ borderColor: '#A7F3D0' }}>
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-3">Agregar imagen al servicio (opcional)</p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => serviceImageInputRef.current?.click()}
                      size="sm"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Subir Imagen
                    </Button>
                  </div>
                )}
                <input
                  ref={serviceImageInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleServiceImageChange}
                />
                
                <div>
                  <Label>Nombre del Servicio *</Label>
                  <Input
                    value={editingService.name}
                    onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
                    placeholder="Ej: Limpieza Dental"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Descripción *</Label>
                  <Textarea
                    value={editingService.description}
                    onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                    placeholder="Describe el servicio en detalle..."
                    className="mt-2"
                    rows={4}
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button 
                    onClick={handleSaveService} 
                    className="flex-1"
                    style={{ backgroundColor: '#4FC3F7' }}
                    disabled={!editingService.name || !editingService.description}
                  >
                    Guardar
                  </Button>
                  <Button variant="outline" onClick={handleCancelService} className="flex-1">
                    Cancelar
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
