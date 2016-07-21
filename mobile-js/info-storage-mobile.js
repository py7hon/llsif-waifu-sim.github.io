var voiceVolume = 0.3;
var musicVolume = 0.3;
var background = 0;
var globalIndex = 0;


// Setting and getting the cookies

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}





// Check cookies

function checkCookie() {
    var index=getCookie("waifu-index");
    globalIndex = index;
    if (index != null && index != "") {
        mainWaifuSet(index);
    } else{
    	document.getElementById("idol_img").src= 'images/waifu/honoka0.png';
    }
}


function checkBackgroundCookie() {
    var index=getCookie("background-index");
    if (index != null && index != "") {
        mainBackgroundSet(index);
    } else{
    	document.getElementById("homeScreen").src= 'images/background/background0.png';
    }
}


function checkVolumeCookie() {
    var voice=getCookie("volumeVoice-value");
    var background=getCookie("volumeBack-value");

    if (voice != null && voice != "") {
        volumeVoiceSet(voice);
    } 

    if (background != null && background != "") {
        volumeBackSet(background);
    }
}

function checkWaifuLoadCookie(but_id) {
    var index=getCookie("saved-waifu-index-1");
    var index2=getCookie("saved-waifu-index-2");
    var index3=getCookie("saved-waifu-index-3");

    if (index != null && index != "") {

        if(but_id == 'waifu_load_but_1'){
            globalIndex = index;
            savedWaifuLoad(index);
        }
        
        
    } 

    if (index2 != null && index2 != "") {

        if(but_id == 'waifu_load_but_2'){
            globalIndex = index2;
            savedWaifuLoad(index2);
        }
        
        
    } 

    if (index3 != null && index3 != "") {

        if(but_id == 'waifu_load_but_3'){
            globalIndex = index3;
            savedWaifuLoad(index3);
        }
            
    } 
}








// Store cookies

function storeCookie(index)
{
    setCookie("waifu-index", index, 6);
}

function storeSaveWaifuCookie(index, but_id)
{
    if(but_id == 'waifu_save_but_1'){
       setCookie("saved-waifu-index-1", index, 6); 
   } else if(but_id == 'waifu_save_but_2'){
       setCookie("saved-waifu-index-2", index, 6); 
   } if(but_id == 'waifu_save_but_3'){
       setCookie("saved-waifu-index-3", index, 6); 
   } 
    
}


function storeBackgroundCookie(index)
{
	setCookie("background-index", index, 5);
}

function storeVolumeMusicCookie(volume)
{
	setCookie("volumeBack-value", volume, 4);
}

function storeVolumeVoiceCookie(volume)
{
    setCookie("volumeVoice-value", volume, 4);
}





// Functions that uses the cookies to load the values

function mainWaifuSet(index)
{
    var id = parseInt(id_log[index][0]);
    var name = id_log[index][1];
    var idolized = id_log[index][2];

    // Once we get the info, get the image
    var path;

    if(idolized == 'yes')
    {
        path = "./scraped-images/" + name + "/" + id + "_id.png";
        $('#select-idol').val('yes').selectmenu('refresh');
    }else{
        path = "./scraped-images/" + name +  "/" + id + ".png";
        $('#select-idol').val('no').selectmenu('refresh');
    }




    //file exists
    document.getElementById("idol_img").src=path;

    nameAssign(name);
    $('#select-waifu').val(name).selectmenu('refresh');


    document.getElementById("card_id").value = id;



    if (globalAudio!=null){
        globalAudio.pause();
    }

    
}


function mainBackgroundSet(index){
    background = parseInt(index);
    var backpath = 'images/background/background' + index.toString() + '.png';
    document.getElementById("homeScreen").src=backpath;
}

function volumeVoiceSet(volume_value)
{
    volume_ex_value = volume_value*100;
    voiceVolume = volume_value;

    var input = document.getElementById("volumeSliderVoice");
    input.value = volume_ex_value;
}

function volumeBackSet(volume_value)
{
    volume_ex_value = volume_value*100;
    musicVolume = volume_value;

    var input = document.getElementById("volumeSliderMusic");
    input.value = volume_ex_value;
    
}



function savedWaifuLoad(index)
{

    var id = parseInt(id_log[index][0]);
    var name = id_log[index][1];
    var idolized = id_log[index][2];


    // Once we get the info, get the image
    var path;

    if(idolized == 'yes')
    {
        path = "./scraped-images/" + name + "/" + id + "_id.png";
        document.querySelector("input[value='yes']").checked = true;
    }else{
        path = "./scraped-images/" + name +  "/" + id + ".png";
        document.querySelector("input[value='no']").checked = true;
    }

    //file exists
    document.getElementById("idol_img").src=path;

    nameAssign(name);
    document.getElementById("card_id").value = id;

    if (globalAudio!=null){
        globalAudio.pause();
    }

    setTimeout(function() {
        commandSelect(0);
    }, 500, true)


}










// Functions that the cookie functions may need
function getFullName(name)
{
    if(name == 'honoka')
    {
        return 'Kousaka Honoka';
    } else if(name == 'kotori'){
        return 'Minami Kotori';
    }else if(name == 'umi'){
        return 'Sonoda Umi';
    } else if(name == 'hanayo'){
        return 'Koizumi Hanayo';
    } else if(name == 'rin'){
        return 'Hoshizora Rin';
    } else if(name == 'maki'){
        return 'Nishikino Maki';
    } else if(name == 'nozomi'){
        return 'Tojo Nozomi';
    } else if(name == 'eli'){
        return 'Ayase Eli';
    } else if(name == 'nico'){
        return 'Yazawa Nico';


    } else if (name == 'chika'){
        return 'Takami Chika';
    } else if(name == 'you'){
        return 'Watanabe You';
    }else if(name == 'riko'){
        return 'Sakurauchi Riko';
    } else if(name == 'ruby'){
        return 'Kurosawa Ruby';
    } else if(name == 'hanamaru'){
        return 'Kunikida Hanamaru';
    } else if(name == 'yoshiko'){
        return 'Tsushima Yoshiko';
    } else if(name == 'dia'){
        return 'Kurosawa Dia';
    } else if(name == 'mari'){
        return 'Ohara Mari';
    } else if(name == 'kanan'){
        return 'Matssura Kanan';
    } else {
        return 'none';
    } 
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
