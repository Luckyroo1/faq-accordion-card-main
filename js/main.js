
var acc = document.getElementsByClassName(`card__faq--iten--question`);


for (let i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function () {
        this.classList.toggle("ativo");

        
        var answer = document.querySelectorAll('.card__faq--iten--answer');
        var rotateArrow = document.querySelectorAll('.card__faq--arrow')

        if(rotateArrow[i].style.transform === 'rotate(180deg)'){
            rotateArrow[i].style.transform = 'rotate(0)';
        }
        else{
            rotateArrow[i].style.transform = 'rotate(180deg)'
        }


        if(answer[i].style.display === 'block'){
            answer[i].style.display = 'none';
        } else{
            answer[i].style.display ='block';
        }
    })

}


