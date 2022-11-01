const { Router, request } = require("express");
const router = Router();
const Contenedor = require("../controllers/productsController.js");
const productos = new Contenedor("./controllers/productos.json");
const notFound = { error: "Producto no encontrado" };

/* ok: 200
   created: 201
   no content: 204
   bad request: 400
   not found: 404
   internal server error: 500
    */

router.get("/", async (req, res) => {
    console.log(`getAll req recibida con exito`);
    const arrayProductos = await productos.getById();
    !arrayProductos && res.status(404).json(notFound);
    res.status(200).json(arrayProductos);
});

router.get("/:id", async (req, res) => {
    console.log(`getById req recibida con exito`);
    const id = parseInt(req.params.id);
    const producto = await productos.getAll(id);
    !producto && res.status(404).json(notFound);
    res.status(200).json(arrayProductos);
});

router.post("/", async (req, res) => {
    console.log(`post req recibida con exito`);
    const data = req.body;
    console.log(data);
    const nuevoProducto = await productos.save(data);
    !data && res.status(204).json(notFound);
    res.status(201).json(data);
});

router.get("/", async (req, res) => {
    console.log(`Get req recibida con exito`);
    const arrayProductos = await productos.getAll();
    !arrayProductos && res.status(404).json(notFound);
    res.status(200).json(arrayProductos);
});

module.exports = router;
