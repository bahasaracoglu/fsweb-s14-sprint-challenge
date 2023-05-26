// Server'ı buradan başlatın
const server = require("./api/server");
const PORT = process.env.PORT || "9000";

server.listen(PORT, () => `Server is listening on ${PORT}`);
