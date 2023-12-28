//Le damos la bienvenida al usuario en la pagina de reserva
alert("Bienvenidos a la pagina provedora de tennis de isla baleares ");

//El usuario ingresa su nombre
let nombrecliente;

nombrecliente = prompt("Ingrese su nombre completo: ");
alert("Bienvenida a la pagina provedora de pelotas de tennis de isla baleares: " + nombrecliente);

//aplico arrays
const productos = [
    { nombre: "Pelotas Penn", precio: 78 },
    { nombre: "Pelotas Head", precio: 103 },
    { nombre: "Pelotas Babolat", precio: 110 },
    { nombre: "Pelotas Wilson", precio: 93 }, 
];
let carrito = []
//metodo de entrada y salida promt , alert y consol.log

let seleccion = prompt ("Hola desea comprar algun producto si o no")

//bucle aplicando while

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt ("Hola desea comprar algo  si o no")
}

if (seleccion == "si"){
    alert ("a continuación nuestro catalogo")
    //para recorrer productos aplico metodo map
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "€");
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert ("Gracias por venir, hasta pronto!!")
}

//genero otro bucle con while
while(seleccion != "no"){
    let producto = prompt ("Agrega producto a tu carrito")
    let precio = 0

    if(producto == "Pelotas Penn" || producto == "Pelotas Head" || producto == "Pelotas Babolat" || producto == "Pelotas Wilson"){
        switch(producto){
            case "Pelotas Penn":
            precio = 78;
            break;
            case "Pelotas Head":
            precio = 103;
            break;
            case "Pelotas Babolat":
            precio = 110;
            break;
            case "Pelotas Wilson":
            precio = 93;
            break;
            default:
            break;
        }
        //creo variable
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("No disponemo de ese producto")
    }

    seleccion = prompt ("desea seguir comprando?")
    while(seleccion === "no"){
        alert("gracias por la compra! Hasta pronto")
        carrito.forEach((carritoFinal) => {console.log (`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

//Aplico metodo array reduce para total final de la compra

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)