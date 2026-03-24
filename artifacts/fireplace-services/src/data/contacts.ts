export const contacts = {
  colin: {
    name: "Colin Hamilton",
    title: "Owner & General Manager",
    phone: "604-761-1518",
    phoneTel: "+16047611518",
    email: "colin@steelstud.ca",
    website: "steelstud.ca",
    description: "Tenant improvement contractor and owner of Strata Property Services. Colin oversees all property maintenance divisions including snow removal, condo renovations, siding, roofing, landscaping, painting, flooring, perimeter drain, mini excavation, and plumbing services.",
  },
  robert: {
    name: "Robert Hamilton",
    title: "Gas & HVAC Division Manager",
    phone: "604-765-8424",
    phoneTel: "+16047658424",
    email: "beewarmh@gmail.com",
    website: "beewarm.ca",
    description: "Licensed Class B Gas Fitter and HVAC specialist. Robert manages all gas fitting, fireplace maintenance, HVAC installations, and plumbing services. Certified under TSBC with Gas Fitter License #CGA0100182243 and Gas Contractor License #LGA0041068.",
  },
  company: {
    name: "Strata Property Services",
    address: "311-1643 East 3rd Ave",
    city: "Vancouver",
    province: "BC",
    postalCode: "V5N 5R6",
    established: 1989,
  },
};

export type ContactPerson = typeof contacts.colin | typeof contacts.robert;

export function getTradeContact(tradeSlug: string) {
  const robertTrades = ["hvac"];
  return robertTrades.includes(tradeSlug) ? contacts.robert : contacts.colin;
}

export function getMainContact() {
  return contacts.colin;
}
