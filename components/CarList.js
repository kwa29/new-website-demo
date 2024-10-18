import { useState } from 'react'

const initialCars = [
  { id: 1, model: 'Ford Mustang' },
  { id: 2, model: 'Toyota Camry' },
  { id: 3, model: 'Ford F-150' },
  { id: 4, model: 'Honda Civic' },
  { id: 5, model: 'Ford Explorer' },
]

export default function CarList() {
  const [cars, setCars] = useState(initialCars)

  const deleteFordCars = () => {
    const updatedCars = cars.filter(car => !car.model.toLowerCase().includes('ford'))
    setCars(updatedCars)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Car List</h2>
      <button
        onClick={deleteFordCars}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Delete Ford Cars
      </button>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map(car => (
          <li key={car.id} className="bg-white rounded-lg shadow p-4">
            <p className="text-lg font-medium">{car.model}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}