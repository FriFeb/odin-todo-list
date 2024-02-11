export function setInvalid(element) {
  element.classList.add('is-invalid');
  element.classList.remove('is-valid');
}

export function setValid(element) {
  element.classList.add('is-valid');
  element.classList.remove('is-invalid');
}

export function resetValidity(element) {
  element.classList.remove('is-invalid');
  element.classList.remove('is-valid');
}
