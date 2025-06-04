# JS-Intern-GS
Firstly, we need to build the docker compose to start the container for setting up the Redis server with the following command:

```bash
cd docker
docker-compose up --build
```

After the Redis server is up and running, you can start the Node.js application with the following command:

```bash
cd backend
npm run dev
```

Finally, you can run the frontend with the following command:

```bash
cd frontend
npm run dev
```
Demo link: [https://youtu.be/AjUjtDFlQwk](https://youtu.be/AjUjtDFlQwk)
