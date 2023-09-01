export function pasarImg(params) {
    const {selectorCss,imagenes,idImg}=params,
    d=document,
    w=window,
    $namePags=d.querySelectorAll(selectorCss),
    $imgNamePags=d.getElementById(idImg)

    let i = 0

    $namePags.forEach(el=>{
        el.id=`${imagenes[i]}`
        i++
    })
    
    $namePags.forEach(e=>{
        e.addEventListener("mouseenter",(e)=>{
            if (e.target.matches(selectorCss)) {
                // console.log(e);
                
                $imgNamePags.classList.add("opacity-0")
                setTimeout(() => {
                    $imgNamePags.src=`${e.target.id}.jpg`
                    setTimeout(() => {
                        $imgNamePags.classList.remove("opacity-0")
                    }, 300);
                }, 400);
            }
        })
    })
    

}