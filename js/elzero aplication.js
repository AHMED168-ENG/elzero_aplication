/* glopal window */

/* start mouse icon */

var upere = document.querySelector(".upererer");
document.addEventListener("mousemove",function(e) {
    var leteer = e.clientX;
    var leteers = e.clientY;
    upere.style.left = leteer - 0 + "px";
    upere.style.top = leteers - 10 + "px";
})

/* start mouse icon */


 //start firest part of  menio
var uppernave = document.querySelector(".slider .uppernave");
var loarnave = document.querySelector(".slider .loarnave");


 //start firest part of menio drop menio

function navepar() {
    "use strict";
var firest_drop = document.querySelectorAll(".loarnave .firest-drop");
    for(var i = 0; i < firest_drop.length; i++) {
      for(var s = 0; s < 4;s++) {
        for(var x = 0; x < 4; x++) {
            var le = document.createElement("li");
            var linked = document.createElement("a");
            linked.href = "#";
            var lincedtext = document.createTextNode("dowinload" + x);
            linked.appendChild(lincedtext);
            le.appendChild(linked);
            firest_drop[i].children[x].appendChild(le)
        }
      }
    }
};
navepar()
 //end firest part of menio drop menio

 //start carosal
var slider = document.querySelector(".slider");
var slider_children = document.querySelectorAll(".slider .children");
var indecators = document.querySelector(".indecators");
var load = document.querySelector(".slider .load");
var overflows = document.querySelector(".slider .overflow");
var curant = 0;
function curosals() {
    "use strict";
    for(var pp = 0; pp < indecators.children.length; pp++) {
        indecators.children[pp].onclick = function() {
            "use strict";
            curant = parseInt(this.getAttribute("data-numper"));
            move();
        }
    }
}
curosals();
function move() {
    "use strict";
           trabsforming();
           overflowing();
        for(var t = 0; t < indecators.children.length; t++ ) {
        slider_children[t].classList.remove("active1");
        indecators.children[t].classList.remove("active");
        load.style.transition = "0s";
        load.style.width = "0%";
       }
    slider_children[curant].classList.add("active1");
        indecators.children[curant].classList.add("active");
        setTimeout(function() {
            load.style.transition = "9.9s";
            load.style.width = "100%";
        },100);

}
function every() {
    setInterval(function(){
        if(curant == 3) {
        curant = 0;
        move();
    } else {
        curant++;
        move();
    }
    },10000);
}
every();
function trabsforming() {
    "use strict";
    for(var z = 0; z < 4; z++) {
     slider_children[curant].firstElementChild.children[z].style.transition = "1.5s";  
     slider_children[curant].firstElementChild.children[z].style.paddingTop = "10%";  
    } 
    setTimeout(function() {
     for(var z = 0; z < 4; z++) {
     slider_children[curant].firstElementChild.children[z].style.paddingTop = "0%"; 
     slider_children[curant].firstElementChild.children[z].style.transition = "1s";  
    } 
    },1000)
}
// over flow part
function overflowing() {
    "use strict";
    overflows.classList.add("active");
    setTimeout(function() {
    overflows.classList.remove("active");
    },700)
}

// start rightter menio 
var droping = document.querySelectorAll(".slider .over-righter-menio .droping");
var closs = document.querySelector(".slider .over-righter-menio .closs");
var ico = document.querySelector(".loarnave .ico");
function dropings() {
    "use strict";
    for(var zz = 0 ; zz < droping.length; zz++) {
        droping[zz].onclick = function() {
            if(this.firstElementChild.style.display == "none") {
                this.firstElementChild.style.display = "block";
                this.classList.add("active");
            } else {
                this.firstElementChild.style.display = "none";
                this.classList.remove("active");
            }
        }
    }
   closs.onclick = function() {
       "use strict";
         closs.parentElement.parentElement.style.visibility = "hidden";
         closs.parentElement.parentElement.style.opacity = "0";
         closs.parentElement.style.transform = "translatex(100%)";
   } 
   ico.onclick = function() {
       "use strict";
         closs.parentElement.parentElement.style.visibility = "visible";
         closs.parentElement.parentElement.style.opacity = "1";
         closs.parentElement.style.transform = "translatex(0%)";
   }
   document.addEventListener("click",function(e) {
       if(e.target.classList.contains("over-righter-menio")) {
         closs.parentElement.parentElement.style.visibility = "hidden";
         closs.parentElement.parentElement.style.opacity = "0";
         closs.parentElement.style.transform = "translatex(100%)";
       }
   }) 
   document.addEventListener("mousemove",function(e) {
       if(e.target.classList.contains("over-righter-menio")) {
           closs.parentElement.parentElement.style.cursor = "pointer"
       }else {
           closs.parentElement.parentElement.style.cursor = "auto"
           
           
       }
       })   

}
dropings();
//end carosal





