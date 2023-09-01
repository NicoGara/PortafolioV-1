export function contactForm(params) {
    const {classLoader,classResponse,idForm}=params
    const d=document,
     w=window,
     n=w.navigator
    
    
    
    
    d.addEventListener("DOMContentLoaded", ()=>{
        validacionFormulario()
    })
    
    
    
    
    
    function validacionFormulario() {
    
        const $form= d.getElementById(`${idForm}`),
        $inputs = d.querySelectorAll(`#${idForm} [required]`)
    
    
        // $inputs.forEach(input => {
        //     const $span=d.createElement("span")
        //     $span.id=input.name;
        //     $span.textContent=input.title;
        //     $span.classList.add("contact-form-error", "none")
        //     input.insertAdjacentElement("afterend", $span)
        // });
    
        d.addEventListener("keyup",(e)=>{
            if (e.target.matches(`#${idForm} [required]`)) {
                let $input=e.target,
                pattern= $input.pattern || $input.dataset.pattern;

                if (pattern && $input.value!=="") {
                    let regex = new RegExp(pattern)
                    
                    !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-invalid")
                    : d.getElementById($input.name).classList.remove("is-invalid");
                    
                    
                }
                if (!pattern) {
                    $input.value===""
                    ? d.getElementById($input.name).classList.add("is-invalid")
                    : d.getElementById($input.name).classList.remove("is-invalid");
                }
            }
        })
    
        d.addEventListener("submit",e=>{
            e.preventDefault();
            alert("enviando formulario")
    
            const $loader=d.querySelector(classLoader),
            $response=d.querySelector(classResponse)
    
            $loader.classList.remove("none")
    
            fetch("https://formsubmit.co/ajax/nicolasgaravaglia@hotmail.com",{
                method: "POST",
                body:new FormData(e.target)
            })
             .then(res=>res.json())
             .then(json=>{
                // console.log(json);
                $loader.classList.add("none")
                $response.classList.remove("none")
                $response.innerHTML=`<p>${json.message}</p>`
                $form.reset()
             })
             .catch(err=>{
                console.log(err);
                let message=err.statusText||"Ocurrio un error al enviar, intenta nuevamente"
                $response.innerHTML= `Error ${err.status}: ${message}`;
    
                $response.innerHTML=`<p>${json.message}</p>`
             }).finally(()=>{
                setTimeout(() =>$response.classList.add("none"), 3000);
             })
        })
    }
    
}
