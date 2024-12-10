// pastes.js
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
    email: "ivo@custtom.nl",
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
    email: "ivo@custtom.nl",
    telephone: "0612345678",
  },
};

export default pastes;