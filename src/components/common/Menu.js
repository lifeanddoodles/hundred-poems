import React, {createContext, useState} from 'react';
import MenuToggle from "./MenuToggle";

export const MenuContext = createContext();

const Menu = React.forwardRef((props, ref) => {
    const {buttonText, icon, isMobileNav, children} = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
    <MenuContext.Provider value={{ref, isOpen, setIsOpen}}>
      <section
        className={`settings-controls__container ${isOpen ? 'is-open' : ''}  ${isMobileNav ? 'settings-controls__container--mobile' : 'settings-controls__container--submenu'}`}
        ref={ref}
      >
        <MenuToggle
          buttonText={buttonText}
          icon={icon}
        />
        <div className={`settings-controls__options`} role="presentation">
        {children}
        </div>
      </section>
    </MenuContext.Provider>
    )
  })

export default Menu
