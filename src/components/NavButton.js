import React from "react";

import "../App.css";

function NavButton( {setNavigation, navigationName, disableButton} ) {

    return (
        <>
            <button
                disabled={disableButton}
                type="button"
                onClick={() => setNavigation}
            >
                {navigationName}
            </button>
        </>
    )
}

export default NavButton;