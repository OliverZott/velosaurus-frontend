# Velosaurus Frontend

- Backend: **ASP.Net Core**
- Frontend: **React**
- Database: **MongoDB**
- Repo & Pipelines: **Github**
- Hosting: **Heroku** amd **Azure**
  - <https://portal.azure.com/>
  - <https://dashboard.heroku.com/>
- DevOps: **Azure DevOps**
  - <https://dev.azure.com/>

![Project Structure](velosaurus_architecture.jpg)

## Prerequisites

- Nodejs
- `npm install` first time after cloning to install dependencies

## Run and Debug

- First, run the development server:

    ```bash
    npm run dev  # run the development server
    npm run lint # run the linter
    ```

- To debug the server, run the `Next.js: debug full stack` launch configuration in VSCode (no specific toggle Auto Attach needed)

- Check <http://localhost:3000>

## Run docker container

- `docker build --tag '<image-tag>' .`
- `docker run -p 3000:3000 -e NODE_ENV=production <image-tag> npm start`

OR

- `docker compose build` rebuild image, if changes in code
- `docker compose up` or `docker compose up --build`
- `docker compose down`

Resources:

- API: <https://portal.azure.com/>
  - <https://velosaurus-api.azurewebsites.net/api/tour>
- DB: <https://cloud.mongodb.com/>

## Structure

best practice?:

```bash
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── settings/
│       ├── layout.tsx
│       └── page.tsx
├── components/
│   └── Header.tsx
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── utils/
│   └── helpers.ts
```

old school?

```bash
├── src/
│   ├── pages/
│   │   ├── api/
│   │   │   └── hello.ts
│   │   └── index.tsx
│   ├── components/
│   │   └── ExampleComponent.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── Home.module.css
│   └── utils/
│       └── helpers.ts
```

## Project Setup

- `npx create-react-app velosaurus-frontend --template typescript`
- `npm i react-router-dom @types/react-router-dom`
- `npm i axios @types/axios`

Update Dependecies:

- `npm update`
- `npm audit --fix`
- `npm install <package>@latest`
- Reactupdate: `npm install react react-dom @types/react @types/react-dom`

## Next steps

- Parse distance / DateTime ...
- Logging & Exception Handling
  - <https://docs.datalust.co/docs/using-nodejs>
- POST example
- resolve enum

### Architecture

- how map repsonse object (DTO?)
- DEPLOY

### Done

- bootstrap for tour exmaple page

## npm Commands

- `npm start`
- `npm test`
- `npm run build`
- `npm run eject`

## TODO

Debug in container (copilot answer):

1. **Dockerize Your React App**:
    - First, ensure that your **React** app is properly **Dockerized**. If you haven't done this yet, follow these steps:
        - Create a **Dockerfile** for your **React** app. This file specifies how to build an image of your application.
        - Build the Docker image using the **Dockerfile**.
        - Run a container based on the created image.

2. **Start the Container in Interactive Mode**:
    - To debug interactively, you'll need to run your container in **interactive mode**.
    - Use the following command to start your existing **React** container interactively:

        ```bash
        docker exec -it <container_name_or_id> sh
        ```

        - Replace `<container_name_or_id>` with the actual name or ID of your **React** container.
        - The `sh` command opens a shell inside the container.

3. **Debugging Inside the Container**:
    - Once inside the container, navigate to your **React** app directory (usually `/app` or the path where your app is located).
    - You can now use standard debugging tools like **console logs**, **browser developer tools**, or any other debugging techniques you prefer.
    - Remember that the code inside the container is the same as your local code, so you can debug it as usual.

4. **Inspect Network and Ports**:
    - Ensure that the container's ports are correctly mapped to your host machine. If your **React** app runs on port 3000 inside the container, make sure it's accessible on the same port outside the container.
    - Check if the app is running by accessing it in your browser at `http://localhost:3000`.

5. **Debugging with Visual Studio Code (Optional)**:
    - If you're using **Visual Studio Code**, you can set up debugging configurations to attach to your running container.
    - Install the **Docker** extension for **VS Code**.
    - Create a `launch.json` configuration that specifies how to attach the debugger to your **React** app running inside the container.
    - Example configuration for **VS Code**:

        ```json
        {
            "version": "0.2.0",
            "configurations": [
                {
                    "name": "Docker React Debug",
                    "type": "node",
                    "request": "attach",
                    "port": 9229,
                    "address": "localhost",
                    "localRoot": "${workspaceFolder}",
                    "remoteRoot": "/app"
                }
            ]
        }
        ```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
