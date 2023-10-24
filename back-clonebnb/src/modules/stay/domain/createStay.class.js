export class CreateStay {
  constructor({
    hostId,
    categoriaId,
    titulo,
    descripcion,
    imagen1,
    imagenId1,
    imagen2,
    imagenId2,
    imagen3,
    imagenId3,
    tarifa,
    capacidad,
    numeroHabitaciones,
    wifi,
    estacionamiento,
    privado,
    pais,
    estado,
    ciudad,
    avenida,
  }) {
    this.hostId = Number(hostId);
    this.categoriaId = Number(categoriaId);
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen1 = imagen1;
    this.imagenId1 = imagenId1;
    this.imagen2 = imagen2;
    this.imagenId2 = imagenId2;
    this.imagen3 = imagen3;
    this.imagenId3 = imagenId3;
    this.tarifa = tarifa;
    this.capacidad = Number(capacidad);
    this.numeroHabitaciones = Number(numeroHabitaciones);
    this.wifi = Boolean(wifi);
    this.estacionamiento = Boolean(estacionamiento);
    this.privado = Boolean(privado);
    this.pais = pais;
    this.estado = estado;
    this.ciudad = ciudad;
    this.avenida = avenida;
  }
}
