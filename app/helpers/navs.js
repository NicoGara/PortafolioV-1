export function navs(params) {
    const {claseNav,claseNavs,clasePartes}=params,
    $partes=document.querySelectorAll(clasePartes),
    $navs=document.querySelectorAll(claseNavs),
    $nav=document.querySelector(claseNav)
    

    const callback = (entries) => {
        
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $navs.forEach(e=> e.classList.remove("active"))
                document.querySelector(`[href="#${entry.target.id}"]`).classList.add("active")
            }
            
        })	
    }

    const options = {
        rootMargin: "-50%",
        }

    const observer = new IntersectionObserver(callback,options)

    $partes.forEach(element => {
        observer.observe(element)
    })


    window.addEventListener("scroll",e=>{
        $nav.style.display="flex"
        if (window.scrollY>150) {
            $nav.classList.remove("opacity-0")
        }
        if (window.scrollY<150) {
            $nav.classList.add("opacity-0")
        }
    })



        

}