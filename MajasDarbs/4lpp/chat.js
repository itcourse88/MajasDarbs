

window.onclick = function (e) {
    var id = e.target.id;
    if (id === 'sent') {
        var txtbox = document.getElementById('example2');
        var txt = txtbox.value;
        var txt = txt.bold();
        $("#table").append(txt +" "+" "+ Date().fontsize(1) +'<br>');
        $(txtbox).val('');
    }
    if (id === 'sent') {
        var txtbox = document.getElementById('example');
        var txt = txtbox.value;
        $("#table").append(txt + '<br>');
        $(txtbox).val('');
    }

}

