/**
 * Created by Administrator on 2016/9/30.
 */

//////////////////////////////////////////////第一个轮播
var body_2 = $('body_2');
var cur = 0, sss = 0, zzz = 0;
var zz = document.getElementsByClassName('body_2_1');
var zsz = document.getElementsByClassName('body_2_1_1')
var lj = document.getElementsByClassName('bt01');
var lj02 = document.getElementsByClassName('bt02');
for (var i = 0; i < 3; i++) {
    body_2.appendChild(zz[i].cloneNode(true));
}
$('btn01').onclick = function () {
    cur--;
    if (cur == -1) {
        cur = zz.length - 4;
        $('body_2').style.left = -407 * (zz.length - 3) + 'px';
    }

    animate(body_2, {left: -407 * cur});
};
$('btn02').onclick = function () {
    cur++;
    if (cur == zz.length - 2) {
        cur = 1;
        $('body_2').style.left = 0;
    }
    animate(body_2, {left: -407 * cur});
};

for (var j = 0; j < zz.length; j++) {

    zsz[j].index = j;

    zsz[j].onmouseover = function () {

        for(var s = 0; s < zz.length; s++) {

            if (s == this.index) {

                lj[s].style.display = 'block';
                lj02[s].style.display = 'block';
            }else {
                lj[s].style.display = 'none';
                lj02[s].style.display = 'none';
            }

        }
    };
    zz[j].onmouseout = function () {

      for (var j = 0; j < zz.length; j++){
          lj[j].style.display = 'none';
          lj02[j].style.display = 'none';
      }
    }
}



//////////////////////////////////////////////第二个轮播
var textone = document.getElementsByClassName('left-4');
var uul = $('uul');
var lli = uul.getElementsByTagName('li');
uul.appendChild(lli[0].cloneNode(true));
$('zh').appendChild(textone[0].cloneNode(true));
$('btn03').onclick = function () {
    sss--;
    if (sss == -1) {
        sss = lli.length - 2;
        uul.style.left = -880 * (lli.length - 1) + 'px';
        $('zh').style.top = -119 * (textone.length -1) + 'px';
    }
    animate($('uul'), {left: -880 * sss});
    animate($('zh'), {top: -119 * sss})
    
};
$('btn04').onclick = function () {
    sss++;
    if (sss == lli.length) {
        sss = 1;
        uul.style.left = 0;
        $('zh').style.top = 0;
    }

    animate($('uul'), {left: -880 * sss});
    animate($('zh'), {top: -119 * sss})
};

var timew = setInterval(dsb, 2000);

function dsb() {

    sss++;
    if (sss == lli.length) {
        sss = 1;
        uul.style.left = 0;
        $('zh').style.top = 0;
    }
    animate(uul, {left: -880 * sss});
    animate($('zh'), {top: -119 * sss})

}

$('left-2').onmouseover = function () {
    clearInterval(timew)
};

$('left-2').onmouseout = function () {
    timew = setInterval(dsb, 2000)
};


//////////////////////////////////////////////第三个轮播
var sul = document.getElementById('left-10-1');
var cnml = document.getElementsByClassName('cnml');
var sli = sul.getElementsByTagName('li');
sul.appendChild(sli[0].cloneNode(true));
$('wofu').appendChild(cnml[0].cloneNode(true));

$('btn05').onclick = function () {
    zzz--;
    if (zzz == -1) {
        zzz = sli.length-2;
        sul.style.left = -880*(sli.length-1)+ 'px';
        $('wofu').style.top = -156 * (cnml.length -1) + 'px';
    }
    animate(sul,{left:  -880 * zzz}) ;
    animate($('wofu'), {top: -156 * zzz})

};
$('btn06').onclick = function () {
    zzz++;
    if (zzz == sli.length) {
        zzz = 1;
        sul.style.left = 0;
        $('wofu').style.top = 0
    }
    animate(sul,{left:  -880 * zzz});
    animate($('wofu'),{top: -156 * zzz})
};
var timme = setInterval(zsz,2000);

function zsz() {

    zzz++;

    if (zzz == sli.length) {
        zzz = 1;
        sul.style.left = 0;
        $('wofu').style.top = 0
    }
    animate(sul, {left: -880 * zzz});
    animate($('wofu'),{top: -156 * zzz})
}

sul.onmouseover = function () {
    clearInterval(timme);
};

sul.onmouseout = function () {
    timme = setInterval(zsz,2000)
};

$('left-9-2').onmouseover = function () {
    clearInterval(timme);
};
$('left-9-2').onmouseout = function () {
    timme = setInterval(zsz,2000)
};
$('cnm').onmouseover = function () {
    clearInterval(timme);
};
$('cnm').onmouseout = function () {
    timme = setInterval(zsz,2000)
};



//选项卡
var rightSeven = document.getElementsByClassName('jj');
var miss = document.getElementsByClassName('miss');
var cui;
for (var o = 0; o < zz.length; o++) {

    rightSeven[o].cui = o;

    rightSeven[o].onmouseover = function () {

        for(var s = 0; s < zz.length; s++) {

            if (s == this.cui) {

                miss[s].style.display = 'block';
                rightSeven[s].style.backgroundColor = '#f24933';

            }else {
                miss[s].style.display = 'none';
                rightSeven[s].style.backgroundColor = '#ff5842';

            }

        }
    };

}


