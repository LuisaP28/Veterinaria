//Variables

const btnSubmit = document.querySelector("#btn_submit");
const mascota = document.querySelector("#name_pet");
const propietario = document.querySelector("#name_person");
const telefono = document.querySelector("#phone_number");
const fecha = document.querySelector("#date_cite");
const hora = document.querySelector("#time_cite");
const sintomas = document.querySelector("#description");
const formulario = document.querySelector("form");
const tarjeta = document.querySelector("#card");

let usuarios = [];

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const usuario = { 
        nombreMascota: name_pet.value,
        nombrePropietario: name_person.value,
        telefonoPropietario: phone_number.value,
        fechaCita: date_cite.value,
        horaCita: time_cite.value,
        sintomasUsuario: description.value,
        }
    usuarios.push(usuario)
    
    informacion();
});

function informacion() {

    tarjeta.innerHTML= "";

    usuarios.forEach((usuario) => {
        tarjeta.innerHTML += `
        <div class="card" style="width: 30rem;">
        <img src="./Imagenes/mascotas.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">Nombre de la mascota:</h4>${usuario.nombreMascota}          
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> <strong>Propietario</strong>: ${usuario.nombrePropietario}</li>
          <li class="list-group-item"> <strong>Teléfono</strong>: ${usuario.telefonoPropietario}</li>
          <li class="list-group-item"> <strong>Fecha de la cita</strong>: ${usuario.fechaCita}</li>
          <li class="list-group-item"> <strong>Hora</strong>: ${usuario.horaCita}</li>
          <li class="list-group-item"> <strong>Síntomas</strong>: ${usuario.sintomasUsuario}</li>    
        </ul>
        <div class="card-body">
          <button type="editar" class="btn btn-outline-info" id="editar" onclick="btnEditar()">Editar Datos</button>
          <button type="eliminar" class="btn btn-outline-info" id="eliminar" onclick="btnEliminar()>Eliminar</button>
        </div>
        </div>`
    })

};



  // /Eliminar/
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList = "btn btn-success w-40";

    btnEliminar.addEventListener("click", function () {
      btnEliminar.parentElement.parentElement.remove();

      usuarios = usuarios.filter((petELiminar) => petELiminar.id != usuarios.id);
      localStorage.setItem("usuariossVet", JSON.stringify(usuarios));
    });
    newDiv.appendChild(btnEliminar);

    function mostrarFormularioEdicion() {
      const formularioEdicion = document.createElement("form");
      formularioEdicion.classList = "p-2";
      formularioEdicion.innerHTML = `
        <label for="edit_name_pet">Mascota:</label>
        <input class="form-control"  type="text" id="edit_name_pet" value="${usuario.mascota}" required><br>

        <label for="edit_name_owner">Propietario:</label>
        <input class="form-control"  type="text" id="edit_name_owner" value="${usuario.propietario}" required><br>
    
        <label for="edit_phone_number">Teléfono de contacto:</label>
        <input class="form-control"  type="text" id="edit_phone_number" value="${usuario.telefono}" required><br>
    
        <label for="edit_date_cite">Fecha de la cita:</label>
        <input class="form-control"  type="text" id="edit_date_cite" value="${usuario.fecha}" required><br>
    
        <label for="edit_time_cite">Hora de la cita:</label>
        <input class="form-control"  type="text" id="edit_time_cite" value="${usuario.hora}" required><br>
    
        <label for="edit_description">Síntomas:</label>
        <textarea class="form-control"  id="edit_description" required>${usuario.sintomas}</textarea><br>
    
        <button class="btn btn-success w-40" type="button" id="btnGuardar" data-id="${usuario.id}">Guardar</button>
      `;

      // Agregar el formulario de edición al contenedor
      informationCollected.appendChild(formularioEdicion);

      // Agregar evento al botón de guardar
      const btnGuardar = document.getElementById("btnGuardar");

      btnGuardar.addEventListener("click", function () {
        // Obtener valores del formulario de edición
        const editedmascota = document.getElementById("edit_name_pet").value;
        const editedpropietario =
          document.getElementById("edit_name_owner").value;
        const editedtelefono =
          document.getElementById("edit_phone_number").value;
        const editedDfecha = document.getElementById("edit_date_cite").value;
        const editedhora = document.getElementById("edit_time_cite").value;
        const editedsintomas =
          document.getElementById("edit_description").value;
        const idUpdating = btnGuardar.getAttribute("data-id");

        const petUpdating = pets.find((usuario) => usuario.id == idUpdating);
        if (petUpdating) {
          petUpdating.nombreMascota = editednombreMascota;
          petUpdating.nombrePropietario = editednombrePropietario;
          petUpdating.telefonoPropietario = editedtelefonoPropietario;
          petUpdating.fechaCita = editedfechaCita;
          petUpdating.horaCita = editedhoraCita;
          petUpdating.sintomasUsuario = editedsintomasUsuario;
        }
        // Llamar a la función con los valores editados
        formResults();

        // Mostrar el texto original y ocultar el formulario de edición
        formularioEdicion.style.display = "none";
        informationCollected.querySelector("p").style.display = "block";

        //localstorage
      });
    }

  localStorage.setItem("petsVet", JSON.stringify(usuarios));

