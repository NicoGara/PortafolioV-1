import { contactForm } from "./helpers/contactForm.js";
import { navs } from "./helpers/navs.js";
import { pasarImg } from "./helpers/pasar-img.js";

export function App() {

    pasarImg({
        selectorCss:".nombre-pag",
        imagenes:["tigre-1","tigre-2","tigre-3","dietetica-1"],
        idImg:"nombre-pag-img"
    })

    navs({
        claseNav:".nav",
        claseNavs:".nav-link",
        clasePartes:".parte"
    })

    contactForm({
        classLoader:".contact-form-loader",
        classResponse:".contact-form-response",
        idForm:"formContact"
    
    })
}

