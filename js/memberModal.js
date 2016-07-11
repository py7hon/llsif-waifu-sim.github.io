function loadWaifuList()
    {
        var index=getCookie("saved-waifu-index");

        if (index != null && index != "") {
            var id = "ID: " + parseInt(id_log[index][0]);
            var name = "Name: " + getFullName(id_log[index][1]);
            var idolized = "Idolized: " + capitalizeFirstLetter(id_log[index][2]);

            
            document.getElementById("id-saved").innerHTML = id;
            document.getElementById("name-saved").innerHTML = name;
            document.getElementById("idolized-saved").innerHTML = idolized;
            
        } else {
            document.getElementById("waifu_load_but").disabled = true;
            $('waifu_load_but').prop('disabled', true);   
        }
    }

loadWaifuList();

