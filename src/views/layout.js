export function layout(
  titulo,
  contenido,
  appName = "Acadex",
  appVersion = "1.0.0",
) {
  const anioActual = new Date().getFullYear();

  return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>${titulo}</title>

            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
            >

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
            >
        </head>

        <body class="bg-light">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <i class="bi bi-journal-check"></i>
                        ${appName}
                    </a>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarPrincipal"
                        aria-controls="navbarPrincipal"
                        aria-expanded="false"
                        aria-label="Mostrar navegacion"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarPrincipal">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    <i class="bi bi-house-door"></i>
                                    Inicio
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/tareas">
                                    <i class="bi bi-list-task"></i>
                                    Tareas
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/tareas/nueva">
                                    <i class="bi bi-plus-circle"></i>
                                    Nueva tarea
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/resumen">
                                    <i class="bi bi-bar-chart"></i>
                                    Resumen
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main class="container my-4">
                ${contenido}
            </main>

            <footer class="bg-dark text-white text-center py-3 mt-5">
                <p class="mb-0">
                    <i class="bi bi-code-slash"></i>
                    ${appName} - Version ${appVersion} - ${anioActual}
                </p>
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;
}
