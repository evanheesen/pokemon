import React from "react";

import "../App.css";

function NavButton( {handleClick, buttonName, disableButton} ) {

    return (
        <>
            <button
                disabled={disableButton}
                type="button"
                onClick={handleClick}
            >
                {buttonName}
            </button>
        </>
    )
}

export default NavButton;