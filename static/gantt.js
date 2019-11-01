function Gantt(param){

    var tasks = goalToTasks(param);

    // var tasks = {
    //     data: [
    //         {
    //             id: 1, text: "Project #2", start_date: "01-04-2018", duration: 18, order: 10,
    //             progress: 0.4, open: true
    //         },
    //         {
    //             id: 2, text: "Task #1", start_date: "02-04-2018", duration: 8, order: 10,
    //             progress: 0.6, parent: 1
    //         },
    //         {
    //             id: 3, text: "Task #2", start_date: "11-04-2018", duration: 8, order: 20,
    //             progress: 0.6, parent: 1
    //         }
    //     ]
    // };

    gantt.config.details_on_create = false;
    gantt.config.drag_links = false;
    gantt.config.drag_progress = false;
    gantt.config.details_on_dblclick = false;
    gantt.config.drag_resize = false;

    gantt.init("Gantt");
    gantt.parse(tasks);
}

function goalToTasks(goal){
    var goal_length = goal.length;
    
    var obj = new Array();
    for(let i = 0; i <goal_length ; i++){
        var date = new Date(goal[i].dueDate);
        var date2 = new Date(goal[i].createdAt);
        var duration = dateDiff(date2, date);
        date = getFormatDate(date);
        date2 = getFormatDate(date2);
        obj[i] = goal[i];
        obj[i].text = goal[i].description;
        obj[i].id = goal[i]._id;
        obj[i].start_date = date2;
        obj[i].duration = duration;
        delete obj[i]._id;
        delete obj[i].description;
        delete obj[i].createdAt;
        delete obj[i].dueDate;
        obj[i].order = 10;
        obj[i].progress = 1;
        obj[i].open = false;
    }

    var tasks = {
        data: goal
    };

    return tasks;
}

function getFormatDate(date){ 
    var year = date.getFullYear(); //yyyy 
    var month = (1 + date.getMonth()); //M
    month = month >= 10 ? month : '0' + month; //month 두자리로 저장 
    var day = date.getDate(); //d 
    day = day >= 10 ? day : '0' + day; //day 두자리로 저장 
    return day + '-' + month + '-' + year; 
}

function dateDiff(_date1, _date2) {
    var diffDate_1 = _date1 instanceof Date ? _date1 :new Date(_date1);
    var diffDate_2 = _date2 instanceof Date ? _date2 :new Date(_date2);
 
    diffDate_1 =new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 =new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
 
    var diff = diffDate_2.getTime() - diffDate_1.getTime();
    diff = Math.ceil(diff / (1000 * 3600 * 24));
 
    return diff;
}