import React from 'react';

interface Car {
  id: number;
  name: string;
  brand: string;
  origin: 'European' | 'Japanese' | 'American';
}

const cars: Car[] = [
  { id: 1, name: 'Golf', brand: 'Volkswagen', origin: 'European' },
  { id: 2, name: 'Civic', brand: 'Honda', origin: 'Japanese' },
  { id: 3, name: 'Mustang', brand: 'Ford', origin: 'American' },
  { id: 4, name: 'A3', brand: 'Audi', origin: 'European' },
  { id: 5, name: 'Corolla', brand: 'Toyota', origin: 'Japanese' },
  { id: 6, name: 'Camaro', brand: 'Chevrolet', origin: 'American' },
  { id: 7, name: 'C-Class', brand: 'Mercedes-Benz', origin: 'European' },
  { id: 8, name: 'Accord', brand: 'Honda', origin: 'Japanese' },
  { id: 9, name: 'F-150', brand: 'Ford', origin: 'American' },
  { id: 10, name: '3 Series', brand: 'BMW', origin: 'European' },
  { id: 11, name: 'Altima', brand: 'Nissan', origin: 'Japanese' },
  { id: 12, name: 'Silverado', brand: 'Chevrolet', origin: 'American' },
  { id: 13, name: 'A4', brand: 'Audi', origin: 'European' },
  { id: 14, name: 'Camry', brand: 'Toyota', origin: 'Japanese' },
  { id: 15, name: 'Challenger', brand: 'Dodge', origin: 'American' },
  { id: 16, name: 'X5', brand: 'BMW', origin: 'European' },
  { id: 17, name: 'Mazda3', brand: 'Mazda', origin: 'Japanese' },
  { id: 18, name: 'Malibu', brand: 'Chevrolet', origin: 'American' },
  { id: 19, name: 'E-Class', brand: 'Mercedes-Benz', origin: 'European' },
  { id: 20, name: 'Impreza', brand: 'Subaru', origin: 'Japanese' },
];

const CarList: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Car List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold">{car.name}</h3>
            <p className="text-gray-600">{car.brand}</p>
            <p className="text-sm text-gray-500">{car.origin}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;