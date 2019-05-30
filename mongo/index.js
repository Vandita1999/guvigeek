import Plyr from 'plyr';
var date_json = {};
var tempjson = {};
var time_Array = [];
const player = new Plyr('#player', {
    autoplay: true
});
player.source = {
    type: 'video',
    sources: [
      {
        src: 'bTqVqk7FSmY',
        provider: 'youtube'
      }
    ]
};

function set_json() {
    date_json = JSON.parse(localStorage.tempjson);
    console.log(date_json);
    localStorage.setItem('tempjson', JSON.stringify(date_json));
}

$(document).ready(function() {
    /*const player = new Plyr('#player');
    if(player.playing==true)
        console.log("hei");*/
    
    var value1 = "intro";
    starttimer(value1);


    $(document).on('click', '.choosevideo', function() {
        var data = {};


        var value = $(this).data('type');
        $("#alert-div").html(value);
        console.log(value1);
        console.log(value);

        data['type_of_lesson'] = value;
        data = JSON.stringify(data);
        console.log(data);

        $.ajax({
            type: "POST",
            async: false,
            url: "index.php",
            data: {
                'mydata': data,
            },
            success: function(result) {

                if (value != value1) {
                    starttimer(value);
                    stoptimer(value1);
                    var time_spent = parseFloat(gettime(value1));
                    var newjson = JSON.parse(localStorage.timejson);
                    if (newjson[value1] == null) {
                        date_json[value1] = time_spent;
                        newjson[value1] = time_spent;
                        localStorage.setItem('timejson', JSON.stringify(newjson));
                        localStorage.setItem('tempjson', JSON.stringify(date_json));

                    } else {
                        var oldtime = parseFloat(newjson[value1]);
                        newjson[value1] = time_spent + oldtime;
                        date_json[value1] = time_spent + oldtime;
                        localStorage.setItem('timejson', JSON.stringify(newjson));
                        localStorage.setItem('tempjson', JSON.stringify(date_json));

                    }
                    value1 = value;
                } else {
                    stoptimer(value);
                    var time_spent = parseFloat(gettime(value));
                    var newjson = JSON.parse(localStorage.timejson);
                    if (newjson[value] == null) {
                        newjson[value] = time_spent;
                        date_json[value] = time_spent;
                        localStorage.setItem('timejson', JSON.stringify(newjson));
                        localStorage.setItem('tempjson', JSON.stringify(date_json));
                        starttimer(value);
                    } else {
                        var oldtime = parseFloat(newjson[value]);
                        newjson[value] = time_spent + oldtime;
                        date_json[value] = time_spent + oldtime;
                        localStorage.setItem('timejson', JSON.stringify(newjson));
                        localStorage.setItem('tempjson', JSON.stringify(date_json));
                        starttimer(value);
                    }
                    // localStorage.setItem('timejson', JSON.stringify(newjson));
                    value1 = value;

                }


            }
        });
    });

    setInterval(function() {
        if (localStorage.getItem('mongocollection') == null) {
            var get_time = JSON.parse(localStorage.tempjson);
            get_time = JSON.stringify(get_time);


            $.ajax({
                type: "POST",
                async: false,
                url: "create_json.php",
                data: {
                    'mydata': get_time,
                },
                success: function(result) {}
            });





        }

    }, 10000);




});
    

