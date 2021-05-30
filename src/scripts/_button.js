

// Import only ths js files no other codes

//ripple effect for buttons
let btns = document.getElementsByClassName("p-btn");
for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.onclick = function (e) {
        // Create span element
        let ripple = document.createElement("span");
        // Add ripple class to span
        ripple.classList.add("ripple");
        // Add span to the button
        this.appendChild(ripple);
        // Get position of X
        let x = e.clientX - e.target.offsetLeft;
        // Get position of Y
        let y = e.clientY - e.target.offsetTop;
        // Position the span element
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        // Remove span after 0.3s
        setTimeout(() => {
            ripple.remove();
        }, 400);
    
    };
}

//login logo for buttons
let login_buttons = document.getElementsByClassName("p-btn-login")
for (let i = 0; i < login_buttons.length; i++) {
    const btn = login_buttons[i];
    btn.innerHTML +='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/></svg>'
    
}

let cart_buttons = document.getElementsByClassName("p-btn-cart")
for (let i = 0; i < cart_buttons.length; i++) {
    const btn = cart_buttons[i];
    btn.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>'    
}

let play_buttons = document.getElementsByClassName("p-btn-play")
for (let i = 0; i < play_buttons.length; i++) {
    const btn = play_buttons[i];
    btn.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>'
}

let pause_buttons = document.getElementsByClassName("p-btn-pause")
for (let i = 0; i < pause_buttons.length; i++) {
    const btn = pause_buttons[i];
    btn.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>'
}


let add_buttons = document.getElementsByClassName("p-btn-add")
for (let i = 0; i < add_buttons.length; i++) {
    const btn = add_buttons[i];
    btn.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/></svg>'
}

let minus_buttons = document.getElementsByClassName("p-btn-minus")
for (let i = 0; i < minus_buttons.length; i++) {
    const btn = minus_buttons[i];
    btn.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg>'
}

let disabled_buttons = document.getElementsByClassName('p-btn-disable')
for (let i = 0; i < disabled_buttons.length; i++) {
    const btn = disabled_buttons[i];
    btn.setAttribute('disabled','True')
    
}

