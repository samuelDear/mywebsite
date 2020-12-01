import { Observable } from 'rxjs';

export const navigationCustom = ( goto ) => {
    startTx();
    setTimeout(() => {
        endTx();
        goto();
    }, 3000);
}

export const startTx = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    var div = document.createElement('div');
    var name = document.createElement('p');
    var hr = document.createElement('div');

    div.classList.add("loadScreen");
    div.classList.add('curtain');
    div.setAttribute("id", "waitScreen");

    name.innerHTML = 'Samuel Rojas';
    name.classList.add('name');

    hr.classList.add('loadingLine');

    div.appendChild(name);
    div.appendChild(hr);

    document.body.appendChild(div);
    div.style.width = '0%';
    setTimeout(() => {
        document.getElementById("waitScreen").style.width = '100%';
    }, 2);
}

export const endTx = () => {
    document.getElementById("waitScreen").style.width = '0%';
    setTimeout(() => {
        document.body.style.overflow = 'auto';
        document.body.style.pointerEvents = 'auto';
        document.body.removeChild(document.getElementById("waitScreen"));
    }, 1200);
    
}