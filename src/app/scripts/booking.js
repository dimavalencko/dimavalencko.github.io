function selectAdditionalService(service) {
  const element = document.getElementById(`service_${service}`);

  element.classList.contains('additional-service__selected') ?
    element.classList.remove('additional-service__selected')
    :
    element.classList.add('additional-service__selected');
}

function makeReservation() {
  alert()
}