/* start thered part text complit */
var statment_array = ["Business","securety","netwark"],
    leter_array = 0,
    statmentarray = 0;
var firest_complit = document.querySelector(".leter_complite .firest-complit");




function adding(statment_array,leter_array,statmentarray,firest_complit1) {
    "use strict";
    var stopers = setInterval(function() {
        if(leter_array < statment_array[statmentarray].length) {
            firest_complit1.textContent += statment_array[statmentarray].charAt(leter_array);
            leter_array += 1;
        } else {
            setTimeout(function(){
                deleter(statment_array,leter_array,statmentarray,firest_complit1);
            },2000)
            clearInterval(stopers)
        }
    },200)
}
function deleter(statment_array,leter_array,statmentarray,firest_complit1) {
    "sue strict";
    var stoper = setInterval(function(){
     if(leter_array > 0) {
            leter_array--;
            firest_complit1.textContent = statment_array[statmentarray].slice(0,leter_array );
        } else {
            leter_array = 0;
            if(statmentarray >= 2) {
            statmentarray = 0;
            } else{
            statmentarray += 1;
            }
            adding(statment_array,leter_array,statmentarray,firest_complit);
            clearInterval(stoper);
        }
    },200)
}
adding(statment_array,leter_array,statmentarray,firest_complit);

/* end thered part text complit */



/* start forth part spiner complit */
var spiner = document.querySelector(".spiner"),
    elementers = spiner.querySelectorAll(".child .inner"),
    childeres = spiner.querySelectorAll(".pairant .child"),
    moltin = spiner.querySelectorAll(".circular");

function spiners(deleying,element,activ,finel) {
    "use strict";
    var stoped = setInterval(function(){
        element.textContent = activ + "%";
        if(activ >= finel) {
            clearInterval(stoped);
        } else {
            activ++;
        }
    },deleying)
}
/* end forth part spiner complit */



/* start fifth part mopil */
var mopil = document.querySelector(".mopil"),
    center = mopil.querySelector(".displaying .center"),
    complit1 = mopil.querySelector("header .complit"),
    aray_list1 = ["games","cartonfilm","education"],
    aray_list_statment1 = 0,
    aray_list_curacter1 = 0,
    aray_list_active1 = 0,
    
    sacand_complit = document.querySelector(".leter_complite .sacand-complit"),
    aray_list2 = ["dragones","hullking","doperel"],
    aray_list_statment2 = 0,
    aray_list_curacter2 = 0,
    aray_list_active2 = 0;

mopil_adding(sacand_complit,aray_list2,aray_list_statment2,aray_list_curacter2,aray_list_active2)


function mopil_adding(element,aray_list,aray_list_statment,aray_list_curacter,aray_list_active) {
    var stoper = setInterval(function(){
        if(aray_list_active < aray_list[aray_list_statment].length) {
            element.textContent = element.textContent + aray_list[aray_list_statment].charAt(aray_list_active);
            aray_list_active++
        } else {
            clearInterval(stoper);
            setTimeout(function(){
                mopill_deleter(element,aray_list,aray_list_statment,aray_list_curacter,aray_list_active);
            },2000)
        }
    },250)
}
mopil_adding(complit1,aray_list1,aray_list_statment1,aray_list_curacter1,aray_list_active1)
function mopill_deleter(element,aray_list,aray_list_statment,aray_list_curacter,aray_list_active) 
{
        aray_list_active--
    var stoper = setInterval(function() {
        if(aray_list_active >= 0) {
            element.textContent = aray_list[aray_list_statment].slice(0,aray_list_active);
            aray_list_active--;
        } else {
            aray_list_active = 0;
            clearInterval(stoper);
            if(aray_list_statment == 2) {
                aray_list_statment = 0;
            } else {
                aray_list_statment++
            }
             setTimeout(function(){
               mopil_adding(element,aray_list,aray_list_statment,aray_list_curacter,aray_list_active)
            },1000)
        }
    },200)
}

