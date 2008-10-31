// Brian Anderson banderson623@gmail.com
// 2008 - A little favor for BILD friends (Levi and Nate)
// For: http://testing.antiochmanifesto.org

slideo_config = {
    slide_div: "slides",
    video_div: "video",
    timed_advance: 5.0
}

var time_code = new Array(  "00:00:00",
                            "00:00:54",
                            "00:03:15",
                            "00:05:26",
                            "00:06:15",
                            "00:06:39",
                            "00:09:30",
                            "00:10:24",
                            "00:11:21",
                            "00:12:30",
                            "00:13:15",
                            "00:17:49",
                            "00:19:48",
                            "00:20:24",
                            "00:20:40",
                            "00:21:26",
                            "00:22:01",
                            "00:23:21",
                            "00:27:12")

// for(i=0; i <= (time_code.length - 1); ++i){
//     console.log(i + ": " + time_code[i] + " total seconds: " + time_code_to_seconds(time_code[i]));
//     
// }


Slideo = Class.create({
    internal_config: {
        time_in_seconds:0,
        current_slide: 0,
        state: "uninitialized",
    },
    slides: [],
    user_config: {},
    
    set_state: function(new_state){
        this.log("Setting state to: " + new_state)
        return this.internal_config.state = new_state;
    },
    
    state: function(){
        return this.internal_config.state;
    },
    
    initialize: function(){
        this.log("Initalizing");
        if(valueOf(arguments[0]) != undefined ) this.user_config = arguments[0];
        // this.slide_element = $(this.user_config.slide_div);
        this.set_state("initialized");
        this.log(this.user_config);
        return this;
    },
    
    
    log:function(text){
        console.log(text);
    },
    
    displaySlide: function(number){
        
    },
    
    setSlideTimingsFromURL: function(){
        // Fill this with 
    },
    
    
    setSlideTimingsFromArrayOfTimeCodes: function(time_code_array){
        for(i=0; i <= (time_code_array.length - 1); ++i){
            var ss = new SlideoSlide;
            ss.time_code = time_code_array[i];
            ss.seconds = this.timeCodeToSeconds(time_code_array[i]);
            ss.slide_number = i + 1; // levi starts at 1 on the files
            this.slides.push(ss);
            // console.log(i + ": " + time_code[i] + " total seconds: " + time_code_to_seconds(time_code[i]));
            
        }
    },
    
    timeCodeToSeconds: function(timecode_string){
        var time_array = timecode_string.split(":").reverse();
        var seconds = 0;
        seconds += parseInt(time_array[0]);
        seconds += parseInt(time_array[1]) * 60;
        if(time_array[2] != undefined) {
            seconds += parseInt(time_array[2]) * 60;
        }
        return seconds;
    }
    
    
});

SlideoSlide = Class.create({
    timecode: "",
    seconds: 0,
    slide_number: 0,
    
    initialize: function(){
        
    }
    
});

var the_player = new Slideo;
the_player.setSlideTimingsFromArrayOfTimeCodes(time_code);