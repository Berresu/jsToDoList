let girilen=document.getElementById("txtGirilen");
let ekle=document.getElementById("btnEkle");
let liste=document.getElementById("liste");
let secilen;

function listeyeEkle(){
    let eklenecek=girilen.value;
    let eklenen=document.createElement("li");
    liste.appendChild(eklenen);
    eklenen.innerHTML=eklenecek

    let sil=document.createElement("div");
    eklenen.appendChild(sil);
    sil.innerHTML="X";
    sil.setAttribute("class","close");
    sil.addEventListener("click", listedenSil);

    let yapıldı=document.createElement("div");
    eklenen.appendChild(yapıldı);
    yapıldı.innerHTML="✔";
    yapıldı.setAttribute("class","bitti");
    yapıldı.addEventListener("click", ()=>{
        secilen=event.currentTarget.parentNode;
        secilen.style.textDecoration="line-through";
    });
}

function listedenSil(){
    secilen=event.currentTarget.parentNode;
    secilen.remove();
}
