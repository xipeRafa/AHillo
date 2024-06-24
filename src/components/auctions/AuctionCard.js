

export const AuctionCard = ({ item }) => {
 


  const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });

  const milisegundosComoFecha = (milisegundos) => {
      return formateador.format(new Date(milisegundos));
  };

  


    return (
        <div className="card shadow-sm ">
           <div
            style={{
              height: '180px',
              backgroundImage: `url(${item.imgUrl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="w-100 mt-4"
          /> 
  
          <div className="card-body p-4 ">
            {/* <h5>Creado: {  new Date(item.duration).toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})}</h5> */}
            <h5>{milisegundosComoFecha(item.duration)} </h5>
            <h5>{item.email}</h5>
            <hr/>
            <h5>Nombre: {item.nombre}</h5>
            <h5>Clasificacion: {item.clasificacion}</h5>
            <h5> Decanato: {item.decanato}</h5>
            <hr/>

            <h5> Parroco: {item.parroco}</h5>
            <h5> Vicario: {item.vicario}</h5>
            <h5> Direccion: {item.direccion}</h5>
            <h5> Telefono: {item.telefono}</h5>
            <h5> Sitio Web: {item.sitioWeb}</h5>
            <hr/>

            <h5> Horario de Misas L-V: {item.horarioDeMisasLV}</h5>
            <h5> Horario de Misas Sabado: {item.horarioDeMisasSabado}</h5>
            <h5> Horario de Misas Domingo: {item.horarioDeMisasDomingo}</h5>
            <hr/>

            <h5> Servicios: {item.servicios}</h5>
            <h5> Confesiones: {item.confesiones}</h5>
            <h5> Sacramentos: {item.sacramentos}</h5>
            <h5> Eventos: {item.eventos}</h5>
            <h5> Actividades: {item.actividades}</h5>
            <hr/>

            <h5> Centros: {item.centros}</h5>
            <h5> Horario de Centros: {item.horarioDeCentros}</h5>
            <h5> Grupos: {item.grupos}</h5>
            <h5> Devociones: {item.devociones}</h5>
            <hr/>
            <h5> Comentarios: {item.comentarios}</h5>
          </div>
        </div>
    );
  };

