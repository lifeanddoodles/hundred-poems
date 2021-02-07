export const handleBlur = (refElement, setIsOpen, event) => {

  if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget) && !refElement.current.contains(event.relatedTarget)) {
    // Not triggered when swapping focus between children
    // if(!event.currentTarget.contains(event.relatedTarget)) {console.log('currentTarget does not contain relatedTarget')}
    // if(!refElement.current.contains(event.relatedTarget)) {console.log('refElement does not contain relatedTarget')}
    setIsOpen(false)
  }
}

export const valueToBoolean = (value) => {
  if (value !== 'false') {
    return !!value;
  }
  return false
}