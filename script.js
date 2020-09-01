var p = document.querySelector("#prfl");
    p.addEventListener("click",function(){
        var tl2 = new TimelineMax();

        tl2
        .fromTo('#body2',2,{
            scale :0,
            zindex:9
        },{
            scale :1,
            top:0,
            zindex:9999999999999
        })
    
    });




var tl= new TimelineMax();

       tl
       .fromTo('#top',2,{
           height:'0%'
       },
       {
           height:'40%'

       })
       .fromTo('#bottom',2,{
           height:'0%'
       },
       {
           height:'65%'

       },'-=2')
       .fromTo('#line',1,{
           width:'0%'
       },
       {
           width:'80%'

       })
       .fromTo('.links a',1,{
           top:'150%'
       },
       {
           top:'0%'

       })
    
    
       .fromTo('#top h1',.5,{
           top:'150%',
           opacity:0
       },
       {
           top:'87.5%',
           opacity:1
       })
       .fromTo('#bottom h1',.5,{
        bottom:'150%',
        opacity:0
    },
    {
        bottom:'72%',
        opacity:1
    },'-=.5')
    .fromTo('#body img',1,{
        opacity:0,
        scale:1.2
    },
    {
        opacity:1,
        scale:1
    })
    .fromTo('#bottom #prfl',1,{
        opacity:0,
        scale:0
    },
    {
        opacity:1,
        scale:1
    })