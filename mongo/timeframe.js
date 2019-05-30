var timejson = {};
var datejson={};


function starttimer(sublesson) {
    TimeMe.initialize({

        currentPageName: sublesson, // current page
        idleTimeoutInSeconds: 60, // stop recording time due to inactivity
    });

    TimeMe.startTimer(sublesson);
    var starttime = TimeMe.getTimeOnCurrentPageInSeconds();
    var newjson=JSON.parse(localStorage.getItem('timejson'));
    if(newjson==null)
    {
    	timejson[sublesson + '->starttime']=starttime;
	localStorage.setItem('timejson',JSON.stringify(timejson));
    
}
else{
	newjson[sublesson + '->starttime']=starttime;
    // timejson[sublesson + '->starttime']=starttime;
    localStorage.setItem('timejson', JSON.stringify(newjson));
	
}
}

function stoptimer(sublesson, starttime) {
    TimeMe.initialize({
        currentPageName: sublesson, // current page
        idleTimeoutInSeconds: 60,
    });
    TimeMe.stopTimer(sublesson);
    var stoptime = TimeMe.getTimeOnCurrentPageInSeconds();
    var newjson=JSON.parse(localStorage.getItem('timejson'));
    if(newjson!=null)
    {
    newjson[sublesson + '->stoptime']=stoptime;
    // timejson[sublesson + '->starttime']=starttime;
    localStorage.setItem('timejson', JSON.stringify(newjson));
}
else{
	timejson[stoptimeublesson + '->stoptime']=stoptime;
	localStorage.setItem('timejson',JSON.stringify(timejson));
}
}

function gettime(sublesson) {
    TimeMe.initialize({
        currentPageName: sublesson, // current page
        idleTimeoutInSeconds: 60,
    });
    var newjson = JSON.parse(localStorage.timejson);

    if ((newjson[sublesson + '->stoptime'] != null) && (newjson[sublesson + '->starttime'] != null)) {
        return parseFloat(newjson[sublesson + '->stoptime']) - parseFloat(newjson[sublesson + '->starttime']);
    } else {
        return parseFLoat(TimeMe.getTimeOnCurrentPageInSeconds());
    }
}