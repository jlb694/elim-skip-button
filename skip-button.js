class SkipButton extends HTMLElement {
    
    constructor() {
        super();
    }
    
    connectedCallback() {
        
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = "<style>a {opacity: 0;  display: block; width: 100%; height: 50%; text-align: center; color: white; background-color: black; padding: 5px; font-size: 1.5em;} a:focus {opacity: 1;} </style><a href='#" + document.getElementsByTagName('section').item('1').id + "'>Skip to content</a><a href='/sitemap'>Site Map</a>";

    }
}

customElements.define('skip-button', SkipButton);
