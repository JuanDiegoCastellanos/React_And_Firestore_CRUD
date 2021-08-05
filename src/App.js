import React, { useState, useEffect } from "react";
import { store } from "./firebaseconfig";

function App() {
  const [nombre, setNombre] = useState("");
  const [phone, setPhone] = useState("");
  const [usuario, setUsuario] = useState([]);
  const [error, setError] = useState('');
  const [idUser, setIdUser] = useState("");
  const [modeEdi, setModeEdi] = useState(null);

  const setUsers = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setError("El campo nombre esta vacio");
    } else if (!phone.trim()) {
      setError("El campo phone esta vacio");
    } else {
      setError("");
    }

    const user = {
      name: nombre,
      phone: phone,
    };

    try {
      const data = await store.collection("Agenda").add(user);
      const { docs } = await store.collection("Agenda").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setUsuario(nuevoArray);
      alert("Usuario Añadido");
    } catch (error) {
      console.log(error);
    }
    setNombre("");
    setPhone("");
  };
  const updateUser = async (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setError("El campo nombre esta vacio");
    } else if (!phone.trim()) {
      setError("El campo phone esta vacio");
    } else {
      setError("");
    }
    const nuevoUserUpdate = {
      name: nombre,
      phone: phone
    };
    try {
      await store.collection("Agenda").doc(idUser).set(nuevoUserUpdate);
      const { docs } = await store.collection("Agenda").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setUsuario(nuevoArray);
    } catch (error) {
      console.log(error);
    }
    setNombre('')
    setPhone('')
    setIdUser('')
    setModeEdi(false)
  };

  const deleteUser = async (id) => {
    try {
      await store.collection("Agenda").doc(id).delete();
      const { docs } = await store.collection("Agenda").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setUsuario(nuevoArray);
    } catch (errorX) {
      setError(errorX);
    }
  };
  const pulsarActualizar = async (idPara) => {
    try {
      const data = await store.collection("Agenda").doc(idPara).get();
      const {phone, name } = data.data();
      setNombre(name);
      setPhone(phone);
      setIdUser(idPara);
      setModeEdi(true);
    } catch (erX) {
      setError(erX);
    }
  };
  useEffect(() => {
    const getUsers = async () => {
      const { docs } = await store.collection("Agenda").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setUsuario(nuevoArray);
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <div className="row ">
        <div className="col-md-5 m-4 card text-white bg-dark ">
          <h2 className="text-center m-2">Formulario de Usuario</h2>
          <hr />
          <form
            onSubmit={modeEdi ? updateUser : setUsers}
            className="form-group"
            action=""
          >
            <div className="row">
              <div className="col-md-6">
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                  placeholder="Introduce el nombre"
                  value={nombre}
                />
              </div>
              <div className="col-md-6">
                <input
                  value={phone}
                  className="form-control"
                  type="text"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="Introduce el Numero"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2">
              {modeEdi ? (
                <input
                  type="submit"
                  value="Actualizar"
                  className="btn m-2 btn-outline-warning btn-block"
                />
              ) : (
                <input
                  type="submit"
                  value="Register"
                  className="btn m-2 btn-outline-warning btn-block"
                />
              )}
            </div>
          </form>
          {error ? (
            <div className="text-center">
              <span>{error}</span>
            </div>
          ) : (
            <span></span>
          )}
        </div>
        <div className="col-md-6">
          <h2 className="text-center">Lista de tu Agenda</h2>
          {/* <div className="d-flex justify-content-center"> */}
          <ul className="list-group">
            {usuario.length !== 0 ? (
              usuario.map((item) => (
                <li className="list-group-item" key={item.id}>
                  {item.name} {item.phone}
                  <button
                    onClick={(id) => {
                      deleteUser(item.id);
                    }}
                    className="btn btn-outline-danger float-end "
                  >
                    Delete
                  </button>
                  <button
                    onClick={(id) => {
                      pulsarActualizar(item.id);
                    }}
                    className="btn btn-outline-info float-end "
                  >
                    Update
                  </button>
                </li>
              ))
            ) : (
              <div className="text-center">
                <span> Im Sorry no hay nada para mostrar</span>
              </div>
            )}
          </ul>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
