let response = pm.response.json()

pm.test("Respuesta del servidor es OK:", ()=> {
    pm.response.to.have.status(200)
})

pm.test("Total de productos devueltos:", ()=> {
    console.log("Productos devueltos:", response.length)
})

pm.test("Retorna al menos 10 productos:", ()=> {
    pm.expect(response.length).is.greaterThanOrEqual(10)
})

pm.test("El nombre de los Productos está completo", ()=> {
    let resultado = response.filter((producto)=> producto.nombre.trim() === "" )
    pm.expect(resultado.length).to.be.equal(0)
})
