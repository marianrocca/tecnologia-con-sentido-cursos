import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {

  const [carrito, setCarrito] = useState([])

  // AGREGAR PRODUCTOS AL CARRITO
  const addToCart = (producto) => {
    setCarrito((carritoActual) => {

      const productoExistente = carritoActual.find(
        (item) => item.id === producto.id
      )

      if (productoExistente) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }

      return [...carritoActual, { ...producto, cantidad: 1 }]
    })
  }

  // ELIMINAR UN PRODUCTO COMPLETAMENTE
  const removeFromCart = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((producto) => producto.id !== id)
    )
  }

  // DISMINUIR LA CANTIDAD DE UN PRODUCTO
  const decreaseQuantity = (id) => {
    setCarrito((carritoActual) =>
      carritoActual
        .map((producto) =>
          producto.id === id
            ? { ...producto, cantidad: producto.cantidad - 1 }
            : producto
        )
        .filter((producto) => producto.cantidad > 0)
    )
  }

  // CALCULAR LA CANTIDAD TOTAL
  const cantidadTotal = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  )

  return (
    <CartContext.Provider
      value={{
        carrito,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        cantidadTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// HOOK PERSONALIZADO
export function useCart() {
  return useContext(CartContext)
}