import { useState } from 'react';
// import debounce from 'lodash/debounce';

export const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  // const toggle = debounce(() => setIsOpen(current => !current))
  const toggle = () => setIsOpen(current => !current)

  return {
    isOpen,
    setIsOpen,
    toggle,
  }
}