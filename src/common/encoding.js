import { Base64 } from "js-base64";

const Encrypt = (email, password) => {
  let plainText = email + "-" + password;
  return Base64.encode(plainText);
};

const Decrypt = (cipherText) => {
  return Base64.decode(cipherText);
};

export { Encrypt, Decrypt };
