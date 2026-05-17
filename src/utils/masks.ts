export const formatPhone = (value: string) => {
  if (!value) return "";
  const cleaned = value.replace(/\D/g, "");
  
  if (cleaned.length <= 2) {
    return `(${cleaned}`;
  }
  if (cleaned.length <= 7) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  }
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
};

export const createWhatsAppLink = (phone: string, text: string) => {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedText = encodeURIComponent(text);
  // Using 55 for Brazil country code as standard
  return `https://wa.me/55${cleanPhone}?text=${encodedText}`;
};
