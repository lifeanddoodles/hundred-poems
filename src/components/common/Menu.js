import React from 'react';
import classNames from 'classnames';
import MenuToggle from './MenuToggle';
import { useMenu } from './hooks/useMenu';

const Menu = ({
  buttonText,
  children,
  icon,
}) => {
  const { isOpen, setIsOpen, toggle } = useMenu();

  const menuClass = classNames(
    'settings-controls__container',
    'settings-controls__container--mobile',
    {
    'is-open': isOpen,
  });

  return (
    <section className={menuClass}>
      <MenuToggle
        buttonText={buttonText}
        icon={icon}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggle={toggle}
        mobileNav={true}
      />
      <div 
        className="settings-controls__options"
        role="presentation"
      >
        {children}
      </div>
    </section>
  )
}

export default Menu
