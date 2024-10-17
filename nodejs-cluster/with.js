const express = require("express");
const cluster = require("cluster");
const os = require("os");

const PORT = 3000;

const app = express();

const cpuNum = os.cpus().length;

/**
 * If process is master process fork new worker process as number of cpu's present.
 *
 * Master process does not listen for any request instead the worker process listen for request.
 */

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers for each CPU core
  for (let i = 0; i < cpuNum; i++) {
    cluster.fork(); // Creates a worker process
  }

  // If a worker dies, log it and fork a new worker
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Replace the dead worker with a new one
  });
} else {
  // Workers can share any TCP connection, e.g., an HTTP server
  app.get("/", (_, res) => {
    res.send(`Hello from Worker ${process.pid}`);
  });

  app.get("/kill", (_, res) => {
    res.json({ msg: `Process ID:${process.pid} killed` });
    cluster.worker.kill();
  });

  // Start the server
  app.listen(PORT, () =>
    console.log(`Worker ${process.pid} started, listening on port ${PORT}`)
  );
}
