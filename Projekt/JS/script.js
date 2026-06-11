const keyMap = {
    // First row för min första linje
    KeyA: "a",
    KeyS: "s",
    KeyD: "d",
    KeyF: "f",
    KeyG: "g",
    KeyH: "h",
    KeyJ: "j",
    KeyK: "k",
    KeyL: "l",

    // Second  för min keyboRD
    KeyQ: "q",
    KeyW: "w",
    KeyE: "e",
    KeyR: "r",
    KeyT: "t",
    KeyY: "y",
    KeyU: "u",
    KeyI: "i",
    KeyO: "o",
    KeyP: "p",

    // tredje rad för min keyboard
    KeyZ: "z",
    KeyX: "x",
    KeyC: "c",
    KeyV: "v",
    KeyB: "b",
    KeyN: "n",
    KeyM: "m",

    // number för min keyboard
    Digit1: "one",
    Digit2: "two",
    Digit3: "three",
    Digit4: "four",
    Digit5: "five",
    Digit6: "six",
    Digit7: "seven",
    Digit8: "eight",
    Digit9: "nine",
    Digit0: "zero",

    // special keybinds 
    Space: "space",
    Enter: "enter",
    Backquote: "backtick",
    Tab: "tab",
    CapsLock: "capslock",
    ControlLeft: "ctrl",
    AltLeft: "alt",
    AltRight: "alt-gr"
};


// KEY DOWN code
document.addEventListener("keydown", (event) => {
    let id = keyMap[event.code];

    if (id) {
        let element = document.getElementById(id);
        if (element) {
            element.classList.add("active-key");
        }
    }
});


// KEY UP code 
document.addEventListener("keyup", (event) => {
    let id = keyMap[event.code];

    if (id) {
        let element = document.getElementById(id);
        if (element) {
            element.classList.remove("active-key");
        }
    }
});


//Btw några fungerar inte till exempel min backspace Fn och fn lock men förutom det så fungerar 