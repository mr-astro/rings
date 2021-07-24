const rings = 5
const openRing = 20
const closeRing = 35
let totalChain = 0
const chain =() => {
    for (i = 1; i < rings; i++) {
        if ((i % 2) == 0) {
            console.log(`Se abre el anillo ${i} y se intruducen los anillos ${i-1} ${i+1} y se cierra el anillo ${i}`)
            totalChain = totalChain + (openRing + closeRing)
        }
    }
    console.log(`El costo total de la operacion es de $${totalChain}`)
}


chain()