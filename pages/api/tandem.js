const tandems = [
  {
    id: "t1",
    nombre: "Melting Pot",
    direccion: "Richard-Wagner-Str. 39, 50674 Köln",
    telefono: "0171 9836881",
    pagina_web: "https://www.instagram.com/socialmeltingpot/?hl=es",
    date: "Miercoles, 19.00 H",
  },
  {
    id: "t2",
    nombre: "Motoki",
    direccion: "Richard-Wagner-Str. 39, 50674 Köln",
    telefono: "0171 9836881",
    pagina_web: "https://2020.motoki-kollektiv.de/",
    date: "Jueves, 19.30 H",
  },
  {
    id: "t3",
    nombre: "Allerweltshaus e.V",
    direccion: "Geisselstraße 3-5, 50823 Köln",
    telefono: "0221 57779930",
    pagina_web: "https://www.allerweltshaus.de",
    date: "Jueves, 19.30 H",
  },
  {
    id: "t4",
    nombre: "TANDEM Uni TH Köln",
    direccion: "Geisselstraße 3-5, 50823 Köln",
    telefono: "0221 57779930",
    pagina_web: "https://www.th-koeln.de/internationales/tandem_66126.php",
    date: "Lunes, 19.00 H",
  },
];

export default function handler(req, res) {
  res.status(200).json(tandems);
}
