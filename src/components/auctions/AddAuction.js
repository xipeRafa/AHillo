import { Button, Form, Modal, Alert, Row, Col, Select } from "react-bootstrap";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AddAuction = ({ setAuction }) => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const nombre = useRef();
  const clasificacion = useRef()
  const vicario = useRef();
  const parroco = useRef();
  const itemImage = useRef(); 
  const decanato = useRef();
  const direccion = useRef();
  const telefono = useRef();
  const sitioWeb = useRef()

  const horarioDeMisasLV = useRef();
  const horarioDeMisasSabado = useRef()
  const horarioDeMisasDomingo = useRef()

  const servicios = useRef();
  const confesiones= useRef();
  
  const sacramentos = useRef();
  const eventos = useRef();
  const actividades = useRef();

  const centros = useRef();
  const horarioDeCentros = useRef();
  const grupos = useRef()
  const devociones = useRef()
  const comentarios = useRef();



  const { currentUser } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const imgTypes = ["image/png", "image/jpeg", "image/jpg"];

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

     if (!imgTypes.includes(itemImage.current.files[0].type)) {
      return setError("por favor use una imagen valida (png, jpeg, jpg)");
    } 

    let currentDate = new Date();
    let dueDate = currentDate.setHours(
      currentDate.getHours() /* + itemDuration.current.value */
    );

    let newAuction = {
      email: currentUser.email,
      nombre: nombre.current.value,
      clasificacion:clasificacion.current.value,
      vicario: vicario.current.value,
      parroco: parroco.current.value,

      duration: dueDate,

      direccion: direccion.current.value,
      telefono: telefono.current.value,
      sitioWeb:sitioWeb.current.value,

      itemImage: itemImage.current.files[0], 
      decanato: decanato.current.value,

      horarioDeMisasLV: horarioDeMisasLV.current.value,
      horarioDeMisasSabado:horarioDeMisasSabado.current.value,
      horarioDeMisasDomingo:horarioDeMisasDomingo.current.value,

      servicios: servicios.current.value,
      confesiones:confesiones.current.value,

      sacramentos:sacramentos.current.value,
      eventos:eventos.current.value,
      actividades:actividades.current.value,

      centros:centros.current.value,
      horarioDeCentros:horarioDeCentros.current.value,
      grupos:grupos.current.value,
      devociones:devociones.current.value,
      comentarios:comentarios.current.value,

    };

    setAuction(newAuction);
    closeForm();
  };

  return (
    <>
      <div className="col d-flex justify-content-center my-3 ">
        <div onClick={openForm} className="btn btn-primary mx-5                 ">
          CREAR INFORME
        </div>
      </div>
      <Modal centered show={showForm} onHide={closeForm} style={{width: '96%', marginLeft: '1%'}} >
        <form onSubmit={submitForm} style={{backgroundColor:'rgb(222,222,222)'}}>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
            <Col className="border mb-5 btn bg-primary mx-2 p-2 text-center text-white">
                
                  {currentUser.email} 
               
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" required ref={nombre} />
                </Form.Group>
              </Col>

            </Row>
            <Row>
            <Col className="mb-2">
                <Form.Label>Clasificacion</Form.Label>
                <Form.Control as="select" multiple={false} ref={clasificacion}>

                  <option value="parroquia">Parroquia</option>
                  <option value="cuasiparroquia">Cuasiparroquia</option>
                  <option value="catedral">Catedral</option>
                  <option value="centro">Centro</option>

                  <option value="institucion educativa">Institucion Educativa</option>
                  <option value="obra social">Obra Social</option>
                  <option value="vida consagrada femenina">Vida Consagrada Femenina</option>

                  <option value="vida consagrada masculina">Vida Consagrada Masculina</option>
                  <option value="organismo laical">Organismo Laical</option>
                  <option value="otro">Otro</option>
                  

                </Form.Control >
              </Col>
            </Row>
            <Row>
                <Col>
                  <Form.Label>Decanato</Form.Label>
                  <Form.Control type="text" required ref={decanato} />
                </Col>
            </Row>
  <hr/>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Parroco</Form.Label>
                  <Form.Control type="text" required ref={parroco} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Vicario</Form.Label>
                  <Form.Control type="text" required ref={vicario} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" required ref={direccion} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="text" required ref={telefono} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Sitio Web</Form.Label>
                  <Form.Control type="text" required ref={sitioWeb} />
                </Form.Group>
              </Col>
            </Row>
<hr/>
            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Horario de Misas Lunes a Viernes</Form.Label>
                  <Form.Control type="text" required ref={horarioDeMisasLV} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Horario de Misas Sabado</Form.Label>
                  <Form.Control type="text" required ref={horarioDeMisasSabado} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Horario de Misas Domingo</Form.Label>
                  <Form.Control type="text" required ref={horarioDeMisasDomingo} />
                </Form.Group>
              </Col>
            </Row>
<hr/>
            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Servicios</Form.Label>
                  <Form.Control type="text" required ref={servicios} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Confesiones</Form.Label>
                  <Form.Control type="text" required ref={confesiones} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Sacramentos</Form.Label>
                  <Form.Control type="text" required ref={sacramentos} />
                </Form.Group>
              </Col>
            </Row>


            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Eventos</Form.Label>
                  <Form.Control type="text" required ref={eventos} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Actividades</Form.Label>
                  <Form.Control type="text" required ref={actividades} />
                </Form.Group>
              </Col>
            </Row>
  <hr/>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Centros</Form.Label>
                  <Form.Control type="text" required ref={centros} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Horario de Centros</Form.Label>
                  <Form.Control type="text" required ref={horarioDeCentros} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Grupos</Form.Label>
                  <Form.Control type="text" required ref={grupos} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Devociones</Form.Label>
                  <Form.Control type="text" required ref={devociones} />
                </Form.Group>
              </Col>
            </Row>
<hr/>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Comentarios</Form.Label>
                  <Form.Control as="textarea" placeholder="comentar..." style={{ height: '100px' }} 
                            required ref={comentarios}/> 
                </Form.Group>
              </Col>
            </Row>
<hr/>

            <Row>
              <Col>
              <Form.Label>Imagen</Form.Label>
                <Form.Group >
                  <Form.File
                    label="Cargar Foto"
                    custom
                    required
                    ref={itemImage}
                  />
                </Form.Group>
              </Col> 
            </Row>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
