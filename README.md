# uch-arquitectura
UCH - Arquitectura de sistemas - 2023

##  Comenzar
> Importante: Es necesario tener instalado [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) y [git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git)

1. Descargar repo

```bash
git clone https://github.com/cristianemoyano/uch-arquitectura.git

cd app
```

2. Instalar

```bash
yarn install
```

3. Correr localmente

```bash
yarn dev
```

4. Abrir la app [http://localhost:3000](http://localhost:3000)


##  Subir los cambios a Github y crear un PR

1. Descarga los ultimos cambios en el repositorio
```bash
git pull
```
2. Crear una nueva rama

```bash
git checkout -b nombre-de-la-rama
```

3. Hace los cambios en tu editor.
4. Hacer stash de los cambios

```bash
git add .
```
5. Hacer commit de los cambios

```bash
git commit -m 'Mensaje del commit'
```
6. Subir los cambios a GIT

```bash
git push origin nombre-de-la-rama
```
7. Crear el PR
```bash
https://github.com/cristianemoyano/uch-arquitectura/pull/new/nombre-de-la-rama
```

8. Una vez creado el PR, pide que te lo revise un compañero. Necesitas que esté aprobado para que puedas mergearlo.
9. Una vez revisado y aprobado el PR, podrás mergearlo.
10. Vuelve a la rama principal
```bash
git checkout main
```
11. Traete los últimos cambios
```bash
git pull
```

## Estructura del proyecto

https://nextjs.org/docs/getting-started/project-structure