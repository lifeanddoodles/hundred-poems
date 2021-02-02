import React, {useState} from 'react';
import MenuToggle from "./MenuToggle";

const Menu = React.forwardRef((props, ref) => {
    const {buttonText, icon, isMobileNav, children} = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
    <section
      className={`settings-controls__container ${isOpen ? 'is-open' : ''}  ${isMobileNav ? 'settings-controls__container--mobile' : 'settings-controls__container--submenu'}`}
      ref={ref}
      // onBlur={(e) => handleBlur(ref, e)}
    >
      <MenuToggle
        buttonText={buttonText}
        icon={icon}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        // onBlur={(e) => handleBlur(ref, e)}
        // handleBlur={handleBlur}
        menuRef={ref}
      />
      <div className={`settings-controls__options`} role="presentation">
      {children}
      </div>
    </section>
    )
  })

export default Menu