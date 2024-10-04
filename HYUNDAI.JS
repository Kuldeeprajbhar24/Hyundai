var slideImg = document.getElementById("slide1");
        var images=new Array("IMG/CAR1.jpg","IMG/CAR2.jpg","IMG/BRAND AMBASSADOR.jpg","IMG/CAR1.jpg","IMG/CAR2.jpg","IMG/BRAND AMBASSADOR.jpg");
        var len=images.length;
        var i=0;
        function slider(){
            if(i>len-1){
                i=0;
            }
            slideImg.src=images[i];
            i++;
        }
        setInterval('slider()',3000);
        