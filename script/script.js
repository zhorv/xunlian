window.onload=function(){
        ropeClimbing();
        _5Km();
        _400m();
        hb2();
        snakeLikeRunning();
        test();
}

function test(){
    var testInput=document.getElementById("testInput");
    var testBtn=document.getElementById("testButton");
    var testInput2=document.getElementById("testInput2");
    testBtn.onclick=function(){
        testInput2.value=testInput.value;
    }
}

function getTotal (min,sec){
    var minNum=parseInt(min.value);
    var secNum=parseInt(sec.value);
    var totalsecond=minNum*60+secNum;
    return totalsecond;
}
function getOptionVlave (select){
    var optionValue=select.options[select.selectedIndex].value;
    return optionValue;
}
function _5Km(){
    var min5km=document.getElementById("5km-min");
    var sec5km=document.getElementById("5km-sec");
    var select5km=document.getElementById("5km-select");
    var btn5km=document.getElementById("5km-btn");
    var scroe5km=document.getElementById("scroe5km");
    btn5km.onclick=function(){
        var total5kmSecond=getTotal(min5km,sec5km);
        var select5kmValue=select5km.options[select5km.selectedIndex].value;
        if(select5kmValue==1){
            if(total5kmSecond>1560){
                scroe5km.innerHTML=0;
            }else if(total5kmSecond<=1560&&total5kmSecond>1440){
                scroe5km.innerHTML=60+(1560-total5kmSecond)*0.1;
            }else if(total5kmSecond<=1440&&total5kmSecond>1350){
                scroe5km.innerHTML=80+(1440-total5kmSecond)*0.1;
            }else{
                scroe5km.innerHTML=90+(1350-total5kmSecond)*0.1;
            }
        }else if(select5kmValue==2){
            if(total5kmSecond>1590){
                scroe5km.innerHTML=0;
            }else if(total5kmSecond<=1590&&total5kmSecond>1470){
                scroe5km.innerHTML=60+(1590-total5kmSecond)*0.1;
            }else if(total5kmSecond<=1470&&totalsecond>1380){
                scroe5km.innerHTML=80+(1470-total5kmSecond)*0.1;
            }else{
                scroe5km.innerHTML=90+(1380-total5kmSecond)*0.1;
            }
        }else if(select5kmValue==3){
            if(total5kmSecond>1650){
                scroe5km.innerHTML=0;
            }else if(total5kmSecond<=1650&&total5kmSecond>1530){
                scroe5km.innerHTML=60+(1650-total5kmSecond)*0.1;
            }else if(total5kmSecond<=1530&&total5kmSecond>1440){
                scroe5km.innerHTML=80+(1530-total5kmSecond)*0.1;
            }else{
                scroe5km.innerHTML=90+(1440-total5kmSecond)*0.1;
            }
        }
    }
}

function _400m(){
    var min400m=document.getElementById("400m-min");
    var sec400m=document.getElementById("400m-sec");
    var select400m=document.getElementById("select400m");
    var btn400m=document.getElementById("400m-btn");
    var scroe400m=document.getElementById("scroe400m");
    btn400m.onclick=function(){
    var total400msec=getTotal(min400m,sec400m);
    var select400mVlaue=getOptionVlave(select400m);
    if(select400mVlaue==1){
        if(total400msec>155){
            scroe400m.innerHTML=0;
        }else if(total400msec<=155&&total400msec>140){
            scroe400m.innerHTML=60+(155-total400msec);
        }else if(total400msec<=140&&total400msec>125){
            scroe400m.innerHTML=80+(140-total400msec);
        }else{
            scroe400m.innerHTML=90+(125-total400msec);
        }
    }else if(select400mVlaue==2){
        if(total400msec>165){
            scroe400m.innerHTML=0;
        }else if(total400msec<=165&&total400msec>150){
            scroe400m.innerHTML=60+(165-total400msec);
        }else if(total400msec<=150&&total400msec>135){
            scroe400m.innerHTML=80+(150-total400msec);
        }else{
            scroe400m.innerHTML=90+(135-total400msec);
        }
    }else if(select400mVlaue==3){
        if(total400msec>175){
            scroe400m.innerHTML=0;
        }else if(total400msec<=175&&total400msec>160){
            scroe400m.innerHTML=60+(175-total400msec);
        }else if(total400msec<=160&&total400msec>145){
            scroe400m.innerHTML=80+(160-total400msec);
        }else{
            scroe400m.innerHTML=90+(145-total400msec);
        }
    }

    }
}


