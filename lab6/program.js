function RectColorChange() {
    let rct = document.getElementById("rect");
    rct.style.backgroundColor = "red";
    rct.onclick = function() {
        this.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    }
}

function CustomList() {
    const list_header = document.createElement('button');
    list_header.classList.add('list-header');
    list_header.type = 'submit';
    list_header.textContent = 'Choose language:';

    const list = document.createElement('div');
    list.classList.add('my-list');
    let arr = ["Russian", "English", "Japan", "Turkish", "German", "Italian"];
    let elem = document.createElement('div');
    elem.classList.add('list-elem');
   
    for (var i = 0; i < arr.length; ++i) {
        elem.value = arr[i];
        elem.textContent = arr[i];
        list.appendChild(elem.cloneNode(true));
    }

    list_header.addEventListener('click', (evt) => {
           list.classList.toggle('close-list');
    });

    document.body.appendChild(list_header);
    document.body.appendChild(list);
}

function CreateBall() {
    const zona = document.createElement('div');
    zona.classList.add('zona');

    let ball = document.createElement('div');
    ball.classList.add('ball');

    var listener = function(e) {
            document.onmousemove = function(e){
                if (ball.classList.contains('ball-move')) {
                    var mouseX = 0, mouseY = 0;
                    var limitX = zona.offsetWidth - ball.offsetWidth - 2, limitY = zona.offsetHeight - ball.offsetHeight - 2;
                    mouseX = Math.min(e.pageX - zona.offsetLeft - ball.offsetWidth / 2, limitX);
                    mouseY = Math.min(e.pageY - zona.offsetTop - ball.offsetHeight / 2, limitY);
                    if (mouseX < 0) mouseX = 0;
                    if (mouseY < 0) mouseY = 0;

                    var bx = mouseX + 'px';
                    var by = mouseY + 'px';
                    
                    ball.style.left = bx;
                    ball.style.top = by;
                }
            }
    }

    ball.addEventListener('click', () => {
        ball.classList.add('ball-move');
    });

    document.addEventListener('keyup', (evt) => {
        if (evt.key == 'Escape') {
            ball.classList.remove('ball-move');
        }
      });

    ball.addEventListener('mousedown', evt => {
        document.addEventListener('mousemove', listener);
    });

    ball.addEventListener('mouseup', evt => {
        document.addEventListener('mousemove', listener);
    });

    zona.appendChild(ball);
    document.body.appendChild(zona);
}

function Timer() {
    const timer = document.createElement('div');
    timer.classList.add('timer');
    timer.textContent = '0';
    let clock = 0;
    let runtime = false;

    function start() {
        if (runtime) {
            clock += 1;
            if (clock > 59) clock = 0;
            timer.innerHTML = clock;
        }
        setTimeout(start, 1000);
    }

    start();
    timer.onmouseenter = function() {
        runtime = true;
    }

    timer.onmouseleave = function() {
        runtime = false;
    }

    document.body.appendChild(timer);
}