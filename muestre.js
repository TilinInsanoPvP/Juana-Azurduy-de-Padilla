document.querySelectorAll(".modal-container img").forEach(el=>{
    el.addEventListener("click", function(ev){
        this.parenNode.classlist.add("active")
    })
})