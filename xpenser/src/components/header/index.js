import React from "react";
import './header.css';

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="header">
                    <div className="header-logo">Xpensr <i class="fi-rr-credit-card"></i>.</div>
                    <div className="header-button">
                        <a href="https://github.com/krishnangshusinha" target="_blank" rel="noopener noreferrer"> 
                            <i class="devicon-github-original"></i> Star 
                        </a>
                        {/* The target attribute with _blank value is being used to open the link in a new tab and 
                        the rel attribute with noopener noreferrer value is being used for security reasons.
                        The rel attribute specifies the relationship between the current document and the linked document. 
                        Only used if the href attribute is present.
                        noopenner noreferrer is used for security reasons.
                        Essentially, [noreferrer] keeps external sites from knowing that you have included links to their
                        material on your website.  
                        [noopener] instructs the browser to navigate to the target resource without granting the new browsing
                        context access to the document that opened it. […] This is especially useful when opening untrusted links,
                        in order to ensure they cannot tamper with the originating document… */}
                        
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header; 