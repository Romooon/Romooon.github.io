$(document).ready(function () {

    let options = { thereshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });

    $(document).ready(function () {
        $('.image-link').magnificPopup({ type: 'image' });
    });

    $("#inputTel").mask("+7(999) 999-9999");

    $('form').submit(function(event){
            if ($("#inputTel").val() == "" || $("#inputEmail").val() == ""){
        event.preventDefault();
        alert("Введите ваш телефон");
    }

    $('form').submit(function(event){
        event.preventDefault();

        $.ajax({
            type: "POST",
            url:"php/mail.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val=("");
            alert("Успешно отправлено!");
            $("form").trigger("reset");

        });
        return false;
    }
    })

});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation');
            change.target.src = change.target.dataset.src;
        }
    });
}

// $('a[href^="#"').click(function () {
//     let valHref = $(this).attr("href");
//     $('html, body').animate({scrollTop: $(valHref).offset().top - 20 + "px"});
// });

// $(window).scroll(function () {
//     let scrollDistance = $(window).scrollTop();

//     $(".container").each((i, el) => {

//         if ($(el).offset().top - $("nav").outerHigh() <= scrollDistance) {
//             $("nav a").each((e, el) => {
//                  if ($(el).hasClass("active")) {
//                     $(el).removeClass("active");
//                 }
//             });
//             $('nav li:eq('+ i +')').find('a').addClass('active');
//             }
//         });
// });


//Статистика

const time = 2000;
const step = 2;

let n;

function outNum(num, elem) {
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        l.innerHTML = n;
    },
        t);
}

outNum(120, 'out-1');
outNum(4600, 'out-2');
outNum(340, 'out-3');
outNum(23, 'out-4');

// Калькулятор
let sum = 0;

$("select").on("change", function () {

    $('#js-button').click(function () {

        var valueType = $('#type').val();
        var valueDesign = $('#design').val();
        var valueAdapt = $('#adapt').val();

        let totalPrice = Number(valueType) + Number(valueDesign) + Number(valueAdapt)

        $('#js-result').html('Стоимость: ' + totalPrice);

    });
});

// Masked




