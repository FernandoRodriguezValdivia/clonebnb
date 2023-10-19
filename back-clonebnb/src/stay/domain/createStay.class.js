export class CreateStay {
  constructor({
    hostId,
    categoriaId,
    titulo,
    descripcion,
    imagen1,
    imagen2,
    imagen3,
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
    this.imagen2 = imagen2;
    this.imagen3 = imagen3;
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
