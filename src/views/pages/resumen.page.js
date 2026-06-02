import { layout } from "../layout.js";

export function resumenPage(tareas) {
  const totalTareas = tareas.length;

  const pendientes = tareas.filter(
    (tarea) => tarea.estado === "pendiente",
  ).length;

  const enProgreso = tareas.filter(
    (tarea) => tarea.estado === "en progreso",
  ).length;

  const completadas = tareas.filter(
    (tarea) => tarea.estado === "completada",
  ).length;

  return layout(
    "Resumen",
    `
        <div class="p-4 mb-4 bg-white rounded-4 shadow-sm border">
            <h1 class="fw-bold mb-1">
                <i class="bi bi-graph-up-arrow text-primary"></i>
                Resumen de tareas
            </h1>

            <p class="text-muted mb-0">
                Estadisticas generales de las tareas academicas registradas
            </p>
        </div>

        <div class="row g-4">
            <div class="col-md-3">
                <div class="card border-0 shadow-sm rounded-4 text-bg-primary h-100">
                    <div class="card-body text-center">
                        <div class="display-4 mb-2">
                            <i class="bi bi-list-task"></i>
                        </div>

                        <h5 class="card-title">Total</h5>

                        <p class="display-5 fw-bold mb-0">
                            ${totalTareas}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card border-0 shadow-sm rounded-4 text-bg-danger h-100">
                    <div class="card-body text-center">
                        <div class="display-4 mb-2">
                            <i class="bi bi-clock-fill"></i>
                        </div>

                        <h5 class="card-title">Pendientes</h5>

                        <p class="display-5 fw-bold mb-0">
                            ${pendientes}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card border-0 shadow-sm rounded-4 text-bg-warning h-100">
                    <div class="card-body text-center">
                        <div class="display-4 mb-2">
                            <i class="bi bi-hourglass-split"></i>
                        </div>

                        <h5 class="card-title">En progreso</h5>

                        <p class="display-5 fw-bold mb-0">
                            ${enProgreso}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card border-0 shadow-sm rounded-4 text-bg-success h-100">
                    <div class="card-body text-center">
                        <div class="display-4 mb-2">
                            <i class="bi bi-check-circle-fill"></i>
                        </div>

                        <h5 class="card-title">Completadas</h5>

                        <p class="display-5 fw-bold mb-0">
                            ${completadas}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <a href="/tareas" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i>
                Volver a tareas
            </a>
        </div>
        `,
  );
}
