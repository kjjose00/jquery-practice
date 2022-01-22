// // // $('button').click(function(){
// // //     console.log('button clicked');
// // // })
// // $.noConflict(); 
// // jQuery(document).ready(function($){
// //     $('button').click(function(){
// //         console.log('button clicked')
// //     });
// //     $('#btn-id').click(function(){
// //         alert('button with id');
// //     });
// //     $('.btn-class').click(function(){
// //         alert('button with class');
// //     })
// //     $('p').click(function(){
// //         alert('you selected the text');
// //     })
// // })
// $.noConflict();
// jQuery(document).ready(function($){
    
//     // mouse events
    
//     $('#para').click(function(){
//         console.log('clicked');
//     })
//     $('#para').dblclick(function(){
//         console.log('double clicked');
//     })
//     $('#para').mouseenter(function(){
//         console.log('mouse entered');
//     })
//     $('#para').mouseleave(function(){
//         console.log('mouse leave');

//     })

//     // keyboard events

//     $('#txt').keypress(function(){
//         console.log('key pressed');
//     })
//     $('#txt').keyup(function(){
//         console.log('key up');
//     })
//     $('#txt').keydown(function(){
//         console.log('key down');
//     })

//     // form events

//     $('#ft').focus(function(){
//         console.log('focus');
//     })
//     $('#ft').blur(function(){
//         console.log('blur');
//     })

//     $('#form-id').submit(function(e){
//         console.log('form submit');
//         e.preventDefault();
//     })

//     // window events

//     $(window).resize(function(){
//         console.log('window resized');
//     })



// })

$.noConflict();
jQuery(document).ready(function($){
    // hide
    $('#btn-hide').click(function(){
        $('#img-id').hide(5000,function(){
            console.log('image hide');
        })
    })
})
// show
jQuery(document).ready(function($){
    $('#btn-show').click(function(){
        $('#img-id').show(5000,function(){
            console.log('image show');
        })
    })
})
// toggle
jQuery(document).ready(function($){
    $('#btn-toggle').click(function(){
        $('#img-id').toggle(function(){
            console.log('image hide');
        })
    })

     // fadeout
     $('#btn-fadeout').click(function(){
        $('#img-id').fadeOut(1000,function(){
            console.log('image fade out');
        })
    })
})
// fadein
jQuery(document).ready(function($){
    $('#btn-fadein').click(function(){
        $('#img-id').fadeIn(1000,function(){
            console.log('image fadein');
        })
    })
})
// toggle
jQuery(document).ready(function($){
    $('#btn-fadetoggle').click(function(){
        $('#img-id').fadeToggle(function(){
            console.log('image toggle');
        });
    });
        $('#btn-fadeto').click(function(){
            $('#img-id').fadeTo(1000,0.2,function(){
                console.log('fade to');
            });
        });

        // slide up
        $('#btn-slideup').click(function(){
            $('#img-id').slideUp();
        })
         // slide down
         $('#btn-slidedown').click(function(){
            $('#img-id').slideDown();
        })
         // slide toggle
         $('#btn-slidetoggle').click(function(){
            $('#img-id').slideToggle();
        })
        // animate
        $('#btn-animate').click(function(){
            $('#img1-id').animate({left:"+=80"},1000,function(){
                console.log('animated...');
            });
        });
        // get text
       let t=$('p').text();
       console.log(t);

    //    set text
    $('#st').click(function(){
        $('p').text('hello you setted the text successfully');
    })

    $('#st').click(function(){
        $('p').html('<b>hello you setted the text successfully</b>');
    })
    // get value
    let s=$('#tt').val();
    console.log(s);

    // set value
    $('#btn-setvalue').click(function(){
        $('#tt').val('my name is god');
    })

    // get attribute

    let h=$('link').attr('href');
    console.log(h);
    let n=$('link').attr('htt');
    console.log(n);

    // set attribute

    $('#id-attribute').click(function(){
        $('link').attr('htt','33');
        console.log($('link').attr('htt'));
    })
    // change image

    $('#id-ci').click(function(){
        $('#img-id').attr('src','image/rat.jpeg');
    })

    // add css

    $('#id-addclass').click(function(){
        $('p').addClass('myclass');
    })

    // remove css

    $('#id-removeclass').click(function(){
        $('p').removeClass('myclass');
    })

    // toggle class

    $('#id-toggleclass').click(function(){
        $('p').toggleClass('myclass');
    })

    // get css property

    let c=$('p').css('color');
    console.log(c);

    // set css property

    $('#id-setcss').click(function(){
        $('p').css('font-size',70);
        $('p').css({'background-color':'yellow','color':'white'});
    })
    

    });


