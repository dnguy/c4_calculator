var number_array = ['', ''];
    var number_index = 0; //var jordan
    var temp_num = '';
    var operator = '';
    var decimal_clicked = false;
    var multi_number = '';
    var answer = 0;
    var did_calculate = false;

    function input_digit(typed_number) {
        if (did_calculate) {
            clear_data();
            did_calculate = false;
        }
        number_array[number_index] = number_array[number_index] + typed_number;
        $("#inputdisplay").val(number_array[number_index]);
        console.log("number_array : ", number_array);
    }

    function decimal(typed_number) {
        if (decimal_clicked == false) {
            number_array[number_index] = number_array[number_index] + typed_number;
            $("#inputdisplay").val(number_array[number_index]);
            decimal_clicked = true;
        }
    }

    function addition() {
        if (number_array[0] == '' && number_array[1] == '') {
            return;
        }
        if (number_array[0] != '' && number_array[1] != '') {
            var result = calculate();
            number_array[0] = '' + result;
            number_array[1] = '';
        }
        number_index = 1;
        operator = '+';
        decimal_clicked = false;
        did_calculate = false;


    }

    function subtraction() {
        if (number_array[0] == '' && number_array[1] == '') {
            return;
        }

        if (number_array[0] != '' && number_array[1] != '') {
            var result = calculate();
            number_array[0] = '' + result;
            number_array[1] = '';
        }
        number_index = 1;
        operator = '-'
        decimal_clicked = false;
        did_calculate = false;


    }

    function multiply() {
        if (number_array[0] == '' && number_array[1] == '') {
            return;
        }

        if (number_array[0] != '' && number_array[1] != '') {
            var result = calculate();
            number_array[0] = '' + result;
            number_array[1] = '';
        }
        number_index = 1;
        operator = '*';
        decimal_clicked = false;
        did_calculate = false;

    }

    function divide() {
        if (number_array[0] == '' && number_array[1] == '') {
            return;
        }

        if (number_array[0] != '' && number_array[1] != '') {
            var result = calculate();
            number_array[0] = '' + result;
            number_array[1] = '';
        }
        number_index = 1;
        operator = '/';
        decimal_clicked = false;
        did_calculate = false;

    }
    function sign_inversion(){
    //     if(number_index==0){
    //     if($('#inputdisplay').val().indexOf('-') == 0){
    //         $('#inputdisplay').val($('#inputdisplay').val().substring(1));
    //     }
    //     else {
    //         $('#inputdisplay').val('-'+$('#inputdisplay').val())

    //     }
    // }

        if(number_index==0){
            if(number_array[0].indexOf('-') == 0){
            number_array[0] = number_array[0].substring(1);

            }
            else {
            number_array[0]= '-' + number_array[0];
        }
            
        $('#inputdisplay').val(number_array[0])
        }
        else{
        if(number_array[1].indexOf('-') == 0){
            number_array[1] = number_array[1].substring(1);

        }
        else {
            number_array[1]= '-' + number_array[1];
        }
        $('#inputdisplay').val(number_array[1])
    }

    }
    function equalPressed() {

        switch (operator) {
            case '+':

                //the last thing I pressed was =
                if (did_calculate) {
                    //second value is empty
                    if (number_array[1] == '') {
                        //default double the first value
                        number_array[1] = number_array[0];
                    } else {
                        //set first index to total of both values
                        number_array[0] = parseFloat(number_array[0]) + parseFloat(number_array[1]);
                    }
                } else {
                    //last thing I pressed wasnt =
                    if (number_array[1] == '') {
                        number_array[1] = number_array[0];
                    }
                }

                calculate();

                break;


            case '-':
                //the last thing I pressed was =
                if (did_calculate) {
                    //second value is empty
                    if (number_array[1] == '') {
                        //default double the first value
                        number_array[1] = number_array[0];
                    } else {
                        //set first index to total of both values
                        number_array[0] = parseFloat(number_array[0]) - parseFloat(number_array[1]);
                    }
                } else {
                    //last thing I pressed wasnt =
                    if (number_array[1] == '') {
                        number_array[1] = number_array[0];
                    }
                }

                calculate();
                break;
            case '*':
                //the last thing I pressed was =
                if (did_calculate) {
                    //second value is empty
                    if (number_array[1] == '') {
                        //default double the first value
                        number_array[1] = number_array[0];
                    } else {
                        //set first index to total of both values
                        number_array[0] = parseFloat(number_array[0]) * parseFloat(number_array[1]);
                    }
                } else {
                    //last thing I pressed wasnt =
                    if (number_array[1] == '') {
                        number_array[1] = number_array[0];
                    }
                }
                calculate();
                break;
            case '/':
                //the last thing I pressed was =
                if (did_calculate) {
                    //second value is empty
                    if (number_array[1] == '') {
                        //default double the first value
                        number_array[1] = number_array[0];
                    } else {
                        //set first index to total of both values
                        number_array[0] = parseFloat(number_array[0]) / parseFloat(number_array[1]);
                    }
                } else {
                    //last thing I pressed wasnt =
                    if (number_array[1] == '') {
                        number_array[1] = number_array[0];
                    }
                }
                calculate();
                break;
            default:
        }
        
    }

    function calculate() {
        if (number_array[0] == '' && number_array[1] == '') {
            return;
        }

        var x = parseFloat(number_array[0]);
        var y = parseFloat(number_array[1]);
        if (isNaN(x)) {
            x = 0;
        }
        if (isNaN(y)) {
            y = 0;
        }
        console.log(typeof x, typeof y)
        switch (operator) {
            case '+':
                answer = x + y;
                break;


            case '-':
                answer = x - y;
                break;
            case '*':
                answer = x * y;
                break;
            case '/':
                answer = x / y;
                break;
            default:
        }

        //update the display
        console.log(answer)
        did_calculate = true;
        $("#inputdisplay").val(answer);
        return answer;


    }


    function clear_array() {
        if (number_index == 0) {
            number_array[0] = '';
            $("#inputdisplay").val(number_array[0]);
        } else if (number_index == 1) {
            number_array[1] = '';
            $("#inputdisplay").val(number_array[1]);
        }

    }

    function clear_data(clear_display) {
        console.log("clear data called");
        if (typeof clear_display == 'undefined') {
            clear_display = false;
        }
        number_array[0] = '';
        number_array[1] = '';
        number_index = 0;
        decimal_clicked = false;
        answer = 0;
        if (clear_display) {
            $("#inputdisplay").val(0)
        }
    }