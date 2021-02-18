import { forwardRef } from 'react';
import classNames from 'classnames';
import MenuToggle from './MenuToggle';
import { useMenu } from './hooks/useMenu';
import useEventListener from './hooks/useEventListener';

const Submenu = forwardRef(({
  buttonText,
  children,
  icon,
}, ref) => {
  const { isOpen, setIsOpen, toggle } = useMenu();
  
  let parent = ref.current ?? ref.current;

  const handleMouseOut = (event) => {
    setTimeout(() => {
      setIsOpen(false)
    }, 250);
  }
  
  useEventListener('mouseleave', handleMouseOut, parent);

  const handleKeyDown = (event) => {
    if ((event.type === 'keydown' && event.keyCode === 27)) {
      setIsOpen(false)
    }
  }

  const handleBlur = (ref, event) => {
    if(event.relatedTarget &&
      !(event.currentTarget.parentNode).contains(event.relatedTarget)
      && !ref.current.contains(event.relatedTarget) ) {
      setIsOpen(false)
    }
  }

  const menuClass = classNames(
    'settings-controls__container',
    'settings-controls__container--submenu',
    {
    'is-open': isOpen
  });
  
  return (
    <section className={menuClass}>
      <MenuToggle
        buttonText={buttonText}
        icon={icon}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggle={toggle}
      />
      <div 
        className="settings-controls__options"
        role="presentation"
        onKeyDown={handleKeyDown}
        onBlur={(event) => handleBlur(ref,event)}
        ref={ref}
      >
        {children}
      </div>
    </section>
  )
})

export default Submenu