function centeree() {
    "use strict";
    center.firstElementChild.lastElementChild.onclick = function() {
        center.firstElementChild.classList.toggle("hidden")
    }
}
centeree();

var linkiden = mopil.querySelectorAll(".displaying .same a");
function mouse_over() {
    "use strict";
    var linked_new_div = document.createElement("div");
    linked_new_div.classList.add("notification");
    var linked_new_div_text = document.createTextNode(this.getAttribute("title"));
    this.removeAttribute("title");
    linked_new_div.appendChild(linked_new_div_text);
    mopil.insertBefore(linked_new_div,mopil.firstElementChild);
    var leftr = this.offsetLeft;
    var topers = this.offsetTop + this.offsetHeight + 5;
    linked_new_div.style.left = leftr + "px";
    linked_new_div.style.top = topers + "px";
}
function mouse_out() {
    "use strict";
    var resalt = mopil.firstElementChild.textContent;
    this.setAttribute("title",resalt);
    mopil.firstElementChild.remove();
}



for(var bbb = 0 ; bbb < linkiden.length;bbb++) {
    linkiden[bbb].onmouseover = mouse_over;
}
for(var bbbb = 0 ; bbbb < linkiden.length;bbbb++) {
    linkiden[bbbb].onmouseout = mouse_out;
}
/* end fifth part mopil */




/* start sex part count */
var counteres = document.querySelector(".counter");
var counteres_child = document.querySelectorAll(".counter .shadow .left_count");
/* end sex part count */




/* start sevin part carosal */
$(function () {
   $('.owl-carousel').owlCarousel({
    loop:false,
    autoplay:false,
    nav:false,
    margin:10,
    mouseDrag:true,
    dotsEach:true,
    dots:false,
    responsive:{
        
          576:{
            items:2
          },768:{
            items:3
          },950:{
            items:4
          }
    }
})
});

/* end sevin part carosal */








/* start eight part defination */
let header_colapsed = document.querySelectorAll(".defination .header_colapsed");

function colapsed() {
    "use strict";
    for(var x = 0; x < header_colapsed.length; x++) {
        header_colapsed[x].onclick = function() {
            for(var z = 0; z < header_colapsed.length; z++) {
                header_colapsed[z].nextElementSibling.style.height = "0";
                header_colapsed[z].nextElementSibling.style.paddingTop = "0px";
                header_colapsed[z].nextElementSibling.style.marginBottom = "0px";
                header_colapsed[z].firstElementChild.classList.remove("minas");
            }
            if(this.nextElementSibling.offsetHeight == 0) {
                if(innerWidth > 0 && innerWidth < 576) {
                this.nextElementSibling.style.height = "463px";
                } else if(innerWidth > 576 && innerWidth < 768) {
                this.nextElementSibling.style.height = "443px";
                } else if(innerWidth > 768 && innerWidth < 992) {
                this.nextElementSibling.style.height = "333px";
                } else {
                this.nextElementSibling.style.height = "323px";
                }
                this.nextElementSibling.style.paddingTop = "19px";
                this.nextElementSibling.style.marginBottom = "20px";
                this.firstElementChild.classList.add("minas");
                this.nextElementSibling.firstElementChild.classList.add("audit");
            } else {
                this.nextElementSibling.style.height = "0px";
                this.nextElementSibling.style.paddingTop = "0px";
                this.nextElementSibling.style.marginBottom = "0px";
                this.firstElementChild.classList.remove("minas");
                this.nextElementSibling.firstElementChild.classList.remove("audit");
            }
        }
    }
}
colapsed();
/* end eight part defination */



/* start tin part gallary */
var gallary = document.querySelector(".gallary"),
    gallary_img = gallary.querySelectorAll(".pairant > div div img"),
    adder = 0,
    gallary_over_flow = gallary.querySelector(".over_flow");
/*--------------------------------------------------------- */

