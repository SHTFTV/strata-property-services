export const contacts = {
  colin: {
    name: "Colin Hamilton",
    title: "Owner & General Manager",
    phone: "604-761-1518",
    phoneTel: "+16047611518",
    email: "info@stratapropertyservices.com",
    website: "steelstud.ca",
    description: "Tenant improvement contractor and owner of Strata Property Services. Colin oversees all property maintenance divisions including snow removal, condo renovations, siding, roofing, landscaping, painting, flooring, perimeter drain, mini excavation, plumbing, drywall, and restoration services.",
  },
  robert: {
    name: "Robert Hamilton",
    title: "Gas & HVAC Division Manager",
    phone: "604-765-8424",
    phoneTel: "+16047658424",
    email: "info@stratapropertyservices.com",
    website: "beewarm.ca",
    description: "Licensed Class B Gas Fitter and HVAC specialist. Robert manages all gas fitting, fireplace maintenance, HVAC installations, and plumbing services. Certified under TSBC with Gas Fitter License #CGA0100182243 and Gas Contractor License #LGA0041068.",
  },
  vee: {
    name: "Vee",
    title: "ACC Construction Ltd — Roofing Division",
    phone: "778-636-7714",
    phoneTel: "+17786367714",
    email: "acconstructionltd@gmail.com",
    website: "strataroofers.com",
    description: "ACC Construction Ltd specializes in flat roof, pitched roof, and emergency roof repairs for Strata and commercial properties across the Lower Mainland.",
  },
  company: {
    name: "Strata Property Services",
    email: "info@stratapropertyservices.com",
    address: "19906 32 Ave",
    city: "Langley",
    province: "BC",
    postalCode: "V3A 4T1",
    established: 1989,
  },
};

export type ContactPerson = typeof contacts.colin | typeof contacts.robert | typeof contacts.vee;

export function getTradeContact(tradeSlug: string) {
  if (tradeSlug === "hvac") return contacts.robert;
  if (tradeSlug === "roofing") return contacts.vee;
  return contacts.colin;
}

export function getMainContact() {
  return contacts.colin;
}