function hb2(){
    var hb2Input=document.getElementById("horizontal-bar-2-num");
    var hb2Select=document.getElementById("hb2-select");
    var hb2Btn=document.getElementById("hb2-btn");
    var hb2scroe=document.getElementById("hb2-scroe");
    hb2Btn.onclick=function(){
        var hb2SelectValue=getOptionVlave(hb2Select);
        if(hb2SelectValue==1){
            var hb2Num=parseInt(hb2Input.value);
            if(hb2Num<6){
                hb2scroe.innerHTML=0;
            }else if(hb2Num>=6&&hb2Num<=9){
                alert("这都记不住？？");
                if(hb2Num==6){
                    hb2scroe.innerHTML=60;
                }else if(hb2Num==7){
                    hb2scroe.innerHTML=80;
                }else if(hb2Num==8){
                    hb2scroe.innerHTML=85;
                }else{
                    hb2scroe.innerHTML=90;
                }
            }else{
                hb2scroe.innerHTML=90+(hb2Num-9)*2;
            }

        }else if(hb2SelectValue==2){
            var hb2Num=parseInt(hb2Input.value);
            if(hb2Num<5){
                hb2scroe.innerHTML=0;
            }else if(hb2Num>=5&&hb2Num<=8){
                alert("这都记不住？？");
                if(hb2Num==5){
                    hb2scroe.innerHTML=60;
                }else if(hb2Num==6){
                    hb2scroe.innerHTML=80;
                }else if(hb2Num==7){
                    hb2scroe.innerHTML=85;
                }else{
                    hb2scroe.innerHTML=90;
                }
            }else{
                hb2scroe.innerHTML=90+(hb2Num-9)*2;
            }

        }else{
            var hb2Num=parseInt(hb2Input.value);
            if(hb2Num<4){
                hb2scroe.innerHTML=0;
            }else if(hb2Num>=4&&hb2Num<=7){
                alert("这都记不住？？");
                if(hb2Num==4){
                    hb2scroe.innerHTML=60;
                }else if(hb2Num==5){
                    hb2scroe.innerHTML=80;
                }else if(hb2Num==6){
                    hb2scroe.innerHTML=85;
                }else{
                    hb2scroe.innerHTML=90;
                }
            }else{
                hb2scroe.innerHTML=90+(hb2Num-9)*2;
            }

        }
    }
}

function ropeClimbing(){
    var rcNum=document.getElementById('rope-climbing-num');
    var rcSelect=document.getElementById('rope-climbing-select');
    var rcBtn=document.getElementById("rope-climbing-btn");
    var rcScroe=document.getElementById("rope-climbing-scroe");
    rcBtn.onclick=function(){
        var rcSelectVlaue=rcSelect.options[rcSelect.selectedIndex].value;
        if(rcSelectVlaue==1){
            switch(rcNum.value){
                case "0":rcScroe.innerHTML=0;break;
                case "1":rcScroe.innerHTML=0;break;
                case "2":rcScroe.innerHTML=0;break;
                case "3":rcScroe.innerHTML=60;break;
                case "4":rcScroe.innerHTML=80;break;
                case "5":rcScroe.innerHTML=90;break;
                default:
                var rcNumVlaue=parseInt(rcNum.value);
                rcScroe.innerHTML=90+(rcNumVlaue-5)*5;
            }
        }else if(rcSelectVlaue==2){
            switch(rcNum.value){
                case "0":rcScroe.innerHTML=0;break;
                case "1":rcScroe.innerHTML=0;break;
                case "2":rcScroe.innerHTML=60;break;
                case "3":rcScroe.innerHTML=80;break;
                case "4":rcScroe.innerHTML=90;break;
                default:
                rcScroe.innerHTML=90+(parseInt(rcNum.value)-4)*5;
            }
        }else if(rcSelectVlaue==3){
            switch(rcNum.value){
                case "0":rcScroe.innerHTML=0;break;
                case "1":rcScroe.innerHTML=60;break;
                case "2":rcScroe.innerHTML=80;break;
                case "3":rcScroe.innerHTML=90;break;
            }
        }
    }
}


function snakeLikeRunning(){
    var srInput=document.getElementById("sr-input");
    var srSelect=document.getElementById("sr-select");
    var srBtn=document.getElementById("sr-btn");
    var srScroe=document.getElementById("sr-scroe");
    srBtn.onclick=function(){
        var srOptValue=getOptionVlave(srSelect);
        var srSec=parseInt(srInput.value);
        if(srOptValue==1){
            if(srSec>30){
                srScroe.innerHTML=0;
            }else if(srSec<=30&&srSec>=27){
                srScroe.innerHTML=60+(30-srSec)*0.1;
            }
        }else if(srOptValue==2){
            if(srSec>30){
                srScroe.innerHTML=0;
            }else if(srSec<=30&&srSec>=27){
                srScroe.innerHTML=60+(30-srSec)*0.1;
            }
        }else if(srOptValue==3){
            if(srSec>30){
                srScroe.innerHTML=0;
            }else if(srSec<=30&&srSec>=27){
                srScroe.innerHTML=60+(30-srSec)*0.1;
            }
    }

}
}
