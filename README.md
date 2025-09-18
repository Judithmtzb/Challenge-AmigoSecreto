# Challenge-AmigoSecreto

🎁 Amigo Secreto

Aplicación web simple para organizar un sorteo de Amigo Secreto.
Permite agregar nombres a una lista, visualizar los participantes, sortear un amigo al azar y limpiar o reiniciar el juego de forma controlada.

📂 Estructura del proyecto
amigo-secreto/
│── index.html       # Estructura principal del sitio
│── style.css        # Estilos y diseño visual
│── app.js           # Lógica y funcionalidad en JavaScript
│── assets/          # Imágenes e íconos utilizados
└── README.md        # Documentación del proyecto

⚙️ Funcionalidades

* Agregar amigo
El usuario puede ingresar un nombre en el campo de texto y añadirlo a la lista.
Si el campo está vacío, se muestra una alerta.
Se habilitan los botones de Limpiar y Reiniciar cuando hay al menos un nombre agregado.
Listar amigos
Los nombres añadidos se muestran en una lista ordenada de manera dinámica.

* Sortear amigo secreto
Selecciona de forma aleatoria un nombre de la lista y lo muestra en pantalla.
Si no hay nombres, muestra una alerta indicando que la lista está vacía.

* Limpiar
Vacía la lista de amigos y el campo de entrada, dejando el sistema en estado inicial.

* Reiniciar juego
Limpia la lista y el resultado del sorteo, permitiendo comenzar desde cero.

🖥️ Tecnologías utilizadas

HTML – estructura del proyecto.
CSS – diseño responsivo y botones interactivos.
JavaScript – lógica para manipular el DOM y ejecutar el sorteo.
Google Fonts – tipografía moderna para mejor visualización.

🔑 Consideraciones técnicas

El botón Añadir está siempre habilitado.
Los botones Limpiar y Reiniciar solo se activan cuando la lista contiene al menos un nombre.
Se aplicaron validaciones para evitar entradas vacías.
La lista y el resultado se limpian automáticamente al reiniciar.
El código es modular, lo que facilita modificaciones futuras.

🚀 Cómo ejecutar

Clona el repositorio o descarga el proyecto.
git clone [https://github.com/usuario/amigo-secreto.git](https://github.com/Judithmtzb/Challenge-AmigoSecreto.git)

Abre el archivo index.html en tu navegador preferido.
Ingresa los nombres de los participantes y comienza el sorteo.

📌 Próximas mejoras (opcional)

Permitir eliminar un solo nombre de la lista.
Exportar los resultados a un archivo de texto o PDF.
Agregar animaciones al sorteo.
Implementar almacenamiento local (localStorage) para conservar la lista al recargar la página.
