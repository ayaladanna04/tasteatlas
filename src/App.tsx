import './App.css'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'

import { type Dish } from './interface/Dish'

function App() {
  const url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"
  
  // Variable de estado y función de modificación
  const [dishes, setDishes] = useState<Dish[]>([])

  // Petición asíncrona con useEffect
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch(url)
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`)
        }
        
        const data: Dish[] = await response.json()
        setDishes(data)
      } catch (error) {
        console.error('Error al cargar los datos:', error)
      }
    }

    fetchDishes()
  }, [])

  return (
    <Grid container spacing={5}>
      {/* Student */}
      <Grid size={{ xs: 12 }}>
        {/* Enviar datos personales como props - REEMPLAZA CON TUS DATOS */}
        <Student 
          apellidos="Ayala Hurtado" 
          nombres="Danna Antonella" 
          paralelo= "A"
        />
      </Grid>
      
      {/* DishTable */}
      <Grid size={{ xs: 12 }}>
        {/* Enviar variable de estado como prop */}
        <DishTable data={dishes} />
      </Grid>
    </Grid>
  )
}
    

export default App
