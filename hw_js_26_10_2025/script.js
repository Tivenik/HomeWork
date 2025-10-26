let calculator = function() {
    let main = document.createElement('div');
    main.classList.add('calculator');

    let display = document.createElement('div');
    display.classList.add('calculator__display');
    display.innerHTML = '0';

    let buttons = [
        '7','8','9','/',
        '4','5','6','*',
        '1','2','3','-',
        'C','0','=','+'
    ];

    let btnContainer = document.createElement('div');
    btnContainer.classList.add('calculator__buttons');

    buttons.forEach(function(label) {
        let btn = document.createElement('button');
        btn.classList.add('calculator__btn');
        btn.innerHTML = label;

        btn.addEventListener('click', function() {
            handleInput(label);
        });

        btnContainer.appendChild(btn);
    });

    main.append(display, btnContainer);
    document.body.append(main);

    let current = '';
    let resetNext = false;

    function handleInput(value) {
        if (value === 'C') {
            current = '';
            display.innerHTML = '0';
            return;
        }

        if (value === '=') {
            try {
                let result = eval(current);
                display.innerHTML = result;
                current = String(result);
                resetNext = true;
            } catch {
                display.innerHTML = 'Error';
                current = '';
            }
            return;
        }

        if (resetNext) {
            current = '';
            resetNext = false;
        }

        current += value;
        display.innerHTML = current;
    }
};

calculator();