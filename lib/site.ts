export const contact = {
  // digits only, with country code: used for wa.me and tel: links
  phoneDigits: "918454014703",
  phoneDisplay: "+91 84540 14703",
  email: "nifsperfume@gmail.com",
};

export const telHref = `tel:+${contact.phoneDigits}`;

export function whatsappHref(message: string): string {
  return `https://wa.me/${contact.phoneDigits}?text=${encodeURIComponent(message)}`;
}
