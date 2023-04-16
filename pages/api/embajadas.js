const embajadas = [
  {
    id: "ARG",
    pais: "Argentina",
    direccion: "Königsallee 23, 40212 Düsseldorf, Alemania",
    telefono: "+49 211 863 228 0",
    pagina_web: "http://www.embajadaargentina.de/",
    bandera: "https://flagcdn.com/64x48/ar.png",
  },
  {
    id: "BOL",
    pais: "Bolivia",
    direccion: "Kurfürstendamm 72, 10709 Berlín, Alemania",
    telefono: "+49 30 8892 190",
    pagina_web: "https://www.embajadadebolivia.de/",
    bandera: "https://flagcdn.com/64x48/bo.png",
  },
  {
    id: "BRA",
    pais: "Brasil",
    direccion: "Unter den Linden 10, 10117 Berlín, Alemania",
    telefono: "+49 30 72628 0",
    pagina_web: "http://berlim.itamaraty.gov.br/pt-br/",
    bandera: "https://flagcdn.com/64x48/br.png",
  },
  {
    id: "CHI",
    pais: "Chile",
    direccion: "Am Kleinen Tiergarten 14, 10587 Berlín, Alemania",
    telefono: "+49 30 206 295 0",
    pagina_web: "http://chile.gob.cl/alemania/",
    bandera: "https://flagcdn.com/64x48/cl.png",
  },
  {
    id: "COL",
    pais: "Colombia",
    direccion: "Crellestraße 14, 10827 Berlín, Alemania",
    telefono: "+49 30 2404 7930",
    pagina_web: "https://alemania.embajada.gov.co/",
    bandera: "https://flagcdn.com/64x48/co.png",
  },
  {
    id: "CRI",
    pais: "Costa Rica",
    direccion: "Rheinstraße 41, 12161 Berlín, Alemania",
    telefono: "+49 30 7978 6842",
    pagina_web: "https://www.costarica-embassy.de/",
    bandera: "https://flagcdn.com/64x48/cr.png",
  },
  {
    id: "CUB",
    pais: "Cuba",
    direccion: "Stavangerstr. 20, 10439 Berlín, Alemania",
    telefono: "+49 30 4465 690",
    pagina_web: "http://misiones.minrex.gob.cu/deutschland",
    bandera: "https://flagcdn.com/64x48/cu.png",
  },
  {
    id: "DOM",
    pais: "República Dominicana",
    direccion: "Schillstr. 20, 10785 Berlín, Alemania",
    telefono: "+49 30 229 1400",
    pagina_web: "http://www.embajadadominicana.de/",
    bandera: "https://flagcdn.com/64x48/do.png",
  },
  {
    id: "ECU",
    pais: "Ecuador",
    direccion: "Schillerstr. 5, 10625 Berlín, Alemania",
    telefono: "+49 30 3110 806",
    pagina_web: "https://www.embajadaecuador.de/",
    bandera: "https://flagcdn.com/96x72/ec.png",
  },
  {
    id: "SLV",
    pais: "El Salvador",
    direccion: "Lützowufer 26, 10787 Berlín, Alemania",
    telefono: "",
    pagina_web: "",
    bandera: "https://flagcdn.com/96x72/sv.png",
  },
  {
    id: "GTM",
    pais: "Guatemala",
    direccion: "Clayallee 342, 14169 Berlín, Alemania",
    telefono: "+49 30 84 19 78 0",
    pagina_web: "https://embajadadeguatemala.de/",
    bandera: "https://flagcdn.com/96x72/gt.png",
  },
  {
    id: "HND",
    pais: "Honduras",
    direccion: "Nürnberger Str. 32, 10777 Berlín, Alemania",
    telefono: "+49 30 2362 1480",
    pagina_web: "http://embajadahondurasalemania.com/",
    bandera: "https://flagcdn.com/96x72/hn.png",
  },
  {
    id: "MEX",
    pais: "México",
    direccion: "Klingelhöferstr. 3, 10785 Berlín, Alemania",
    telefono: "+49 30 269 323 0",
    pagina_web: "https://embamex.sre.gob.mx/alemania/",
    bandera: "https://flagcdn.com/96x72/mx.png",
  },
  {
    id: "NIC",
    pais: "Nicaragua",
    direccion: "Invalidenstr. 110, 10115 Berlín, Alemania",
    telefono: "+49 30 206 2250",
    pagina_web: "https://www.embajadadenicaragua.de/",
    bandera: "https://flagcdn.com/96x72/ni.png",
  },
  {
    id: "PAN",
    pais: "Panamá",
    direccion: "Meinekestr. 6, 10719 Berlín, Alemania",
    telefono: "+49 30 3199 5901",
    pagina_web: "http://www.embajadadepanama.de/",
    bandera: "https://flagcdn.com/96x72/pa.png",
  },
  {
    id: "PRY",
    pais: "Paraguay",
    direccion: "Friedrichstr. 200, 10117 Berlín, Alemania",
    telefono: "+49 30 555 162 0",
    pagina_web: "http://www.paraguay-botschaft.de/",
    bandera: "https://flagcdn.com/96x72/pa.png",
  },
  {
    id: "PER",
    pais: "Perú",
    direccion: "Mohrenstr. 42, 10117 Berlín, Alemania",
    telefono: "+49 30 206 2970",
    pagina_web: "https://www.embajadaperu.de/",
    bandera: "https://flagcdn.com/96x72/pe.png",
  },
  {
    id: "PRI",
    pais: "Puerto Rico",
    direccion: "Schaperstr. 29, 10719 Berlín, Alemania",
    telefono: "+49 30 236 25 50",
    pagina_web: "https://www.puertorico.de/",
    bandera: "https://flagcdn.com/96x72/pr.png",
  },
  {
    id: "DOM",
    pais: "República Dominicana",
    direccion: "Schillstr. 20, 10785 Berlín, Alemania",
    telefono: "+49 30 229 1400",
    pagina_web: "http://www.embajadadominicana.de/",
    bandera: "https://flagcdn.com/96x72/do.png",
  },
  {
    id: "URY",
    pais: "Uruguay",
    direccion: "Lützowufer 26, 10787 Berlín, Alemania",
    telefono: "+49 30 23 62 36 64",
    pagina_web: "https://www.uruguay.de/",
    bandera: "https://flagcdn.com/96x72/uy.png",
  },
];

export default function handler(req, res) {
  res.status(200).json(embajadas);
}
