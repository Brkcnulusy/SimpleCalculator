var sonuc;


function hesapla(){

    let islem = document.getElementById("islem").value;

    let sayi1 = document.getElementById("sayi1").value;
    let sayi2 = document.getElementById("sayi2").value;

    let s1 = Number(sayi1);
    let s2 = Number(sayi2);

    if (islem == 'T'){
        sonuc = s1 + s2;

        
    }
    else if (islem == 'C'){
        sonuc = s1 - s2;
        
    }
    else if (islem == 'CA'){
        sonuc = s1 * s2;
        
    }
    else if (islem == 'B'){
        sonuc = s1 / s2;
        
    }

    document.getElementById("son").innerHTML ="Sonuç = " + sonuc;

    
}
hesapla();


let hesaplBtn = document.getElementById("button1");

hesaplBtn.onclick = hesapla;


















