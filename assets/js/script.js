const propiedadesJSON = [{
        name: "Casa de campo",
        description: "Un lugar ideal para descansar de la ciudad",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        rooms: 2,
        m: 170
    },
    {
        name: "Casa de playa",
        description: "Despierta tus días oyendo el oceano",
        src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        rooms: 2,
        m: 130
    },
    {
        name: "Casa en el centro",
        description: "Ten cerca de ti todo lo que necesitas",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        rooms: 1,
        m: 80
    },
    {
        name: "Casa rodante",
        description: "Conviertete en un nómada del mundo sin salir de tu casa",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        rooms: 1,
        m: 6
    },
    {
        name: "Departamento",
        description: "Desde las alturas todo se ve mejor",
        src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        rooms: 3,
        m: 200
    },
    {
        name: "Mansión",
        description: "Vive una vida lujosa en la mansión de tus sueños ",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        rooms: 5,
        m: 500
    },
    {
        name: "Mansión 2",
        description: "Vive una vida lujosa en la mansión de tus sueños ",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        rooms: 5,
        m: 599
    }
];

let content = ""

propiedadesJSON.forEach(p => {
    content += `
<div class="propiedad">
<div><img class="img" src="${p.src}" alt=""></div>
<section>
  <h5>${p.name}</h5>
  <div class="d-flex justify-content-between">
      <p>Cuartos: ${p.rooms}</p>
      <p>Metros: ${p.m}</p>
  </div>
  <p class="my-3">${p.description}</p>
  <button class="btn btn-info ">Ver más</button>
</section>
</div>

`
});
const e = document.getElementById("lista")
e.innerHTML = content

const t = propiedadesJSON.length
const dt = document.getElementById("total")
dt.innerHTML = t

function valido($r, $min, $max) {
    if ($r < 1 || $min < 1 || $max < 1) {
        return false
    }
    return true
}

function buscar() {

    let r = parseInt(document.getElementById("rooms").value)
    let min = parseInt(document.getElementById("m2min").value)
    let max = parseInt(document.getElementById("m2max").value)
    r = isNaN(r) ? 0 : r
    min = isNaN(min) ? 0 : min
    max = isNaN(max) ? 0 : max
    if (valido(r, min, max)) {
        const propiedadesfiltradas = propiedadesJSON.filter(p => p.rooms === r &&
            p.m >= min && p.m <= max)
        let content = ""

        propiedadesfiltradas.forEach(p => {
            content += `
        <div class="propiedad">
        <div><img class="img" src="${p.src}" alt=""></div>
        <section>
            <h5>${p.name}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${p.rooms}</p>
                <p>Metros: ${p.m}</p>
            </div>
            <p class="my-3">${p.description}</p>
            <button class="btn btn-info ">Ver más</button>
        </section>
        </div>

      `
        });

        const e = document.getElementById("lista")
        e.innerHTML = content

        const t = propiedadesfiltradas.length
        const dt = document.getElementById("total")
        dt.innerHTML = t
        if (t === 0) {
            alert("Sin resultado")
        }
    } else {
        alert("Faltan campos por llenar")
    }

}