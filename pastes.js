// pastes.js
// TODO: make this field self fillable in popup
const email = "ivo@custtom.nl";

const pastes = {
  NL: {
    events: [
      { type: "click", target: "label[for='invoice_sir']", delay: false },
      { type: "click", target: "[rel='NL']", delay: false },
      { type: "click", target: "[rel='UT']", delay: true },
    ],
    invoice_first_name: "Bob",
    invoice_pre_name: "de",
    invoice_last_name: "Bakker",
    invoice_company_name: "Bob's Bakkerij",
    invoice_postcode: "3811BT",
    invoice_housenumber: "10",
    invoice_street: "Langegracht",
    invoice_address1: "Langegracht 10",
    invoice_city: "Amersfoort",
    email: email,
    telephone: "0612345678",
  },
  BE: {
    events: [
      { type: "click", target: "label[for='invoice_sir']", delay: false },
      { type: "click", target: "[rel='BE']", delay: false },
      { type: "click", target: "[rel='VOV']", delay: true }
    ],
    invoice_first_name: "Jan",
    invoice_pre_name: "van",
    invoice_last_name: "Dijk",
    invoice_company_name: "Jan's Autogarage",
    invoice_postcode: "4960",
    invoice_housenumber: "23",
    invoice_street: "Av. des Alliés",
    invoice_address1: "Av. des Alliés 23",
    invoice_city: "Malmedy",
    email: email,
    telephone: "+3280339111",
  },
  DE: {
    events: [
      { type: "click", target: "label[for='invoice_sir']", delay: false },
      { type: "click", target: "[rel='DE']", delay: false },
      { type: "click", target: "[rel='HE']", delay: true }
    ],
    invoice_first_name: "Hans",
    invoice_pre_name: "",
    invoice_last_name: "Müller",
    invoice_company_name: "Müller's Werkzeug",
    invoice_postcode: "10115",
    invoice_housenumber: "12",
    invoice_street: "Friedrichstraße",
    invoice_address1: "Friedrichstraße 12",
    invoice_city: "Berlin",
    email: email,
    telephone: "0301234567",
  },
  FR: {
    events: [
      { type: "click", target: "label[for='invoice_sir']", delay: false },
      { type: "click", target: "[rel='FR']", delay: false },
      { type: "click", target: "[rel='FR-08']", delay: true }
    ],
    invoice_first_name: "Jean",
    invoice_pre_name: "",
    invoice_last_name: "Dupont",
    invoice_company_name: "Dupont Électricité",
    invoice_postcode: "75001",
    invoice_housenumber: "18",
    invoice_street: "Rue de Rivoli",
    invoice_address1: "18 Rue de Rivoli",
    invoice_city: "Paris",
    email: email,
    telephone: "0145678901",
  },
  GB: {
    events: [
      { type: "click", target: "label[for='invoice_sir']", delay: false },
      { type: "click", target: "[rel='GB']", delay: false },
      { type: "click", target: "[rel='LND']", delay: true }
    ],
    invoice_first_name: "James",
    invoice_pre_name: "",
    invoice_last_name: "Smith",
    invoice_company_name: "Smith & Co.",
    invoice_postcode: "SW1A 1AA",
    invoice_housenumber: "10",
    invoice_street: "Downing Street",
    invoice_address1: "10 Downing Street",
    invoice_city: "London",
    email: email,
    telephone: "02071234567",
  },
  IE: {
    events: [
      { type: "click", target: "label[for='invoice_sir']", delay: false },
      { type: "click", target: "[rel='IE']", delay: false },
      { type: "click", target: "[rel='CW']", delay: true }
    ],
    invoice_first_name: "Liam",
    invoice_pre_name: "",
    invoice_last_name: "O'Brien",
    invoice_company_name: "O'Brien Construction",
    invoice_postcode: "D02 F838",
    invoice_housenumber: "25",
    invoice_street: "Grafton Street",
    invoice_address1: "25 Grafton Street",
    invoice_city: "Dublin",
    email: email,
    telephone: "012345678",
  },
  US: {
    events: [
      { type: "click", target: "label[for='invoice_sir']", delay: false },
      { type: "click", target: "[rel='US']", delay: false },
      { type: "click", target: "[rel='NY']", delay: true }
    ],
    invoice_first_name: "John",
    invoice_pre_name: "",
    invoice_last_name: "Doe",
    invoice_company_name: "Doe's Supplies",
    invoice_postcode: "10001",
    invoice_housenumber: "123",
    invoice_street: "Main Street",
    invoice_address1: "123 Main Street",
    invoice_city: "New York",
    email: email,
    telephone: "2125551234",
  },
  AT: {
    events: [
      { type: "click", target: "label[for='invoice_sir']", delay: false },
      { type: "click", target: "[rel='AT']", delay: false },
      { type: "click", target: "[rel='TIR']", delay: true }
    ],
    invoice_first_name: "Franz",
    invoice_pre_name: "von",
    invoice_last_name: "Habsburg",
    invoice_company_name: "Habsburg Engineering",
    invoice_postcode: "1010",
    invoice_housenumber: "5",
    invoice_street: "Kärntner Straße",
    invoice_address1: "Kärntner Straße 5",
    invoice_city: "Vienna",
    email: email,
    telephone: "015555678",
  }, 
};

export default pastes;