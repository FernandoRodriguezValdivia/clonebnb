import { Router } from 'express';

export const stayRouter = Router();

const stays = [
  {
    título: 'Villa con Vista al Océano',
    descripción: 'Villa lujosa con impresionantes vistas al océano',
    imagen: [
      'https://picsum.photos/id/1/300/300',
      'https://picsum.photos/id/2/300/300',
      'https://picsum.photos/id/3/300/300',
    ],
    precio: 500,
    capacidad: 8,
    id: 1,
  },
  {
    título: 'Cabaña Acogedora',
    descripción: 'Encantadora cabaña enclavada en el bosque',
    imagen: [
      'https://picsum.photos/id/4/300/300',
      'https://picsum.photos/id/5/300/300',
      'https://picsum.photos/id/6/300/300',
    ],
    precio: 200,
    capacidad: 4,
    id: 2,
  },
  {
    título: 'Bungalow Frente a la Playa',
    descripción: 'Bungalow pintoresco a solo pasos de la playa',
    imagen: [
      'https://picsum.photos/id/7/300/300',
      'https://picsum.photos/id/8/300/300',
      'https://picsum.photos/id/9/300/300',
    ],
    precio: 300,
    capacidad: 6,
    id: 3,
  },
  {
    título: 'Retiro en la Montaña',
    descripción: 'Retiro aislado en el corazón de las montañas',
    imagen: [
      'https://picsum.photos/id/10/300/300',
      'https://picsum.photos/id/11/300/300',
      'https://picsum.photos/id/12/300/300',
    ],
    precio: 400,
    capacidad: 10,
    id: 4,
  },
  {
    título: 'Loft en la Ciudad',
    descripción: 'Loft moderno en el centro de la ciudad',
    imagen: [
      'https://picsum.photos/id/13/300/300',
      'https://picsum.photos/id/14/300/300',
      'https://picsum.photos/id/15/300/300',
    ],
    precio: 250,
    capacidad: 2,
    id: 5,
  },
  {
    título: 'Casa de Campo Rústica',
    descripción: 'Casa de campo auténtica con un encanto rústico',
    imagen: [
      'https://picsum.photos/id/16/300/300',
      'https://picsum.photos/id/17/300/300',
      'https://picsum.photos/id/18/300/300',
    ],
    precio: 350,
    capacidad: 12,
    id: 6,
  },
  {
    título: 'Cabaña Frente al Lago',
    descripción: 'Cabaña pintoresca con hermosas vistas al lago',
    imagen: [
      'https://picsum.photos/id/19/300/300',
      'https://picsum.photos/id/20/300/300',
      'https://picsum.photos/id/21/300/300',
    ],
    precio: 275,
    capacidad: 4,
    id: 7,
  },
  {
    título: 'Chalet de Esquí',
    descripción: 'Chalet acogedor perfecto para escapadas invernales',
    imagen: [
      'https://picsum.photos/id/22/300/300',
      'https://picsum.photos/id/23/300/300',
      'https://picsum.photos/id/24/300/300',
    ],
    precio: 450,
    capacidad: 8,
    id: 8,
  },
  {
    título: 'Paraíso Tropical',
    descripción: 'Villa exótica rodeada de exuberantes jardines tropicales',
    imagen: [
      'https://picsum.photos/id/25/300/300',
      'https://picsum.photos/id/26/300/300',
      'https://picsum.photos/id/27/300/300',
    ],
    precio: 600,
    capacidad: 10,
    id: 9,
  },
  {
    título: 'Mansión Histórica',
    descripción: 'Mansión elegante con un pasado histórico rico',
    imagen: [
      'https://picsum.photos/id/28/300/300',
      'https://picsum.photos/id/29/300/300',
      'https://picsum.photos/id/30/300/300',
    ],
    precio: 800,
    capacidad: 16,
    id: 10,
  },
  {
    título: 'Oasis en el Desierto',
    descripción: 'Serenidad y relajación en el desierto',
    imagen: [
      'https://picsum.photos/id/31/300/300',
      'https://picsum.photos/id/32/300/300',
      'https://picsum.photos/id/33/300/300',
    ],
    precio: 350,
    capacidad: 6,
    id: 11,
  },
  {
    título: 'Refugio en la Isla',
    descripción: 'Refugio privado en una isla para la escapada definitiva',
    imagen: [
      'https://picsum.photos/id/34/300/300',
      'https://picsum.photos/id/35/300/300',
      'https://picsum.photos/id/36/300/300',
    ],
    precio: 1000,
    capacidad: 20,
    id: 12,
  },
  {
    título: 'Tienda Safari',
    descripción: 'Experimenta la naturaleza en una lujosa tienda safari',
    imagen: [
      'https://picsum.photos/id/37/300/300',
      'https://picsum.photos/id/38/300/300',
      'https://picsum.photos/id/39/300/300',
    ],
    precio: 300,
    capacidad: 4,
    id: 13,
  },
  {
    título: 'Castillo en la Colina',
    descripción: 'Siéntete como la realeza en este majestuoso castillo',
    imagen: [
      'https://picsum.photos/id/40/300/300',
      'https://picsum.photos/id/41/300/300',
      'https://picsum.photos/id/42/300/300',
    ],
    precio: 1200,
    capacidad: 30,
    id: 14,
  },
  {
    título: 'Villa Frente al Mar',
    descripción: 'Villa elegante con vistas al mar brillante',
    imagen: [
      'https://picsum.photos/id/43/300/300',
      'https://picsum.photos/id/44/300/300',
      'https://picsum.photos/id/45/300/300',
    ],
    precio: 700,
    capacidad: 12,
    id: 15,
  },
  {
    título: 'Refugio en la Casa del Árbol',
    descripción: 'Casa del árbol única para una estancia sin igual',
    imagen: [
      'https://picsum.photos/id/46/300/300',
      'https://picsum.photos/id/47/300/300',
      'https://picsum.photos/id/48/300/300',
    ],
    precio: 250,
    capacidad: 2,
    id: 16,
  },
  {
    título: 'Yate de Lujo',
    descripción: 'Navega por aguas abiertas con estilo en un yate privado',
    imagen: [
      'https://picsum.photos/id/49/300/300',
      'https://picsum.photos/id/50/300/300',
      'https://picsum.photos/id/51/300/300',
    ],
    precio: 1500,
    capacidad: 10,
    id: 17,
  },
  {
    título: 'Cabaña en el Campo',
    descripción: 'Cabaña encantadora en un apacible entorno rural',
    imagen: [
      'https://picsum.photos/id/52/300/300',
      'https://picsum.photos/id/53/300/300',
      'https://picsum.photos/id/54/300/300',
    ],
    precio: 275,
    capacidad: 6,
    id: 18,
  },
  {
    título: 'Apartamento Histórico',
    descripción:
      'Apartamento elegante en un edificio histórico bellamente restaurado',
    imagen: [
      'https://picsum.photos/id/55/300/300',
      'https://picsum.photos/id/56/300/300',
      'https://picsum.photos/id/57/300/300',
    ],
    precio: 400,
    capacidad: 4,
    id: 19,
  },
  {
    título: 'Cabaña en la Montaña',
    descripción: 'Cabaña acogedora con impresionantes vistas a la montaña',
    imagen: [
      'https://picsum.photos/id/58/300/300',
      'https://picsum.photos/id/59/300/300',
      'https://picsum.photos/id/60/300/300',
    ],
    precio: 300,
    capacidad: 6,
    id: 20,
  },
  {
    título: 'Casa de Playa',
    descripción:
      'Amplia casa frente a la playa para unas vacaciones memorables',
    imagen: [
      'https://picsum.photos/id/61/300/300',
      'https://picsum.photos/id/62/300/300',
      'https://picsum.photos/id/63/300/300',
    ],
    precio: 500,
    capacidad: 10,
    id: 21,
  },
  {
    título: 'Villa en la Viña',
    descripción: 'Paraíso de los amantes del vino en el corazón de una viña',
    imagen: [
      'https://picsum.photos/id/64/300/300',
      'https://picsum.photos/id/65/300/300',
      'https://picsum.photos/id/66/300/300',
    ],
    precio: 600,
    capacidad: 8,
    id: 22,
  },
  {
    título: 'Condominio Moderno',
    descripción:
      'Condominio elegante y contemporáneo en una ubicación privilegiada',
    imagen: [
      'https://picsum.photos/id/67/300/300',
      'https://picsum.photos/id/68/300/300',
      'https://picsum.photos/id/69/300/300',
    ],
    precio: 350,
    capacidad: 4,
    id: 23,
  },
  {
    título: 'Centro de Ski',
    descripción: 'Resort de lujo en la base de las pistas de ski',
    imagen: [
      'https://picsum.photos/id/70/300/300',
      'https://picsum.photos/id/71/300/300',
      'https://picsum.photos/id/72/300/300',
    ],
    precio: 800,
    capacidad: 12,
    id: 24,
  },
  {
    título: 'Cabaña junto al Río',
    descripción: 'Cabaña pintoresca en un apacible entorno junto al río',
    imagen: [
      'https://picsum.photos/id/73/300/300',
      'https://picsum.photos/id/74/300/300',
      'https://picsum.photos/id/75/300/300',
    ],
    precio: 250,
    capacidad: 2,
    id: 25,
  },
  {
    título: 'Bungalow Tropical',
    descripción: 'Escapada al paraíso en un bungalow tropical privado',
    imagen: [
      'https://picsum.photos/id/76/300/300',
      'https://picsum.photos/id/77/300/300',
      'https://picsum.photos/id/78/300/300',
    ],
    precio: 450,
    capacidad: 6,
    id: 26,
  },
  {
    título: 'Posada Histórica',
    descripción:
      'Posada encantadora con una rica historia y cálida hospitalidad',
    imagen: [
      'https://picsum.photos/id/79/300/300',
      'https://picsum.photos/id/80/300/300',
      'https://picsum.photos/id/81/300/300',
    ],
    precio: 300,
    capacidad: 8,
    id: 27,
  },
  {
    título: 'Casa del Lago',
    descripción: 'Tranquila casa frente al lago para una escapada relajante',
    imagen: [
      'https://picsum.photos/id/82/300/300',
      'https://picsum.photos/id/83/300/300',
      'https://picsum.photos/id/84/300/300',
    ],
    precio: 400,
    capacidad: 10,
    id: 28,
  },
  {
    título: 'Lodge de Montaña',
    descripción: 'Lodge rústico rodeado de majestuosas montañas',
    imagen: [
      'https://picsum.photos/id/85/300/300',
      'https://picsum.photos/id/86/300/300',
      'https://picsum.photos/id/87/300/300',
    ],
    precio: 500,
    capacidad: 14,
    id: 29,
  },
  {
    título: 'Estudio Urbano',
    descripción: 'Estudio compacto en el corazón de la ciudad',
    imagen: [
      'https://picsum.photos/id/88/300/300',
      'https://picsum.photos/id/89/300/300',
      'https://picsum.photos/id/90/300/300',
    ],
    precio: 200,
    capacidad: 2,
    id: 30,
  },
];

stayRouter.get('/getAllStays', (req, res) => {
  res.status(200).json({ status: 0, message: '', data: { stays } });
});
