export const contact = {
  // digits only, with country code: used for wa.me and tel: links
  phoneDigits: "919820664622",
  phoneDisplay: "+91 98206 64622",
  email: "nifsperfume@gmail.com",
};

export const telHref = `tel:+${contact.phoneDigits}`;

export function whatsappHref(message: string): string {
  return `https://wa.me/${contact.phoneDigits}?text=${encodeURIComponent(message)}`;
}
