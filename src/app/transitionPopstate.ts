import { Observable } from 'rxjs';

export const navigationCustom = ( goto ) => {
    startTx();
    setTimeout(() => {
        endTx();
        goto();
    }, 10);
}

export const startTx = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    var div = document.createElement('div');

    div.classList.add("loadScreen");
    div.classList.add('curtain');
    div.style.backgroundImage = '';
    div.style.backgroundColor = '#000';
    div.style.opacity = '1';
    div.setAttribute("id", "waitScreen");

    document.body.appendChild(div);
    document.getElementById("waitScreen").style.width = '100%';
}

export const endTx = () => {
    document.getElementById("waitScreen").style.opacity = '0';
    setTimeout(() => {
        document.body.style.overflow = 'auto';
        document.body.style.pointerEvents = 'auto';
        document.body.removeChild(document.getElementById("waitScreen"));
    }, 1200);   
}