function galary_closed() {
    "use strict";
    gallary_over_flow.firstElementChild.children[0].onclick = function() {
       gallary_over_flow.style.opacity = "0";
       gallary_over_flow.style.visibility = "hidden";
       gallary_over_flow.children[1].firstElementChild.style.opacity = "0";
        document.body.style.overflow = "visible"
    }
    document.addEventListener("click",function(e) {
        if(e.target.classList.contains("over_flow")){
          gallary_over_flow.style.opacity = "0";
          gallary_over_flow.style.visibility = "hidden";
          gallary_over_flow.children[1].firstElementChild.style.opacity = "0";  
            document.body.style.overflow = "visible"
        };
    })
}
galary_closed();

/*--------------------------------------------------------- */

function selector() {
    "use strict";
    for(var x = 0; x < gallary_img.length; x++) {
        gallary_img[x].onclick = function() {
            adder = parseInt(this.getAttribute("data-target"));
            galary_open();
}
}
}
    selector();
/*--------------------------------------------------------- */

gallary_over_flow.firstElementChild.children[1].onclick = function() {
    "use strict";
    if(adder == 0) {
        adder = 7
    } else {
        adder--
    }
    galary_open();
}  
/*--------------------------------------------------------- */
gallary_over_flow.firstElementChild.children[2].onclick = function() {
    "use strict";
    if(adder == 7) {
        adder = 0
    } else {
        adder++
    }
    galary_open();
}

/*--------------------------------------------------------- */

function galary_open() {
    "use strict";

            if(gallary_over_flow.children[1].children.length > 0) {
               gallary_over_flow.children[1].firstElementChild.remove();
            }
            var newimg = gallary_img[adder].cloneNode(true);
            gallary_over_flow.children[1].appendChild(newimg);
            setTimeout(function(){
            gallary_over_flow.children[1].firstElementChild.style.opacity = "1";   
            },400)
            
            gallary_over_flow.style.opacity = "1";
            gallary_over_flow.style.visibility = "visible";
            document.body.style.overflow = "hidden"
}
/* end tin part gallary */



/* start eliven part Pricing */
var Pricing = document.querySelector(".Pricing"),
    pairantss_child = document.querySelectorAll(".pairantss > div"),
    pricing_aray1 = ["$88.2","$65.44","32.44$"],
    pricing_aray2 = ["$9.95","$7.64","$14.5"],
    pricing_salary = document.querySelectorAll(".pairantss .doter .center h5"),
    meno = document.querySelector(".Pricing .meno");

/*--------------------------------------------------------- */

meno.children[1].onclick = function() {
    "use strict";
    for(var z = 0; z < meno.children.length;z++) {
            meno.children[z].classList.remove("marvil");
            this.classList.add("marvil");
    }
    for(var xxc = 0 ; xxc < pricing_salary.length; xxc++)  {
        pricing_salary[xxc].textContent = pricing_aray1[xxc];
    }
}
/*--------------------------------------------------------- */

meno.children[0].onclick = function() {
    "use strict";
        for(var z = 0; z < meno.children.length;z++) {
            meno.children[z].classList.remove("marvil");
            this.classList.add("marvil");
    }
    for(var xxp = 0 ; xxp < pricing_salary.length; xxp++)  {
        pricing_salary[xxp].textContent = pricing_aray2[xxp];
    }
}
/*--------------------------------------------------------- */
function Pricing_overright() {
    "use strict";
    var constant;
    for(var x = 0; x < pairantss_child.length;x++) {
        pairantss_child[x].onmouseover = function() {
            constant = this.firstElementChild.lastElementChild.textContent;
            this.firstElementChild.lastElementChild.textContent = "sale"
        }
        pairantss_child[x].onmouseout = function() {
            this.firstElementChild.lastElementChild.textContent = constant
        }
    }
}
Pricing_overright();
/*--------------------------------------------------------- */
/* end eliven Pricing */






/* start twelv eliven tasks */
var pairant = document.querySelector(".list .main_list .pairant"),
    pairant_child1 = pairant.querySelector(".child1"),
    pairant_child2 = pairant.querySelector(".child2"),
    pairant_child3 = pairant.querySelector(".child3"),
    pairant_child1_input = pairant.querySelector(".child1 > div:first-child input"),
    pairant_child1_icon = pairant.querySelector(".child1 > div:first-child span");
var child2_liter;

/* ------------------------------------ */

