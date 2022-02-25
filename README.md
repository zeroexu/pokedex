# pokedex

Esta es una pokedex realizada en Nextjs version 12.
Puede listar pokemons y ver una pequeña descripcion.

## ¿Qué necesitas para forkear y modificar?

- Nodejs v16.14.0 como minimo
- Npm v8.5.0
- Instala prettier en visual studio code para mantener el formato
- El archivo env.sample tiene la info que necesitas para configurar

## Notas del Desarrollador

Esta desarrollado con el template de typescript.
Next 12 trae eslint, pero puedes mirar la configuracion personalizada en el eslintrc.json
Tambien tiene configurado un .prettierrc.json para el formato.
Los commits estan validados por husky
Y tiene lint-stage solo para validar los archivos modificados
finalmente podras ver en el next.config.json las variables de entorno expuestas en el front
y el dominio permitido para consumir imagenes.

## De donde viene la informacion?

Toda la informacion es obtenida a través de la poke-api version 2
Mas informacion acá https://pokeapi.co/docs/v2#pokemon
