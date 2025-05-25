
var favicon_images = [
                    '../img/gif-img/frame_00_delay-0.04s.gif',
                    '../img/gif-img/frame_01_delay-0.04s.gif',
                    '../img/gif-img/frame_02_delay-0.04s.gif',
                    '../img/gif-img/frame_03_delay-0.04s.gif',
                    '../img/gif-img/frame_04_delay-0.04s.gif',
                    '../img/gif-img/frame_05_delay-0.04s.gif',
                    '../img/gif-img/frame_06_delay-0.05s.gif',
                    '../img/gif-img/frame_07_delay-0.04s.gif',
                    '../img/gif-img/frame_08_delay-0.04s.gif'
                    ],
    image_counter = 0;

    setInterval(function(){
        if(document.querySelector("link[rel='icon']") !== null)
            document.querySelector("link[rel='icon']").remove();
        if(document.querySelector("link[rel='shortcut icon']") !== null)
            document.querySelector("link[rel='shortcut icon']").remove();
            

    document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
    

    if(image_counter == favicon_images.length -1)
        image_counter = 0;
    else
        image_counter++;
}, 75);