function parant_adding() {
    "use strict";
    pairant_child1_icon.onclick = function() {
        if(pairant_child1_input.value == "") {
            if(pairant_child1.lastElementChild.classList.contains("notification")) {
                
        } else {
            var new_div = document.createElement("div");
            var new_div_text = document.createTextNode("please enter eny task to aplication");
            new_div.className = "notification";
            new_div.appendChild(new_div_text);
            pairant_child1.appendChild(new_div);
            var lefter = pairant_child1_input.offsetLeft ;
            var toper = pairant_child1_input.offsetTop  + 56;
            new_div.style.top = toper + "px";
            new_div.style.left = lefter + "px";
                setTimeout(function() {
                    pairant_child1.lastElementChild.remove();
                },3000)
            }
        } else {
                if(pairant_child2.firstElementChild.classList.contains("no_tasks")) {
                   pairant_child2.firstElementChild.remove() 
                }
                for(var cc = 0; cc < pairant_child2.children.length; cc++) {
                if(pairant_child2.children[cc].firstElementChild.lastElementChild.textContent == pairant_child1_input.value) {
                   pairant_child2.children[cc].remove(); 
                }
                }

                var newst_div = document.createElement("div");
                newst_div.className = "new_task";
                var newst_div2 = document.createElement("div");
                var newst_span = document.createElement("span");
                var newst_i = document.createElement("i");
                newst_i.className = "fa fa-trash-o deletico";
                var newst_span2 = document.createElement("span");
                newst_span2.className = "letter";
                var newst_span2_text = document.createTextNode(pairant_child1_input.value);
                newst_span2.appendChild(newst_span2_text);
                newst_span.appendChild(newst_i);
                newst_div2.appendChild(newst_span);
                newst_div2.appendChild(newst_span2);
                newst_div.appendChild(newst_div2);
                pairant_child2.appendChild(newst_div);
                pairant_child1_input.value = "";
                pairant_child1_input.focus() ;
                pairant_child3.lastElementChild.firstElementChild.textContent =  pairant_child2.children.length;
        }
    }
}
parant_adding();




document.addEventListener("click",function(e) {
        "use strict";
        if(e.target.classList.contains("deletico")) {
            e.target.parentElement.parentNode.parentNode.remove();
            pairant_child3.lastElementChild.firstElementChild.textContent =  pairant_child2.children.length;
            pairant_child3.firstElementChild.firstElementChild.textContent = pairant_child2.querySelectorAll(".active").length;
        }
        if(pairant_child2.children.length == 0) {
            var newdiv = document.createElement("div");
            newdiv.className = "no_tasks";
            var newdiv_text = document.createTextNode("no tasks to show enter task");
            newdiv.appendChild(newdiv_text);
            pairant_child2.appendChild(newdiv)
        }
    })

/*----------------------------------------------*/

document.addEventListener("click",function(e) {
    if(e.target.classList.contains("container") ) {
        pairant_child1.lastElementChild.children[1].nextElementSibling.classList.remove("active")
    }
})
/* ----------------------------------------- */
document.addEventListener("click",function(e) {
    if(e.target.classList.contains("letter")) {
        e.target.classList.toggle("active");
        pairant_child3.firstElementChild.firstElementChild.textContent = pairant_child2.querySelectorAll(".active").length;
    } 
})
/* -------------------------------------------------- */
pairant_child1.lastElementChild.children[1].onclick = function() {
    "use strict";
    pairant_child1.lastElementChild.children[1].nextElementSibling.classList.toggle("active")
}
/*----------------------------------------------- */
var pairant_li =  pairant_child1.lastElementChild.querySelectorAll("li");
function valid_pairant_li() {
    for(var x = 0; x < pairant_li.length;x++) {
        pairant_li[x].onclick = function() {
            for(var xx = 0; xx < pairant_li.length; xx++) {
                pairant_li[xx].classList.remove("active");
                this.classList.add("active");
                pairant_child1.lastElementChild.firstElementChild.textContent = this.textContent
            }
        }
    }
}
 valid_pairant_li()
/* ------------------------------------------------------------------*/

/* end twelv tasks */








/* end thirty blog */
/* --------------------------------------------------------------------- */

var blog = document.querySelector(".blog"),
    blog_excution = blog.querySelectorAll(".excution img"),
    blog_indecetor_left = blog.querySelector(".excution .img i:nth-of-type(1)"),
    blog_indecetor_right = blog.querySelector(".excution .img i:nth-of-type(2)"),   
    blog_count = 0,
    blog_video_icon = document.querySelector(".blog .video .img i"),
    blog_overflow = blog.querySelector(".over_flowing");
