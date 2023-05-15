const toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
        {
        "kind": "block",
        "type": "controls_if"
        },
        {
        "kind": "block",
        "type": "controls_repeat_ext"
        },
        {
        "kind": "block",
        "type": "logic_compare"
        },
        {
        "kind": "block",
        "type": "math_number"
        },
        {
        "kind": "block",
        "type": "math_arithmetic"
        },
        {
        "kind": "block",
        "type": "text"
        },
        {
        "kind": "block",
        "type": "text_print"
        },
    ]
}

const workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});

function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      elem.style.width = '0%'; 
      elem.innerHTML = '0%';
    } else {
      width++;
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}