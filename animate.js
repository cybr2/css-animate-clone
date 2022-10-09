function bounceAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('bounce');
    setTimeout(function(){
        elem.classList.remove('bounce');
    }.bind(this),1000)
   
}
function flashAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('flash');
    setTimeout(function(){
        elem.classList.remove('flash');
    }.bind(this),1000)
}
function tadaAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('tada');
    setTimeout(function(){
        elem.classList.remove('tada')
    }.bind(this),1000)
}
function wobbleAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('wobble');
    setTimeout(function(){
        elem.classList.remove('wobble')
    }.bind(this),2000)
}
// ==================entrances=================================
function backInDownAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('backInDown');
    setTimeout(function(){
        elem.classList.remove('backInDown')
    }.bind(this),1000)
}
function backInLeftAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('backInLeft')
    setTimeout(function(){
        elem.classList.remove('backInLeft')
    }.bind(this),1000)
}
function backInRightAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('backInRight');
    setTimeout(function(){
        elem.classList.remove('backInRight')
    }.bind(this),1000)
}
function backInUpAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('backInUp');
    setTimeout(function(){
        elem.classList.remove('backInUp')
    }.bind(this),1000)
}
// =========================Exits===============================
function backOutDownAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('backOutDown');
    setTimeout(function(){
        elem.classList.remove('backOutDown')
    }.bind(this),1000)
}
function backOutLeftAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('backOutLeft');
    setTimeout(function(){
        elem.classList.remove('backOutLeft')
    }.bind(this),1000)
}
function backOutRightAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('backOutRight');
    setTimeout(function(){
        elem.classList.remove('backOutRight')
    }.bind(this),1000)
}
function backOutUpAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('backOutUp');
    setTimeout(function(){
        elem.classList.remove('backOutUp')
    }.bind(this),1000)
}
// ==========================bouncing entrances==================
window.onload=function bounceInAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('bounceIn');
    setTimeout(function(){
        elem.classList.remove('bounceIn')
    }.bind(this),1000)
}
function bounceInDownAnimate(){
    const elem=document.getElementById('bounce');
    elem.classList.add('bounceInDown');
    setTimeout(function(){
        elem.classList.remove('bounceInDown')
    }.bind(this),1000)
}