/* --------------------------------------------------------------------- */

blog_indecetor_left.onclick = function() {
    'use strict';
    if(blog_count == 0) {
        blog_count = 4;
        bloger();
    } else {
        blog_count--;
        bloger();
    }
}
/* --------------------------------------------------------------------- */

blog_indecetor_right.onclick = function() {
    'use strict';
    if(blog_count == 4) {
        blog_count = 0;
        bloger();
    } else {
        blog_count++;
        bloger();
    }
}
/* --------------------------------------------------------------------- */


function bloger() {
    "use strict";
    for(var ss = 0; ss < blog_excution.length; ss++) {
        blog_excution[ss].classList.remove("active");
    }
        blog_excution[blog_count].classList.add("active");
}
/* --------------------------------------------------------------------- */

blog_video_icon.onclick = function() {
    "use string";
    blog_overflow.style.visibility = "visible";
    blog_overflow.style.opacity = "1";
}
document.addEventListener("click",function(e) {
    if(e.target.classList.contains("over_flowing") || e.target.classList.contains("fa-times")) {
    blog_overflow.style.visibility = "hidden";
    blog_overflow.style.opacity = "0"; 
        blog_overflow.querySelector("video").pause();
    }
})
/* end thirty blog */






/* start forty contact */

var contact = document.querySelector(".contact"),
    contact_form = contact.querySelector(".pairant .form form");


function form_validation() {
    "use strict";
    if(contact_form.children[1].value == "") {
        if(contact_form.lastElementChild.classList.contains("notification")) {
           
           } else {
               contact_form.firstElementChild.classList.add("worning");
               form_notification(contact_form.children[1],"يجب املاء حقل name باسم صحيح");
               contact_form.firstElementChild.textContent = "please enter your name curectly";
               setTimeout(function() {
               contact_form.lastElementChild.remove();
               contact_form.firstElementChild.classList.remove("worning");
              },3000)
           }
        
    } else if (contact_form.children[2].value == "") {
        if(contact_form.lastElementChild.classList.contains("notification")) {
           
           } else {
               form_notification(contact_form.children[2],"يجب ادخال حقل الايميل ويجب ان يحتوي علي '@' ثم تكمل بعدها");
               contact_form.firstElementChild.classList.add("worning");
               contact_form.firstElementChild.textContent = "please enter your emial curectly";               setTimeout(function() {
                contact_form.lastElementChild.remove();
               contact_form.firstElementChild.classList.remove("worning");
               },3000)
           }
    } else if (contact_form.children[3].value == "") {
        if(contact_form.lastElementChild.classList.contains("notification")) {
           
           } else {
               form_notification(contact_form.children[3],"يرجي ادخال حقل الرساله برساله صحيحه");
               contact_form.firstElementChild.classList.add("worning");
               contact_form.firstElementChild.textContent = "please enter your textarea curectly";               setTimeout(function() {
                contact_form.lastElementChild.remove();
               contact_form.firstElementChild.classList.remove("worning");
               },3000)           
           }
    }
    if (contact_form.children[2].value != "") {
        if(contact_form.children[2].value.indexOf("@") == -1) {
            contact_form.firstElementChild.textContent = "your email shoud hav '@' caracter"; 
            contact_form.firstElementChild.classList.add("worning");
            setTimeout(function() {
            contact_form.firstElementChild.classList.remove("worning");
            },3000)
        }
        if(contact_form.children[2].value.charAt(contact_form.children[2].value.length - 1) == "@") {
            contact_form.firstElementChild.textContent = "your email shoud complite after '@' .."; 
            contact_form.firstElementChild.classList.add("worning");
            setTimeout(function() {
            contact_form.firstElementChild.classList.remove("worning");
            },3000)
        }
        }
    }
function form_notification(form_element,texting) {
    "use strict";
    var new_div = document.createElement("div"),
        new_div_span = document.createElement("span"),
        new_div_span_text = document.createTextNode(texting),
        new_div_i = document.createElement("i");
    new_div_i.className = "fa fa-info";
    new_div.className = "notification";
    new_div_span.appendChild(new_div_span_text);
    new_div.appendChild(new_div_span);
    new_div.appendChild(new_div_i);
    contact_form.appendChild(new_div);
    new_div.style.left = form_element.offsetLeft + "px";
    new_div.style.top = form_element.offsetTop + form_element.offsetHeight + 69 + "px";
}
contact_form.querySelector("span").onclick = function() {
    "use strict";
    form_validation()
}
/* end forty contact */






