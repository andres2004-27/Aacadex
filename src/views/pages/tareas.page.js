import { layout } from "../layout.js";

function obtenerBadgeEstado(estado) {
  if (estado === "pendiente") return "bg-danger";
  if (estado === "en progreso") return "bg-warning text-dark";
  if (estado === "completada") return "bg-success";

  return "bg-secondary";
}

function obtenerIconoEstado(estado) {
  if (estado === "pendiente") return "bi-clock-fill";
  if (estado === "en progreso") return "bi-hourglass-split";
  if (estado === "completada") return "bi-check-circle-fill";

  return "bi-question-circle";
}

function obtenerBadgePrioridad(prioridad) {
  if (prioridad === "alta") return "bg-danger";
  if (prioridad === "media") return "bg-warning text-dark";
  if (prioridad === "baja") return "bg-success";

  return "bg-secondary";
}

export function tareasPage(tareas) {
  let contenido = `
        <div class="p-4 mb-4 bg-white rounded-4 shadow-sm border">
            <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div>
                    <h1 class="fw-bold mb-1">
                        <i class="bi bi-card-checklist text-primary"></i>
                        Lista de tareas
                    </h1>

                    <p class="text-muted mb-0">
                        Administra tus tareas academicas de forma ordenada
                    </p>
                </div>

                <a href="/tareas/nueva" class="btn btn-primary">
                    <i class="bi bi-plus-circle"></i>
                    Nueva tarea
                </a>
            </div>
        </div>

        <div class="card shadow-sm border-0 rounded-4">
            <div class="card-header bg-dark text-white rounded-top-4">
                <i class="bi bi-table"></i>
                Tabla de tareas registradas
            </div>

            <div class="card-body">
    `;

  if (tareas.length === 0) {
    contenido += `
            <div class="alert alert-info mb-0">
                <i class="bi bi-info-circle"></i>
                No hay tareas registradas.
            </div>
        `;
  } else {
    contenido += `
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <thead class="table-primary">
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>Descripcion</th>
                            <th>Estado</th>
                            <th>Prioridad</th>
                            <th class="text-center">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
        `;

    tareas.forEach((tarea, indice) => {
      contenido += `
                <tr>
                    <td class="fw-bold">
                        ${indice + 1}
                    </td>

                    <td>
                        <span class="fw-semibold">
                            ${tarea.titulo}
                        </span>
                    </td>

                    <td>
                        <span class="text-muted">
                            ${tarea.descripcion}
                        </span>
                    </td>

                    <td>
                        <span class="badge ${obtenerBadgeEstado(tarea.estado)}">
                            <i class="bi ${obtenerIconoEstado(tarea.estado)}"></i>
                            ${tarea.estado}
                        </span>
                    </td>

                    <td>
                        <span class="badge ${obtenerBadgePrioridad(tarea.prioridad)}">
                            ${tarea.prioridad}
                        </span>
                    </td>

                    <td class="text-center">
                        <a href="/tareas/${tarea.id}" class="btn btn-sm btn-outline-primary">
                            <i class="bi bi-eye"></i>
                            Ver
                        </a>

                        <a href="/tareas/${tarea.id}/editar" class="btn btn-sm btn-outline-warning">
                            <i class="bi bi-pencil-square"></i>
                            Editar
                        </a>

                        <form action="/tareas/${tarea.id}/eliminar" method="POST" class="d-inline">
                            <button type="submit" class="btn btn-sm btn-outline-danger">
                                <i class="bi bi-trash"></i>
                                Eliminar
                            </button>
                        </form>
                    </td>
                </tr>
            `;
    });

    contenido += `
                    </tbody>
                </table>
            </div>
        `;
  }

  contenido += `
            </div>
        </div>
    `;

  return layout("Tareas", contenido);
}
