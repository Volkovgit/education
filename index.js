const http = require("http");
const PORT = process.env.PORT || 5000;
const EventEmitter = require("events");
const Application = require("./framework/Application");
const emitter = new EventEmitter();
const userRouter = require('./src/user-routers')
const jsonParser = require('./framework/parseJson')
const urlParser = require('./framework/parseUrl')

const app = new Application();
app.addRouter(userRouter)
app.use(jsonParser);
app.use(urlParser('http://localhost:5000'));

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
