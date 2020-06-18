 /*Задание 2 Создайте страницу с несколькими блоками текста. Реализуйте обработчики событий таким образом, 
чтобы при нажатии на кнопку r – текст становился красного цвета, кнопка g сделает цвет текста зеленым, а b – синим. */
                let text1 = document.getElementsByClassName("text1");

                document.addEventListener('keydown', function(event) {if (event.code == 'KeyR' ){
                    for (let i = 0; i < text1.length; i++) {
                        text1[i].style.color = 'red'; 
                    }
                    
                }
                if (event.code == "KeyG"){
                    for (let i = 0; i < text1.length; i++) {
                        text1[i].style.color = 'green'; 
                    }
                }
                if (event.code == "KeyB"){
                    for (let i = 0; i < text1.length; i++) {
                        text1[i].style.color = 'blue'; 
                    }
                }
                })