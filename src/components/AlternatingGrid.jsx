export default function AlternatingGrid({ imgTablet, imgComputadora, imgTelefono, imgTarjeta }) {
    debugger
  return (
    <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <img
              src={imgTablet}
              alt="Vista tablet del sitio"
              width={300}
              height={200}
              className="rounded-lg shadow-lg w-full"
            />
            <img
              src={imgComputadora}
              alt="Vista computadora del sitio"
              width={300} 
              height={200}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-8">
            <img
              src={imgTelefono}
              alt="Vista teléfono del sitio"
              width={300}
              height={200}
              className="rounded-lg shadow-lg w-full"
            />
            <img
              src={imgTarjeta}
              alt="Vista tarjeta del sitio"
              width={300}
              height={200}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
    </div>
  )
}