/* start upper_button */
var upper_button = document.querySelector(".upper_button");
function upper_buttons() {
    "use strict";
    if(window.scrollY > 450) {
        upper_button.classList.add("active")
    } else {
        upper_button.classList.remove("active")
    }
}

upper_button.onclick = function() {
    "use strict";
    var stoper = setInterval(function() {
           if(window.scrollY <= 0) {
            clearInterval(stoper);
           }else {
            window.scrollBy(0,-20) 
       }              
    },10)
}
/* end upper_button */


/* start chang_color */


var aside = document.querySelector("aside");

aside.firstElementChild.onclick = function bb() {
    "use strict";
    aside.classList.toggle("chang");
    this.classList.toggle("active");
}
aside.querySelectorAll("ul")[0].onclick = function(e) {
    "use strict";
    var licolor = e.target.getAttribute("data-color");
    document.documentElement.style.setProperty("--main-color",licolor)
}

/* end chang_color */



/* start witing div*/
var witing_div = document.querySelector(".witing-div");


function loading() {
    "use strict";
    document.body.style.overflow = "hidden";
    setTimeout(function(){
    document.body.style.overflow = "visible";
    witing_div.style.visibility = "hidden";
    witing_div.style.opacity = "0";
    },1000)
}
/* end witing div */

/* start navpar_validation */
var navpar_validation = document.querySelectorAll(".slider .loarnave .mino > ul > li > a"),
    navpar_validation_leter_complite = document.getElementById("about"),
    navpar_validation_pages = document.getElementById("pages"),
    navpar_validation_blog = document.getElementById("blog"),
    navpar_validation_galary = document.getElementById("gallary"),
    navpar_validation_contact = document.getElementById("contact");
function replaced() {
    for(var x =0; x < navpar_validation.length; x++) {
        navpar_validation[x].classList.remove("active");
    }
}
function navpar_validations() {
    "use strict";
    if(window.scrollY >= navpar_validation_contact.offsetTop) {
        replaced();
        navpar_validation[5].classList.add("active");
    } else if(window.scrollY >= navpar_validation_galary.offsetTop) {
        replaced();
        navpar_validation[4].classList.add("active"); 
    } else if(window.scrollY >= navpar_validation_blog.offsetTop) {
        replaced();
        navpar_validation[3].classList.add("active");   
    } else if(window.scrollY >= navpar_validation_pages.offsetTop) {
        replaced();
        navpar_validation[2].classList.add("active");
    } else if(window.scrollY >= navpar_validation_leter_complite.offsetTop) {
        replaced();
        navpar_validation[1].classList.add("active");
    } else  {
        replaced();
        navpar_validation[0].classList.add("active");
    }
}
/* end navpar_validation */








// window relowad
window.onload = function() {
    move();
    loading();
}


window.onscroll = function() {
/*------------------------------------------------*/

    if(document.documentElement.scrollTop > counteres.offsetTop - 700  && document.documentElement.scrollTop < counteres.offsetTop - 665 ) {
      spiners(1,counteres_child[0],0,2010);
      spiners(3,counteres_child[1],0,895);
    }
      if(document.documentElement.scrollTop + 50 > spiner.offsetTop && document.documentElement.scrollTop < spiner.offsetTop + 20) {
      spiners(80,elementers[0],0,90);
      spiners(90,elementers[1],0,80);
      spiners(60,elementers[2],0,70);
      spiners(75,elementers[3],0,100);
      spiners(45,elementers[4],0,65);
      for(x = 0 ; x < childeres.length; x++) {
        childeres[x].classList.add("finish")
    }   
      for(xxx = 0 ; xxx < moltin.length; xxx++) {
        moltin[xxx].classList.add("moltin")
    }     

}
/*------------------------------------------------*/
    if(window.scrollY > 300) {
        uppernave.style.display = "none";
        loarnave.classList.add("active");
    } else {
        uppernave.style.display = "block";
        loarnave.classList.remove("active");
    }
/*------------------------------------------------*/
    upper_buttons();
    navpar_validations()
/*------------------------------------------------*/

}
  $(function () {
    
      "use strict"
    
  wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };
  
})



